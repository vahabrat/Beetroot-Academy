import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogItem.js'
import Message from './Message/Message.js'
import {sendMessageCreator,updateNewMessageBodyCreator} from '../../redux/dialogs_reducer.js'




const Dialogs = (props) => {
    debugger;
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((dialog) => {

        return (<DialogsItem className={s.dialogsName} name={dialog.name} id={dialog.id}/>)

    });

    let messagesElements = state.messages.map((m) => {
        return (<Message id={m.id} message={m.message}/>)

    });

    let newMessagesBody = state.newMessagesBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {

        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
              <div>{ messagesElements }</div>
              <div>
                <div><textarea value={newMessagesBody} onChange={onNewMessageChange} placeholder="Enter your message..."></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
              </div>
            </div>
        </div>
    );
};

export default Dialogs;