import axios from "axios";
import constant from '../component/tempConstant'

async function getAllMyRooms(userId) {
    try {
        const response = await axios({
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            },
            url: constant.apiUrl + 'room'
        });

        return { rooms: response.data.rooms };
    } catch (error) {
        console.log('Error while fetching all my rooms');
        return error.response.data;
    }
}

async function getRoomByRoomId(roomId) {
    try {
        const response = await axios({
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            },
            url: constant.apiUrl + 'room/' + roomId
        });

        return { room: response.data.room };
    } catch (error) {
        console.log('Error while fetching room by id');
        return error.response.data;
    }
}

async function getMessagesByRoomId(roomId) {
    try {
        const response = await axios({
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            },
            url: constant.apiUrl + 'room/' + roomId,
            params: {
                page: '0',
                limit: '1000000000',
            }
        });
        return { messages: response.data.recentMessages };
    } catch (error) {
        console.log('Error while fetching room by id');
        return error.response.data;
    }
}


async function initiateRoom(userIds) {
    try {
        const response = await axios({
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            },
            url: constant.apiUrl + 'room/initiate',
            data: {
                userIds: userIds
            }
        });

        return { isNewRoom: response.data.room.isNew, roomId: response.data.room.roomId };
    } catch (error) {
        console.log('Error while initiating chat room');
    }
}

async function postMessage(text, roomId) {
    try {
        const response = await axios({
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            },
            url: constant.apiUrl + 'room/' + roomId + '/message',
            data: {
                message: text
            }
        });

        return {
            message: {
                _id: response.data.post._id,
                roomId: response.data.post.roomId,
                message: response.data.post.message,
                postedByUser: response.data.post.postedByUser,
                blueTicks: response.data.post.blueTicks,
                createdAt: response.data.post.createdAt,
            }
        };
    } catch (error) {
        console.log('Error on posting a message');
        return error.response.data;
    }
}

const temp = {
    getAllMyRooms,
    getRoomByRoomId,
    initiateRoom,
    getMessagesByRoomId,
    postMessage
};

export default temp;