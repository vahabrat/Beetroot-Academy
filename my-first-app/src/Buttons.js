import React from 'react'
import {connect} from 'react-redux';

function Buttons( { filterBy, clearCompleted, completeAll, uncompleteLast }) {
    return (
        <div className="Buttons">
            <button onClick={()=> filterBy('All')}>All</button>
            <button onClick={()=> filterBy('Completed')}>Completed</button>
            <button onClick={()=> filterBy('Active')}>Active</button>
            <button onClick={()=> clearCompleted()}>Clear</button>
            <button onClick={()=> completeAll()}>Complete All</button>
            <button onClick={()=> uncompleteLast()}>UncompleteLast</button>
        </div>
    )
}

export default connect(null, (dispatch) => {
    return {
        filterBy: (filter) => dispatch({
            type: 'SET_FILTER',
            payload: filter,
        }),
        clearCompleted: () => dispatch({type: 'CLEAR_COMPLETED'}),
        completeAll:()=> dispatch({type:'COMPLETE_ALL'}),
        uncompleteLast:(index) => dispatch({type:'UNCOMPLETE_LAST', payload:{index}})
    }
})(Buttons)