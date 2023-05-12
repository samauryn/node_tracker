import express from 'express'
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
app.use(cors());
const port = process.env.PORT || 3000

const firebaseConfig = {
    apiKey: process.env.YOUR_API_KEY,
    authDomain: process.env.YOUR_AUTH_DOMAIN,
    databaseURL: process.env.YOUR_DATABASE_URL,
    projectId: process.env.YOUR_PROJECT_ID,
    storageBucket: process.env.YOUR_STORAGE_BUCKET,
    messagingSenderId: process.env.YOUR_MESSAGING_SENDER_ID,
    appId: process.env.YOUR_APP_ID,
    measurementId: process.env.YOUR_MEASUREMENT_ID
};


firebase.initializeApp(firebaseConfig);

const database = firebase.database();


const dataRef = database.ref('UsersData/8HlmCNNF8zfNVWktHrVHFFKeRwu2/');
let data = {}
dataRef.on('value', (snapshot) => {
    data = snapshot.val();
}, (error) => {
    console.error(error);
});

app.get('/', (req, res) => {
    res.json(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
