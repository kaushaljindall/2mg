const http = require('http');

const postRequest = (path, data) => {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 5000,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(data)
            }
        };

        const req = http.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                try {
                    resolve({ status: res.statusCode, body: JSON.parse(body) });
                } catch (e) {
                    resolve({ status: res.statusCode, body: body });
                }
            });
        });

        req.on('error', (e) => reject(e));
        req.write(data);
        req.end();
    });
};

const runTests = async () => {
    console.log('Testing Auth API...');

    // 1. Test Login with Seeded Admin
    try {
        const loginData = JSON.stringify({
            email: 'admin@example.com',
            password: 'password123'
        });
        const loginRes = await postRequest('/api/auth/login', loginData);
        if (loginRes.status === 200 && loginRes.body.token) {
            console.log('✅ Local Admin Login Success');
        } else {
            console.error('❌ Local Admin Login Failed', loginRes.status, loginRes.body);
        }
    } catch (e) {
        console.error('❌ Connection Error (Login)', e.message);
    }

    // 2. Test Signup
    try {
        const signupData = JSON.stringify({
            name: 'Test User',
            email: `test${Date.now()}@example.com`,
            password: 'password123'
        });
        const signupRes = await postRequest('/api/auth/register', signupData);
        if (signupRes.status === 201 && signupRes.body.token) {
            console.log('✅ Signup Success');
        } else {
            console.error('❌ Signup Failed', signupRes.status, signupRes.body);
        }
    } catch (e) {
        console.error('❌ Connection Error (Signup)', e.message);
    }
};

// Wait for server to start
setTimeout(runTests, 3000);
