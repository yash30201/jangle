
function DetailedRoomProcessor(room, userId) {
    let roomMembers = [];
    let chatTitle = '';
    for (let i = 0; i < room.userIds.length; i++) {
        roomMembers.push({
            userId: room.userIds[i][0]._id,
            firstName: room.userIds[i][0].firstName,
            lastName: room.userIds[i][0].lastName,
            phoneNumber: room.userIds[i][0].phoneNumber
        });
        if (room.userIds[i][0]._id !== userId) {
            if (chatTitle.length > 0) chatTitle += ', ';
            chatTitle += room.userIds[i][0].firstName + ' ' + room.userIds[i][0].lastName;
        }
    }

    const data = {
        roomId: room._id,
        roomName: chatTitle,
        roomInitiator: {
            userId: room.roomInitiator._id,
            firstName: room.roomInitiator.firstName,
            lastName: room.roomInitiator.lastName,
            phoneNumber: room.roomInitiator.phoneNumber
        },
        members: roomMembers,
    }
    return data;
}

export default DetailedRoomProcessor;