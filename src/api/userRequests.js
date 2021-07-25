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
        console.log('No able to get user by id');
        return error.response.data;
    }
}

async function getAllUsers(){
    try {
        const authToken = localStorage.getItem('authToken');
        const response = await axios({
            method: 'get',
            url: constant.apiUrl + 'user',
            headers: {
                'Authorization': 'Bearer ' + authToken
            },
        });

        return {users : response.data.users};
    } catch (error) {
        console.log('Not able to fetch all users');
        return error.response.data;
    }
}


const temp = { getUserById, getAllUsers };

export default temp;
