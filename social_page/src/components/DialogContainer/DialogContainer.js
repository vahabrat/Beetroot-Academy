import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return <div className="{s.dialog}">
                <NavLink to ={path}>{props.name}</NavLink>
           </div>

}

const Message = (props) => {
 return <div className="{s.dialog}">{props.message}</div>

}


const Dialogs = (props) => {

    let dialogs = [

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

    let messages = [

        {id:1, message:'Hi'},
        {id:2, message:'How is your it-kamasutra?'},
        {id:3, message:'Yo'},
        {id:4, message:'Yo'},
        {id:5, message:'Yo'}

    ]

    let dialogsElements = dialogs.map((dialog) => {
        return (<DialogItem name={dialog.name} id={dialog.id}/>)

    })


    let messagesElements = messages.map((m) => {
        return (<Message id={m.id} message={m.message}>)

    })


    return (
        <div className="{s.dialogs}">

            <div className="{s.dialogsItems}">
                { dialogsElements }
            </div>

            <div className="{s.messages}">
               { messagesElements }
            </div>

        </div>

    )

}

export default Dialogs;