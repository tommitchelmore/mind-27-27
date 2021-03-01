import axios from "axios"

if (!process.env.JUSTGIVING_APP_ID) {
    
}

export default (req, res) => {
    const { data } = axios.get(`https://api.justgiving.com/b108ad6c/v1/fundraising/pages/tom2727`)
}