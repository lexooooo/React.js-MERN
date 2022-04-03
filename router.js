import Router from "express";
import posts from "./posts.js";
import postController from "./postController.js";
const router = new Router();



////////////////////////////////////////////       ROUTER        /////////////////////////////////////////////////////////




router.post('/posts', postController.create)
router.get('/posts', postController.getAll)
router.get('/posts/: id', postController.getOne)
router.put('/posts', postController.upDate)
router.delete('/posts/: id', postController.delete)



export default router;