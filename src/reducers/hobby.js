import { hobbyType } from '../actions/type';
import { configureStore, createSlice } from "@reduxjs/toolkit";
// const initialState = [{id:1, name: 'I Phone', active: false}];
// const hobbyReducer = (state = initialState,action) => {
//     switch(action.type){
//         case hobbyType.ADD_HOBBY: 
//             let newList = [...state];
//             newList.push(action.payload);
//             return newList;
//         case hobbyType.SET_ACTIVE_HOBBY:
//             const index = state.findIndex(x=> x.id === action.payload.id);
//             const newHobby = [
//                 ...state.slice(0,index),
//                 {
//                   ...action.payload,
//                   active:true,      
//                 },
//                 ...state.slice(index + 1),
//             ];
//             return newHobby;
//         default: return state;
//     }
// }
// export default hobbyReducer;
const hobbySlice = createSlice({
    name: 'insert',
    initialState: [{ id: 1, name: 'Data', active: false }],
    reducers: {
        ADD_HOBBY: state => {
            let newList = [...state];
            newList.push(action.payload);
            return newList;
        },
        SET_ACTIVE_HOBBY: state => {
            const index = state.findIndex(x => x.id === action.payload.id);
            const newHobby = [
                ...state.slice(0, index),
                {
                    ...action.payload,
                    active: true,
                },
                ...state.slice(index + 1),
            ];
            return newHobby;
        }

    }
}); 