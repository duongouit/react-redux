const initialState = [{id:1, name: 'I Phone', active: false}];
const hobbyReducer = (state = initialState,action) => {
    switch(action.type){
        case 'ADD_HOBBY': 
            let newList = [...state];
            newList.push(action.payload);
            return newList;
        case 'SET_ACTIVE_HOBBY':
            const index = state.findIndex(x=> x.id === action.payload.id);
            const newHobby = [
                ...state.slice(0,index),
                {
                  ...action.payload,
                  active:true,      
                },
                ...state.slice(index + 1),
            ];
            return newHobby;
        default: return state;
    }
}
export default hobbyReducer;