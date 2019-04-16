import users from '../models.js/dummyData.js/users';

/**
 * @class AuthController
 */
class AuthController {
    /**
    * Signup a user
    *@param {object} req The request *.
    *@param {object} res The response *.
    *@returns {object} returns response *
    */
    static signUp(req, res) {
        const id = users.length + 1;
        req.body.isAdmin = 'false';
        req.body.id = id;
        req.body.token = req.token;
        users.push(req.body);
        const result = users[users.length - 1];

        return res.status(201).json({
            message: 'Signup is successful',
            data: {
                result
            }
        });
    }
}

export default AuthController;
