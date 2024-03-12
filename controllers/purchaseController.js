import Purchase from '../models/purchaseModel.js';

export const createPurchase = async (req, res) => {
    try {
        let purchase = await Purchase.create(req.body);
    
        res.status(201).json({data: purchase});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default createPurchase;
