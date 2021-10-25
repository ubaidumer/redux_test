export const ADD_CHARACTER ='ADD_CHARACTER';
export const REMOVE_CHARACTER ='REMOVE_CHARACTER';
export const UPDATE_STRENGTH='UPDATE_STRENGTH';
export function addCharacterById(id){

    const action = {
        type:ADD_CHARACTER,
        id:id
    }
    return action;
}

export function removeCharacterById(id){

    const action = {
        type:REMOVE_CHARACTER,
        id:id
    }
    return action;
}

export function updateCharacterPower(id,strength){
    const action = {
        type:UPDATE_STRENGTH,
        id:id,
        strength:strength
    }
    return action;
}