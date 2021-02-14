import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";

let storage = window.localStorage;

function rootReducer(state, action) {
    const { isSmallScreen, language } = action;
    switch (action.type) {
        case 'WINDOW_RESIZE':
            return {
                ...state,
                isSmallScreen: isSmallScreen,
                showMenuBar: !isSmallScreen
            };
        case 'SWITCH_MENU_BAR':
            return {
                ...state,
                showMenuBar: !state.showMenuBar
            };
        case 'TOGGLE_LANGUAGE':
            storage.setItem('language', language);
            return {
                ...state,
                languageValue: language
            }
        default:
            return state;
    }
};

export const store = createStore(rootReducer, {
    isSmallScreen: false,
    showMenuBar: true,
    languageValue: ''
}, applyMiddleware(thunk));