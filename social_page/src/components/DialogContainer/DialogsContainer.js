import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogItem.js'
import Message from './Message/Message.js'
import {sendMessageCreator,updateNewMessageBodyCreator} from '../../redux/dialogs_reducer.js'
import Dialogs from './Dialogs.js'



const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onNewMessageChange} dialogsPage={state}/>
    );
};

export default DialogsContainer;