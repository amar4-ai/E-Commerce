import express from 'express';
import { allOrders, placeOrder, placeOrderRazorpay, placeOrderStripe, updateStatus, userOders } from '../controllers/orderController.js';
import adminAuth from '../middlerware/adminAuth.js';
import authUser from '../middlerware/auth.js'

const orderRouter = express.Router();


//admin features
orderRouter.post('/list',adminAuth, allOrders);
orderRouter.post('/status',adminAuth, updateStatus);

//payment features
orderRouter.post('/place',authUser,placeOrder);
orderRouter.post('/stripe',authUser,placeOrderStripe);
orderRouter.post('/razorpay',authUser,placeOrderRazorpay);

// user features
orderRouter.post('/userorders', authUser, userOders);

export default orderRouter;
