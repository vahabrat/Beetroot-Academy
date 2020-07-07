let rerenderEntireTree = () => {
    console.log('state was changed')
}

let state = {
    profilePage:{
        posts: [
    {id: 1, message:"Hi, how are you?", likesCount: 12},
    {id: 2, message:"Hi, its my first post", likesCount: 12},
    {id: 3, message:"Cool, I am glad for you", likesCount: 12},
    {id: 4, message:"Ok, then, get the fuck up out of here", likesCount: 12},
    {id: 5, message:"Fuck off, son of a bitch", likesCount: 12}
    ],
        newPostText:'it-vahabrat'
    },
    dialogsPage:{
        messages:[

        {id:1, message:'Hi'},
        {id:2, message:'How is your it-kamasutra?'},
        {id:3, message:'Yo'},
        {id:4, message:'Yo'},
        {id:5, message:'Yo'}

    ],
        dialogs:[

            {id:1, name:'Kostik'},
            {id:2,name:'Zheka'},
            {id:3,name:'Sanya'},
            {id:4,name:'Yuri'},
            {id:5,name:'Sergiy'},
            {id:6,name:'Valera'},
            {id:7,name:'Mymra'},
            {id:8,name:'Markiz'},
            {id:9,name:'Oksanka'},
            {id:10,name:'Vova'},
            {id:11,name:'Alisochka'},
            {id:12,name:'Bubik'}

        ]
    }
}

window.state = state;

export const addPost = () => {

    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText='';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; //observer
}


export default state;