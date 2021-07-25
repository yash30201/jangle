import requests from '../api/userRequests'

async function RoomProcessor(room){
    let people = [];
    for(let i = 0 ; i < room.userIds.length ; i++){
        const response = await requests.getUserById(room.userIds[i]);
        people.push({firstName : response.user.firstName,lastName :  response.user.lastName});
    }

    let chatTitle = '';
    if(people.length > 2){
        for(let i = 0 ; i < people.length ; i++){
            if(chatTitle.length > 0)  chatTitle += ', ';
            chatTitle += people[i].firstName;
        }
    }
    else chatTitle = people[0].firstName + ' ' + people[0].lastName;

    const data = {
    roomId : room._id,
    roomName : chatTitle,
    lastActivityTime : room.updatedAt,
    roomInitiator : room.roomInitiator
    };
    return data;
}


export default RoomProcessor;