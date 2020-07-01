const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    users: [
        {id:1, fullname: 'Kostiantyn', status: 'I am a boss', location:{city:'Kyiv', country: 'Ukraine'}},
        {id:2, fullname: 'Nikolay', status: 'I am not a boss', location:{city:'Moscow', country: 'Russia'}},
        {id:3, fullname: 'Oleksandr', status: 'I am not a boss', location:{city:'Minsk', country: 'Belarus'}},
        {id:4, fullname: 'Oleksiy', status: 'I am not a boss', location:{city:'St.Peterburg', country: 'Russia'}}
    ]
    newPostText:'it-kamasutra.com'
};


const usersReducer = (state = initialState, action) => {

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})q
export const updateNewPostTextActionCreator = (text) =>
({type: UPDATE_NEW_POST_TEXT, newText:text})

export default usersReducer;