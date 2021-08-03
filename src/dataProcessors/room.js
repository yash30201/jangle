import requests from '../api/userRequests'

async function RoomProcessor(room, userId) {
    let chatTitle = '';
    for (let i = 0; i < room.userIds.length; i++) {
        if(room.userIds[i] !== userId){
            const response = await requests.getUserById(room.userIds[i]);
            if(chatTitle.length > 0) chatTitle += ', ';
            chatTitle += response.user.firstName + ' ' + response.user.lastName;
        }
    }


    const data = {
        roomId: room._id,
        roomName: chatTitle,
        lastActivityTime: room.updatedAt,
        roomInitiator: room.roomInitiator
    };
    return data;
}



export default RoomProcessor;