import {combineReducers} from 'redux';
import hobbyReducer from './hobby';
import userReducer from './user';
const rootReducer = combineReducers({
    user: userReducer,
    hooby: hobbyReducer
});
export default rootReducer;