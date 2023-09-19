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

    async GetBlogByType(req, res) {
        try {
            const data = await appServices.GetBlogByType(req.query.type);
            res.status(200).json(data);
        } catch (error) {
            res.status(200).json({
                errCode: -1,
                msg: 'error from server',
                dataErr: `${error}`,
            });
        }
    }

    async GetBlogBySlug(req, res) {
        try {
            const data = await appServices.GetBlogBySlug(req.query.slug);
            res.status(200).json(data);
        } catch (error) {
            res.status(200).json({
                errCode: -1,
                msg: 'error from server',
                dataErr: `${error}`,
            });
        }
    }

    async CreateBlog(req, res) {
        try {
            const data = await appServices.CreateBlog(req.body);
            res.status(200).json(data);
        } catch (error) {
            res.status(200).json({
                errCode: -1,
                msg: 'error from server',
                dataErr: `${error}`,
            });
        }
    }

    async UpdateBlog(req, res) {
        try {
            const data = await appServices.UpdateBlog(req.body);
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
