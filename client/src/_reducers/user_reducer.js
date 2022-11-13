import {
    LOGIN_USER,
    REGISTER_USER,
    TRADING_START
} from '../_actions/types';

const initState = {
    loginSuccess: false,
    register: false,
    startSuccess: false,
    message: ""
}

export default function(state = initState, action){
    
    switch(action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload }

        case REGISTER_USER:
            return {...state, register: action.payload }
            
        case TRADING_START:
            return {...state, startSuccess: action.payload , message: action.message}
            
        default:
            return state;
    }
}