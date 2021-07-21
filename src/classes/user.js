class User{
    constructor(user) {
        this.createdAt = user.createdAt;
        this._id = user._id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.phoneNumber = user.phoneNumber;
        this.updatedAt = user.updatedAt;
        this.userType = user.userType;
    }
}

export default User;