const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Ktd1PLq9mIg6ChuSbOszLnU5ODxMIv0FRaCfX53z92AszwdWJ9fhHfEz1AjCINZBW0JNI7HTLKNPq2sVuYcxaMw000vBkEuaj');

//to set up an API this is whats needed:
//API

//API Config
const app = express();

//middleware
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/',(request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request,response) => {
    const total = request.query.total;

    console.log('Payment Request Received >>>>>> for this amount >>>>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})  

//Listen command
exports.api = functions.https.onRequest(app)






// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
