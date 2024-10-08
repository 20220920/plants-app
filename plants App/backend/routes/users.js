const router = require("express").Router();
const User = require("../models/User");
//CRUD

//user update
router.put("/:id", async(req,res) => {
  if(req.body.userId ===req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("ユーザー情報が更新されました。")
    }catch(err){
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("あなたは自分のアカウントの時だけ情報を更新できます。")
  }
})
//user delete
router.delete("/:id", async(req,res) => {
  if(req.body.userId ===req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id
      );
      res.status(200).json("ユーザー情報が削除されました。")
    }catch(err){
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("あなたは自分のアカウントの時だけ情報を削除できます。")
  }
})
//user Read
router.get("/:id", async(req,res) => {

    try {
      const user = await User.findById(req.params.id);
      const { password, updatedAt, ...other} = user._doc;
      res.status(200).json(other);
    }catch(err){
      return res.status(500).json(err);
    }
});






module.exports = router;