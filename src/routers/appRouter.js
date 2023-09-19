const route = require('express').Router();
const multer = require('multer');
const appController = require('../controllers/appController');

const storageFile = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('./src/', 'public/images'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname);
    },
});

// store upload files
const uploadFile = multer({ storage: storageFile });

function appRouter(app) {
    route.get('/get-all-blogs', appController.GetAllBlogs);

    app.use('/api/v1', route);
}

module.exports = appRouter;
