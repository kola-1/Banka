import express from 'express';
import trimmer from 'trim-request-body';
import auth from './routes.js/auth';

export default (banka) => {
    // Parse application/json
    banka.use(express.json());

    // Parse application/xwww-
    banka.use(express.urlencoded({ extended: true }));

    // Trim the parsed request body
    banka.use(trimmer);

    // Pass to routes
    banka.use('/api/v1/auth', auth);

    banka.use('*', (req, res) => {
        res.status(200).json({
            status: 200,
            message: 'Welcome to Banka',
        });
    });
};
