import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [loading, setLoading] = useState(true);

    const api = axios.create({
        baseURL: 'http://localhost:5000/api',
        withCredentials: true, // Important for cookies
    });

    // Request interceptor to add access token
    api.interceptors.request.use(
        (config) => {
            console.log(`[API] Request: ${config.url}`);
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
                console.log('[API] Attaching Access Token');
            } else {
                console.warn('[API] No Access Token available');
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // Response interceptor for silent refresh
    api.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

            // If 401 (Unauthorized) and we haven't retried yet
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;

                try {
                    // Call refresh endpoint (cookies sent automatically)
                    const { data } = await axios.get('http://localhost:5000/api/auth/refresh', {
                        withCredentials: true
                    });

                    if (data.ok) {
                        setAccessToken(data.accessToken);
                        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
                        return api(originalRequest); // Retry original request with new token
                    } else {
                        throw new Error(data.error || 'Refresh failed');
                    }
                } catch (refreshError) {
                    // Refresh failed (token expired/invalid) -> logout
                    console.log('[AUTH] Silent refresh failed or expired');
                    setUser(null);
                    setAccessToken(null);
                    return Promise.reject(refreshError);
                }
            }
            return Promise.reject(error);
        }
    );

    // Verify session on mount (try to refresh immediately or get profile)
    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Try to get a new access token using the refresh cookie
                const { data } = await axios.get('http://localhost:5000/api/auth/refresh', {
                    withCredentials: true
                });

                if (data.ok) {
                    setAccessToken(data.accessToken);
                    // Get profile
                    const profileRes = await axios.get('http://localhost:5000/api/auth/me', {
                        headers: { Authorization: `Bearer ${data.accessToken}` }
                    });
                    if (profileRes.data.ok) {
                        setUser(profileRes.data);
                    }
                }

            } catch (error) {
                console.log("[AUTH] Init: Not authenticated or session expired");
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = async (email, password) => {
        try {
            const { data } = await api.post('/auth/login', { email, password });
            if (data.ok) {
                setUser({ ...data, token: undefined });
                setAccessToken(data.accessToken);
                return data;
            } else {
                throw new Error(data.error || 'Login failed');
            }
        } catch (err) {
            console.error('[AUTH] Login Error:', err.response?.data?.error || err.message);
            throw err;
        }
    };

    const signup = async (userData) => {
        try {
            const { data } = await api.post('/auth/register', userData);
            if (data.ok) {
                setUser({ ...data, token: undefined });
                setAccessToken(data.accessToken);
                return data;
            } else {
                throw new Error(data.error || 'Signup failed');
            }
        } catch (err) {
            console.error('[AUTH] Signup Error:', err.response?.data?.error || err.message);
            throw err;
        }
    };

    const logout = async () => {
        try {
            await api.post('/auth/logout');
        } catch (err) {
            console.error(err);
        }
        setUser(null);
        setAccessToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, accessToken, login, signup, logout, loading, api }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
