import { createStore, combineReducers } from 'redux'

function todoList(state = [], action) {
    const { type, payload } = action;
  switch (type) {
    case 'ADD_TODO':
      return state.concat(payload)
     case 'TOGGLE_TODO':
        return state.map(item => {
          if (item.id === action.payload) {
            item.completed = !item.completed;
          }
          return {...item}
        });
    case 'CLEAR_COMPLETED':
        return state.filter(({ completed }) => !completed);
    case 'COMPLETE_ALL':
    return state.map(item=> {
    return {...item, completed:true}
    })

    case 'UNCOMPLETE_LAST':
        return state.map((item, index, arr) => {
        if(index === payload.index){
            return {...item, completed:false}
        }
        else if (index === arr.length - 1){
        return {...item, completed:false}
        }
        return item;

    })

    default:
      return state
  }
}

function filterBy(state = 'All', action) {
  switch (action.type) {
    case 'SET_FILTER':
        return action.payload
    default:
      return state
  }
}

const store = createStore(combineReducers({
   todoList,
   filterBy
}))

window.store = store;
export default store;
