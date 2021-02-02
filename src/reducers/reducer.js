// import * as actionTypes from '../actions/types'
import {contactsMessages} from "../generateFakeData";

const initialState = {
    data: contactsMessages,
    contactSelected: {},
    currentMessages: [],
    message:'',
    search: '',
    filteredContacts: [],
    myTurn:true,
}

const reducer = (state= initialState, action) =>{
    // switch (action.type){
    //     case actionTypes.CONTACT_SELECTED:
    //         return{
    //
    //         }
    //     default:
    //         return state
    // }
}

export default reducer
