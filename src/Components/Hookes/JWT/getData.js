import axios from 'axios';
import getCookie from '../Cookies/getCookie';

const getData = async () =>
{
    try {
        //const client = { token : `${getCookie("jwt-token")}`};
        //var bodyFormData = new FormData();
        //bodyFormData.append('email',email);
        //bodyFormData.append('pass',password);
        //axios.defaults.withCredentials = true;
        const response =  await axios.get(`http://localhost:5000/user/info`);
        console.log(response.data);
    } catch (error) {
       return error.message;
    }
}
export default getData;