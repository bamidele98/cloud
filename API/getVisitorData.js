// api/getVisitorData.js

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
        const snapshot = await db.ref('visitors').once('value');
        const data = snapshot.val();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'Error retrieving data' });
    }
};
