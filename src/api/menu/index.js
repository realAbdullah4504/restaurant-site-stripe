import axios from 'axios';

const url=process.env.REACT_APP_BASE_URL;
export const getMenu=async ()=>{
    // console.log(url)
        const data =await axios.get(`${url}/menu`);
        // console.log('data',data.data);
        return data.data;
}