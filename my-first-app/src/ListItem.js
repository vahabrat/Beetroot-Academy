
import React from 'react';
import { connect } from 'react-redux';

function ListItem({
    item: { id, value, completed },
    toggleCompleted
}) {
    const styles = {
        ...(completed && { textDecoration: 'line-through' })
    };
    return (
        <li onClick={() => toggleCompleted(id)} style={styles}>{value}</li>
    );
}

export default connect(null, (dispatch) => {
    return {
        toggleCompleted: (id) => dispatch({
            type: "TOGGLE_TODO",
            payload: id
        })
    }
})(ListItem);