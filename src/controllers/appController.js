const appServices = require('../services/appServices');

class appController {
    async GetAllBlogs(req, res) {
        try {
            const data = await appServices.GetAllBlogs();

            res.status(200).json(data);
        } catch (error) {
            res.status(200).json({
                errCode: -1,
                msg: 'error from server',
                dataErr: `${error}`,
            });
        }
    }
}

module.exports = new appController();
