import { createStore, combineReducers } from 'redux';
import profileReducer from './profile_reducer.js'
import dialogsReducer from './dialogs_reducer.js'
import sidebarReducer from './sidebar_reducer.js'


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer
});

const store = createStore(reducers);

export default store;