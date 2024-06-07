async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const statusDiv = document.getElementById('status');
    
    // Clear previous status
    statusDiv.textContent = '';
    
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        
        const result = await response.json();
        
        if (response.ok) {
            // Handle successful login, e.g., redirect to dashboard
            window.location.href = '/dashboard';
        } else {
            // Display error message
            statusDiv.textContent = result.message || 'Login failed';
        }
    } catch (error) {
        statusDiv.textContent = 'An error occurred. Please try again.';
    }
}