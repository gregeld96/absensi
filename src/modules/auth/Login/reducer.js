import { CHANGE_PASSWORD, CHANGE_SHOW_PASSWORD, CHANGE_USERNAME, CLOSE_ERROR, ERROR_SUBMIT, INITIAL_STATE, RESET_ERROR, SUBMIT_DONE, SUBMIT_ONPROGRESS, UPDATE_ERROR_PASSWORD, UPDATE_ERROR_USERNAME } from "./types";

const initiate = {
    username: "",
    password: "",
    errorUsername: "",
    errorPassword: "",
    errorSubmit: "",
    errorShow: false,
    isSubmited: false,
    showPassword: false,
}

const LoginReducer = (state = initiate, action) => {
    switch (action.type) {
        case INITIAL_STATE: 
            state = initiate;

            return state;
        case CHANGE_USERNAME:
            return {
                ...state,
                username: action.payload
            };
        case CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case CHANGE_SHOW_PASSWORD:
            return {
                ...state,
                showPassword: !state.showPassword
            }
        case UPDATE_ERROR_PASSWORD:
            return {
                ...state,
                errorPassword: action.payload
            }
        case UPDATE_ERROR_USERNAME:
            return {
                ...state,
                errorUsername: action.payload
            }
        case ERROR_SUBMIT:
            return {
                ...state,
                isSubmited: false,
                errorShow: true,
                errorSubmit: action.payload,
            }
        case RESET_ERROR:
            return {
                ...state,
                errorShow: false,
                errorPassword: '',
                errorUsername: '',
                errorSubmit: '',
            }
        case SUBMIT_ONPROGRESS:
            return {
                ...state,
                isSubmited: true,
                errorPassword: '',
                errorUsername: '',
                errorSubmit: '',
            }
        case SUBMIT_DONE:
            state = initiate;

            return state;
        default:
            return state;
    }
}

export default LoginReducer;