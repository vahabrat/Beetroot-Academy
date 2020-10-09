const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'



const initialState = {
    posts: [
                    {id: 1, message:"Hi, how are you?", likesCount: 12},
                    {id: 2, message:"Hi, its my first post", likesCount: 12},
                    {id: 3, message:"Cool, I am glad for you", likesCount: 12},
                    {id: 4, message:"Ok, then, get the fuck up out of here", likesCount: 12},
                    {id: 5, message:"Fuck off, son of a bitch", likesCount: 12}
                ],
    newPostText:'it-vahabrat'
};


const profileReducer = (state = initialState, action) => {

    switch(action.type){

        case ADD_POST:
            let newPost = {
                    id: 6,
                    message: state.newPostText,
                    likesCount: 0
                };
                state.posts.push(newPost);
                state.newPostText='';
                return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;