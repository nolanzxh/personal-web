import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";

function rootReducer(state, action) {
    const { isSmallScreen } = action;
    switch (action.type) {
        case 'WINDOW_RESIZE':
            return {
                isSmallScreen: isSmallScreen,
                showMenuBar: !isSmallScreen
            };
        case 'SWITCH_MENU_BAR':
            return {
                ...state,
                showMenuBar: !state.showMenuBar
            };
        default:
            return state;
    }
};

export const store = createStore(rootReducer, {
    isSmallScreen: false,
    showMenuBar: true
}, applyMiddleware(thunk));