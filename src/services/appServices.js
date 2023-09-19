const slug = require('slug');
const { v4: uuidv4 } = require('uuid');

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

    GetBlogByType(type) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!type) {
                    return resolve({
                        errCode: 1,
                        msg: 'missing required type',
                    });
                }

                const data = await db.Blog.findAll({
                    where: {
                        type,
                    },
                });

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

    GetBlogBySlug(slug) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!slug) {
                    return resolve({
                        errCode: 1,
                        msg: 'missing required slug',
                    });
                }

                const blog = await db.Blog.findOne({
                    where: {
                        slug,
                    },
                });

                resolve({
                    errCode: 0,
                    msg: 'ok',
                    blog,
                });
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }

    CreateBlog(data) {
        return new Promise(async (resolve, reject) => {
            try {
                if (
                    !data.title ||
                    !data.thumbnail ||
                    !data.title ||
                    !data.type ||
                    !data.contentHTML ||
                    !data.contentMarkdown
                ) {
                    return resolve({
                        errCode: 1,
                        msg: 'missing required parameters',
                    });
                }

                let slugBlog = slug(data.title) + uuidv4();

                const blogCreated = await db.Blog.create({
                    title: data.title,
                    thumbnail: data.thumbnail,
                    title: data.title,
                    type: data.type,
                    file: data.file,
                    contentHTML: data.contentHTML,
                    contentMarkdown: data.contentMarkdown,
                    slug: slugBlog,
                });

                resolve({
                    errCode: 0,
                    msg: 'ok',
                    blogCreated,
                });
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }

    UpdateBlog(data) {
        return new Promise(async (resolve, reject) => {
            try {
                if (
                    !data.title ||
                    !data.thumbnail ||
                    !data.title ||
                    !data.type ||
                    !data.contentHTML ||
                    !data.contentMarkdown ||
                    !data.slug
                ) {
                    return resolve({
                        errCode: 1,
                        msg: 'missing required parameters',
                    });
                }
                const blogUpdated = await db.Blog.update(
                    {
                        title: data.title,
                        thumbnail: data.thumbnail,
                        title: data.title,
                        type: data.type,
                        file: data.file,
                        contentHTML: data.contentHTML,
                        contentMarkdown: data.contentMarkdown,
                        slug: slug(data.title) + uuidv4(),
                    },
                    {
                        where: {
                            slug: data.slug,
                        },
                    },
                );

                resolve({
                    errCode: 0,
                    msg: 'ok',
                    blogUpdated,
                });
            } catch (err) {
                console.log(err);
                reject(err);
            }
        });
    }
}

module.exports = new appService();
