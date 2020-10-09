const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


const initialState = {
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

                ],

    newMessageBody:""
};


const dialogsReducer = (state = initialState, action) => {
        debugger;
        switch(action.type) {
            case UPDATE_NEW_MESSAGE_BODY:
                state.newMessageBody = action.body;
                return state;

            case SEND_MESSAGE:
                const body = state.newMessageBody;
                state.newMessageBody = "";
                state.messages.push({id:6, message: body});
                return state;

            default:
                return state;
        }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;