import { getAxiosInstance } from "../configs/axois";

export const BUY_PRODUCT = async (data)=>{
      const axios=await getAxiosInstance();
      const res = await axios.post("product/makePayment",data);
      console.log(res);
      return res;
}