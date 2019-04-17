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
        const data = {};
        const id = users.length + 1;
        req.body.isAdmin = 'false';
        req.body.id = id;
        req.body.token = req.token;
        users.push(req.body);
        const result = users[users.length - 1];

        // eslint-disable-next-line no-restricted-syntax
        for (const key in result) {
            if (key === 'password' || key === 'type' || key === 'isAdmin') {
                // eslint-disable-next-line no-continue
                continue;
            }

            data[key] = result[key];
        }

        return res.status(201).json({
            status: 201,
            data
        });
    }
}

export default AuthController;
