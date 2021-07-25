import axios from "axios";
import constant from '../component/tempConstant'

async function getAllMyRooms(userId){
    try {
        const response = await axios({
            method : 'GET',
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('authToken')
            },
            url : constant.apiUrl + 'room'
        });

        return {rooms : response.data.rooms};
    } catch (error) {
        console.log('Error while fetching all my rooms');
        return error.response.data;
    }
}

const temp = {getAllMyRooms};

export default temp;