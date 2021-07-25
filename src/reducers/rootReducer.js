const initialState = {
    user : null,
    users : []
}


function rootReducer(state = initialState, action){

    switch(action.type){
        case 'UPDATE_USER' : 
            return {user : action.user, users : state.users};
        case 'UPDATE_USERS' : 
            return {user : state.user, users : action.users};
        default : 
            return state;
    }
}

export default rootReducer;

