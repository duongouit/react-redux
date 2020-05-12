import {hobbyType} from './type';
export const addNewHobby = (hobby) => {
    return {
        type : hobbyType.ADD_HOBBY,
        payload: hobby,
    }
}
export const setActiveHobby = (hobby) => {
    return {
        type : hobbyType.SET_ACTIVE_HOBBY,
        payload: hobby,
    }
}