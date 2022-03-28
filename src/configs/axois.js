import * as axios from 'axios';
import {HOST} from '../configs/host'
// import { TOKEN_KEY } from '../constants/constant';
const getAxiosInstance=async()=>{
  
  console.log("<<<<getAxiosInstance>>>>");
  //  const token = localStorage.getItem(TOKEN_KEY);
    return axios.create({
        baseURL: `${HOST}`,
        //headers: {'Content-Type' : 'application/json'}
        // authorization: token ? `Bearer ${token}` : null,},
      });
    
}
export {getAxiosInstance};