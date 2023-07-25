import axios from 'axios';

const url='https://ghani-soft.vercel.app/users'
export const postUserDetails=async (filteredUser)=>{
        const data =await axios.post(url, filteredUser)
        return data.data;
}