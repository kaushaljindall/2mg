const axios = require('axios');

const API_URL = 'http://localhost:5000/api';

// 1. Register/Login User
const testFlow = async () => {
    try {
        console.log('--- Testing Login ---');
        const loginRes = await axios.post(`${API_URL}/auth/login`, {
            email: 'admin@example.com',
            password: '123' // Assuming this password from seed or manual creation
        });

        console.log('Login Response Status:', loginRes.status);
        if (!loginRes.data.ok) {
            console.error('Login Failed:', loginRes.data);
            return;
        }

        const accessToken = loginRes.data.accessToken;
        console.log('Access Token Received:', accessToken ? 'Yes' : 'No');

        // 2. Place Order
        console.log('\n--- Testing Place Order ---');
        // Need a product ID. Let's fetch products first.
        const productsRes = await axios.get(`${API_URL}/products`);
        const product = productsRes.data.products[0]; // Assuming structure

        if (!product) {
            console.error('No products found to order');
            return;
        }

        console.log('Ordering Product:', product.name);

        const orderData = {
            orderItems: [{
                product: product._id,
                name: product.name,
                qty: 1,
                price: product.price
            }],
            totalPrice: product.price
        };

        const orderRes = await axios.post(`${API_URL}/orders`, orderData, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        console.log('Order Response Status:', orderRes.status);
        if (orderRes.data.ok) {
            console.log('Order Placed Successfully:', orderRes.data.order._id);
        } else {
            console.error('Order Placement Failed:', orderRes.data);
        }

    } catch (error) {
        console.error('Test Failed:', error.response ? error.response.data : error.message);
    }
};

testFlow();
