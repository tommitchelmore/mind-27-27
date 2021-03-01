import axios from "axios"

export default async (req, res) => {
    try {
        const { data: {fundraisingTarget, totalRaisedOnline : totalRaised } } = await axios.get(`https://api.justgiving.com/${process.env.JUSTGIVING_APP_ID}/v1/fundraising/pages/${req.query.id}`)
    
        return res.json({
            fundraisingTarget,
            totalRaised
        });
    }
    catch(e) {
        return res.status(404).json({"error": "Not found"})
    }
}