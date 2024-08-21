
const router = require("express").Router();
const Product = require('../models/Product')


router.post('/', async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        return res.status(200).json(savedProduct);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await Product.find(); // すべての製品をデータベースから取得
        return res.status(200).json(products); // 取得した製品を返す
    } catch (err) {
        return res.status(500).json(err); // エラーが発生した場合、500ステータスとエラーメッセージを返す
    }
});
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id); // URLパラメータからIDを取得し、そのIDで製品を検索
        if (!product) {
            return res.status(404).json({ message: 'Product not found' }); // 製品が見つからない場合、404ステータスを返す
        }
        return res.status(200).json(product); // 製品が見つかった場合、それを返す
    } catch (err) {
        return res.status(500).json(err); // エラーが発生した場合、500ステータスとエラーメッセージを返す
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id); // IDで製品を検索して削除
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' }); // 製品が見つからない場合、404ステータスを返す
        }
        return res.status(200).json({ message: 'Product deleted successfully' }); // 削除成功メッセージを返す
    } catch (err) {
        return res.status(500).json(err); // エラーが発生した場合、500ステータスとエラーメッセージを返す
    }
});




module.exports = router;

