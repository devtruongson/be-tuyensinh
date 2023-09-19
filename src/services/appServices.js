const db = require('../models');

class appService {
    GetAllBlogs() {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await db.Blog.findAll();

                resolve({
                    errCode: 0,
                    msg: 'ok',
                    data,
                });
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }
}

module.exports = new appService();
