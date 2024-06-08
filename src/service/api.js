import { toast } from "react-toast";

export const enquiryAPI = (values) => {
    console.log("values------------------");
    console.log(values);
    try {
    } catch (error) {
        console.log(error);
        toast.hideAll();
        toast.error(error.response.data.message);
    }
}