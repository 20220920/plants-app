const router = require("express").Router();
const Post = require("../models/Post")
const User = require('../models/User')
//投稿を作成
router.post("/", async (req, res)=> {
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        return res.status(200).json(savePost);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//投稿を更新
router.put("/:id",async(req, res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId)
        {
            await post.updateOne({
                $set: req.body,
            });
            return res.status(200).json("投稿編集に成功しました")
        }else{
            return res.status(403).json("あなたは他の人の投稿を編集できません")
        }
    } catch (err){
      return res.status(403).json(err);
    }
});
//投稿を削除
router.delete("/:id",async(req, res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId)
        {
            await post.deleteOne();
            return res.status(200).json("投稿削除に成功しました")
        }else{
            return res.status(403).json("あなたは他の人の投稿を削除できません")
        }
    } catch (err){
      return res.status(403).json(err);
    }
});
//特定の投稿を取得する
router.get("/:id",async(req, res)=>{
    try {
        const post = await Post.findById(req.params.id);
            return res.status(200).json(post);
    } catch (err){
      return res.status(403).json(err);
    }
});

router.get("/timeline/:userId",async(req, res)=> {
    try{
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id});
        return res.status(200).json(userPosts)
    }catch (err) {
        return res.status(500).json(err);
    }
});
module.exports = router;