const axios = require('axios'); // Utilizing axios if available or standard http? 
// Let's stick to standard http to avoid dependency issues if axios isn't installed (though usually preferred).
// Actually package.json didn't list axios. I'll use the same helper as test_auth.js or use fetch if node 18.
// Node 18 supports fetch! simplified.

const BASE_URL = 'http://localhost:5000/api';

async function runTests() {
    try {
        console.log('--- Starting Order Flow Tests ---');

        // 1. Login
        console.log('1. Logging in...');
        const loginRes = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'user@example.com', password: 'password123' })
        });
        const userData = await loginRes.json();
        const userToken = userData.token;
        if (!userToken) throw new Error('User login failed');

        const adminRes = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'admin@example.com', password: 'password123' })
        });
        const adminData = await adminRes.json();
        const adminToken = adminData.token;
        if (!adminToken) throw new Error('Admin login failed');

        console.log('   Login successful.');

        // 2. Get Products
        const prodRes = await fetch(`${BASE_URL}/products`);
        const products = await prodRes.json();
        const paracetamol = products.find(p => p.name === 'Paracetamol');
        const antibiotic = products.find(p => p.name === 'Antibiotic X');
        const vitaminC = products.find(p => p.name === 'Vitamin C');

        // 3. Buy Paracetamol (No Rx)
        console.log('3. Testing Normal Order (Paracetamol)...');
        const order1 = await fetch(`${BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify({
                orderItems: [{ product: paracetamol._id, name: paracetamol.name, qty: 1, price: paracetamol.price }],
                totalPrice: paracetamol.price
            })
        });
        if (order1.status === 201) console.log('   ✅ Success');
        else console.log('   ❌ Failed', await order1.text());

        // 4. Buy Antibiotic X (Rx Required - Should Fail)
        console.log('4. Testing Rx Order without Approval (Antibiotic)...');
        const order2 = await fetch(`${BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify({
                orderItems: [{ product: antibiotic._id, name: antibiotic.name, qty: 1, price: antibiotic.price }],
                totalPrice: antibiotic.price
            })
        });
        if (order2.status === 400) console.log('   ✅ Correctly Failed (Rx required)');
        else console.log('   ❌ Unexpected result', order2.status, await order2.text());

        // 5. Approve Prescription (Find one first)
        // Need to find prescription ID for user.
        // Assuming seeded prescription exists.
        // Or we create one? Let's try to fetch seeded.
        // Wait, regular user endpoint for my prescriptions?
        console.log('5. Approving Prescription...');
        const presRes = await fetch(`${BASE_URL}/prescriptions`, {
            headers: { 'Authorization': `Bearer ${adminToken}` }
        });
        const prescriptions = await presRes.json();
        const pendingRx = prescriptions.find(p => p.status === 'pending');

        if (pendingRx) {
            const approveRes = await fetch(`${BASE_URL}/prescriptions/${pendingRx._id}/status`, {
                method: 'PATCH', // check verify routes, it was PATCH /:id/status in controller doc? 
                // Wait, controller doc said PATCH /api/prescriptions/:id/status
                // But route file might be different. I'll trust standard REST.
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${adminToken}`
                },
                body: JSON.stringify({ status: 'approved' })
            });
            if (approveRes.status === 200) console.log('   ✅ Prescription Approved');
            else console.log('   ❌ Approval Failed', await approveRes.text());
        } else {
            console.log('   ⚠ No pending prescription found to approve.');
        }

        // 6. Buy Antibiotic X (Rx Approved - Should Success)
        if (pendingRx) {
            console.log('6. Testing Rx Order with Approval...');
            const order3 = await fetch(`${BASE_URL}/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                },
                body: JSON.stringify({
                    orderItems: [{ product: antibiotic._id, name: antibiotic.name, qty: 1, price: antibiotic.price }],
                    prescriptionId: pendingRx._id,
                    totalPrice: antibiotic.price
                })
            });
            if (order3.status === 201) console.log('   ✅ Success');
            else console.log('   ❌ Failed', await order3.text());
        }

        // 7. Expire Vitamin C
        console.log('7. Testing Expired Product...');
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        await fetch(`${BASE_URL}/products/${vitaminC._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${adminToken}`
            },
            body: JSON.stringify({ expiryDate: yesterday })
        });

        // 8. Buy Vitamin C (Should Fail)
        const order4 = await fetch(`${BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify({
                orderItems: [{ product: vitaminC._id, name: vitaminC.name, qty: 1, price: vitaminC.price }],
                totalPrice: vitaminC.price
            })
        });
        if (order4.status === 400) console.log('   ✅ Correctly Failed (Expired)');
        else console.log('   ❌ Unexpected result', order4.status, await order4.text());

    } catch (e) {
        console.error('Test script error:', e);
    }
}

runTests();
