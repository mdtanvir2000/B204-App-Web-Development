// routes/payment.js
const express = require('express');
const router = express.Router();
const paypal = require('paypal-rest-sdk');
const Payment = require('../models/payments');

paypal.configure({
  'mode': 'sandbox', // Sandbox or live
  'client_id': 'YOUR_CLIENT_ID_FROM_PAYPAL',    //Enter your PayPal Client ID
  'client_secret': 'YOUR_CLIENT_SECRET_FROM_PAYPAL'     //Enter your PayPal Client Secret
});

router.post('/pay', (req, res) => {
  const { amount, currency } = req.body;

  const create_payment_json = {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": "http://localhost:3000/success",
      "cancel_url": "http://localhost:3000/cancel"
    },
    "transactions": [{
      "amount": {
        "currency": currency,
        "total": amount
      },
      "description": "Payment description"
    }]
  };

  paypal.payment.create(create_payment_json, (error, payment) => {
    if (error) {
      throw error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === 'approval_url') {
          res.json({ forwardLink: payment.links[i].href });
        }
      }
    }
  });
});

router.get('/success', (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
      "amount": {
        "currency": "USD",
        "total": "25.00"
      }
    }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
    if (error) {
      console.log(error.response);
      throw error;
    } else {
      const newPayment = new Payment({
        paymentId: payment.id,
        payerId: payment.payer.payer_info.payer_id,
        amount: payment.transactions[0].amount.total,
        currency: payment.transactions[0].amount.currency,
        paymentStatus: payment.state
      });

      newPayment.save((err) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error saving payment information');
        } else {
          res.send('Payment success');
        }
      });
    }
  });
});

router.get('/cancel', (req, res) => res.send('Payment cancelled'));

module.exports = router;
