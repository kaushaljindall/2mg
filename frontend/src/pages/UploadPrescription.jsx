import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const UploadPrescription = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        if (!selected) return;

        // Validation
        if (!['image/jpeg', 'image/png', 'application/pdf'].includes(selected.type)) {
            setMessage({ type: 'error', text: 'Only JPG, PNG and PDF files are allowed' });
            return;
        }

        if (selected.size > 10 * 1024 * 1024) { // 10MB
            setMessage({ type: 'error', text: 'File size must be less than 10MB' });
            return;
        }

        setFile(selected);
        setMessage(null);

        // Preview if image
        if (selected.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(selected);
        } else {
            setPreview('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('prescription', file);

        setLoading(true);
        try {
            await api.post('/prescriptions', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage({ type: 'success', text: 'Prescription uploaded successfully! Pending approval.' });
            setTimeout(() => navigate('/profile'), 2000); // Redirect to profile or orders
        } catch (error) {
            console.error(error);
            setMessage({ type: 'error', text: error.response?.data?.message || 'Upload failed' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Upload Prescription</h2>

            {message && (
                <div className={`p-3 mb-4 rounded text-center ${message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {message.text}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 mb-2">Select Prescription File</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        accept="image/jpeg,image/png,application/pdf"
                        className="w-full border p-2 rounded"
                        required
                    />
                    <p className="text-xs text-gray-500 mt-1">Max 10MB. JPG, PNG, PDF only.</p>
                </div>

                {preview && (
                    <div className="mt-4">
                        <p className="text-sm font-semibold mb-2">Preview:</p>
                        <img src={preview} alt="Preview" className="w-full h-48 object-contain border rounded bg-gray-50" />
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading || !file}
                    className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 disabled:bg-gray-400"
                >
                    {loading ? 'Uploading...' : 'Submit Prescription'}
                </button>
            </form>
        </div>
    );
};

export default UploadPrescription;
