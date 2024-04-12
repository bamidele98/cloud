// api/login.js

const USERNAME = 'your_username';
const PASSWORD = 'your_password';

module.exports = async (req, res) => {
    const { username, password } = req.body;
    if (username === USERNAME && password === PASSWORD) {
        // Set session cookie upon successful login
        res.setHeader('Set-Cookie', 'auth=true; Path=/');
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};
