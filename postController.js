import posts from "./posts.js";




class postController {
    async create (req, res){
        try
    {
    const { author, title, content, picture} = req.body;
    const post = await posts.create({author, title, content, picture});
    res.jsonp(post)}
    catch(e){
       res.status(500).jsonp(e);
    }
    }
    async getAll(req, res){
        try {
            const Posts = await posts.find();
            return res.jsonp(Posts);
        }
        catch (e) {
            res.status(500).jsonp(e)
        }

    };
    async getOne(req, res)
    {
        try
        {
        const {id} = req.params
        if (!id) {res.status(400).jsonp({MessageEvent: "id undefined"})}
        const PostsId = await posts.findById(id);
        return res.json(PostsId)
    }
    catch(e){
        res.status(500).jsonp(e)
    }
    };

    async upDate(req, res){
        try{
             const postUpdate = req.body
             if(!postUpdate._id){res.status(400).json({message: "ID undefined"})};
             const updatePost = await posts.findByIdAndUpdate(postUpdate._id, posts, {new: true});
             return res.json(updatePost);
        }
        catch(e){
            res.status(500).jsonp(e)
        }
    }
    async delete(req, res){
        try{
            const {id} = req.body
            if (!id) {res.status(400).json({message: "ID undefined"})}
            const post = await posts.findByIdAndDelete(id);
            return res.json(post);
        }
        
        catch(e){
            res.status(500).json(e);
        }
        
    }
 }
export default new postController();