import express from 'express';
import cookieParser from 'cookie-parser';

import multer from 'multer';

import {
    getUser,
    logout,
    googleLogin,
    googleUploadDatabase,
    googleUploadFile,
    checkoutSessions,
    orders,
    shops,
} from './handlers';



const port = process.env.PORT || 8089;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.all('*', function (req, res, next) {
    const origin = req.get('origin');

    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');

    next();
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/get-user', getUser);
app.post('/logout', logout);
app.post('/google-login', googleLogin);
app.post('/google-upload-database', upload.single('file'), googleUploadDatabase);
app.post('/google-upload-file', upload.single('file'), googleUploadFile);
app.post('/stripe-checkout-sessions', checkoutSessions);

app.post('/orders/create', orders.createOrder);
app.post('/orders/delete', orders.deleteOrder);
app.post('/orders/get', orders.getOrder);
app.post('/orders/get-all', orders.getOrders);
app.post('/orders/update', orders.updateOrder);

app.post('/shops/create', shops.createShop);
app.post('/shops/delete', shops.deleteShop);
app.post('/shops/get', shops.getShop);
app.post('/shops/get-all', shops.getShops);
app.post('/shops/update', shops.updateShop);

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
