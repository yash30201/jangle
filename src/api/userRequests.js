import axios from 'axios';
import constant from '../component/tempConstant';



async function getUserById(userId) {
    try {
        const authToken = localStorage.getItem('authToken');
        const response = await axios({
            method: 'get',
            url: constant.apiUrl + 'user/' + userId,
            headers: {
                'Authorization': 'Bearer ' + authToken
            },
        });

        return {user : response.data.user};
    } catch (error) {
        console.log('Error in line 31 of dashboard.js');
        return error.response.data;
    }
}


const temp = { getUserById };

export default temp;
