import {TOGGLE_MEMORIZED,REMOVE_WORD,TOGGLE_FORM,ADD_WORD,FILLTER} from './actionType'

export function toggleMemorized(_id){
    return {type: TOGGLE_MEMORIZED,_id}
}
export function removeWord(_id){
    return {type: REMOVE_WORD,_id}
}
export function toggleForm(){
    return {type: TOGGLE_FORM}
}
export function addWord(newWord){
    return {type:ADD_WORD,newWord}
}
export function fillter(text){
    return {type:FILLTER,text}
}
