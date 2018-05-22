import { UI_START_LOADING , UI_STOP_LOADING} from "../actions/actionTypes";

const initialState = {
    isLoadingImage: false,
    isLoadingData: false,
    isLoadingRegister: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case UI_START_LOADING:
            return {
                ...state,
                isLoadingImage: true,
                isLoadingData: true,
                isLoadingRegister: true
            }
        case UI_STOP_LOADING:
            return {
                ...state,
                isLoadingImage: false,
                isLoadingData: false,
                isLoadingRegister: false
            };
        default:
            return state;
    }
};

export default reducer;