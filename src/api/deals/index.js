import axios from 'axios';

const url=process.env.REACT_APP_BASE_URL;
export const getDeals=async ()=>{
    // console.log(url)
        const data =await axios.get(`${url}/deals`);
        // console.log('data',data.data);
        return data.data;
}