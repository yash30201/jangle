function UserProcessor(user){
    const data = {
        firstName : user.firstName,
        lastName : user.lastName,
        userId : user._id,
        phoneNumber : user.phoneNumber
    };
    return data;
}

export default UserProcessor;