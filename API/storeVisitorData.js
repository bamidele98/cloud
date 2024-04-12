// api/storeVisitorData.js

const firebase = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("../serviceAccountKey.json");
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://rezulthandler-default-rtdb.firebaseio.com/" // Replace with your Firebase database URL
});

const db = firebase.database();

module.exports = async (req, res) => {
    try {
        const { name, email } = req.body;

        // Store data in Firebase database
        await db.ref('visitors').push({ name, email });

        res.status(201).json({ message: 'Data stored successfully' });
    } catch (error) {
        console.error('Error storing data:', error);
        res.status(500).json({ error: 'Error storing data' });
    }
};
