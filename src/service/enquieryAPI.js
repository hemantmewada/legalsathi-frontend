
import axios from 'axios';
import config from "../config/config";

import { useState } from 'react'
import toast from 'react-hot-toast';


const enquieryAPI = () => {
    const [loading, setLoading] = useState(false)
    const api = async (values, actions) => {
        setLoading(true);
        try {
            const {data} = await axios.post(`${config.VITE_API_URL}/enquiry`,values);
            setLoading(false);
            toast.success(data.message);
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        } catch (error) {
            setLoading(false);
            console.log(error);
            toast.dismiss()
            toast.error(error.response.data.message);
        }
    }
    return {loading, api}
}

export default enquieryAPI
