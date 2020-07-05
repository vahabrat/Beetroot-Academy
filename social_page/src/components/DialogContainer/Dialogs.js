import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogItem.js'
import Message from './Message/Message.js'





const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((dialog) => {
        return (<DialogsItem name={dialog.name} id={dialog.id}/>)

    });


    let messagesElements = props.state.messages.map((m) => {
        return (<Message id={m.id} message={m.message}/>)

    });


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
               { messagesElements }
            </div>
        </div>
    );
};

export default Dialogs;