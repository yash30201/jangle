function MessageProcessor(message, userId){
    let other = true;
    if(message.postedByUser._id === userId) other = false;
    const data = {
        messageId : message._id,
        roomId : message.roomId,
        text : message.message,
        postedByUser : {
            userId : message.postedByUser._id,
            firstName : message.postedByUser.firstName,
            lastName : message.postedByUser.lastName
        },
        readBy : message.blueTicks,
        postedAt : message.createdAt,
        other : other
    };
    return data;
}
export default MessageProcessor;