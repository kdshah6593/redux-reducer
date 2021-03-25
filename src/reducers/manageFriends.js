export function manageFriends(state = {friends: []}, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend]} ;
        case 'REMOVE_FRIEND':
            const remFriend = state.friends.find(friend => friend.id === action.id)
            const remIndex = state.friends.indexOf(remFriend)
            return {...state, friends: [
                ...state.friends.slice(0, remIndex), 
                ...state.friends.slice(remIndex + 1)    
            ]
        }
        default:
            return state;
    }
}
