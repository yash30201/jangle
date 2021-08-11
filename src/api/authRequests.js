import axios from "axios";
import constant from '../component/tempConstant'


const signInUser = async (data) => {
    try {
        const response = await axios.post(constant.apiUrl + "login", data);
        return {authToken : response.data.authToken, userId : response.data.userId};
    } catch (err) {
        console.log('Error while signin in');
        return { error: err.response.data };
    }
}

const signUpUser = async (data) => {
    try {
        const response = await axios.post(constant.apiUrl + "signup", data);
        return {userId : response.data.userId};
    } catch (err) {
        console.log('Error while signin up');
        return { error: err.response.data };
    }
}

const requests = { signInUser,signUpUser };
export default requests;