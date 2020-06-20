import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';

function filterTodos(todos, filterBy) {
    switch (filterBy) {
      case 'Active': {
        return todos.filter(({ completed }) => !completed);
      }
      case 'Completed': {
        return todos.filter(todo => todo.completed)
      }
      default: return todos;
    }
}

function List({ items, filterBy }) {
    return (
        <div className="list">
            {filterTodos(items, filterBy).map((item) =>
                <ListItem key={item.id} item={item} />
            )}
        </div>
    );
}

export default connect(
    ({todoList, filterBy}) => ({
        items: todoList,
        filterBy
    }),
)(List);