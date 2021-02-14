export const handleWindowResize = (isSmallScreen) => dispatch => {
    dispatch({ type: 'WINDOW_RESIZE', isSmallScreen: isSmallScreen })
};

export const handleMenubarDisplay = () => dispatch => {
    dispatch({ type: 'SWITCH_MENU_BAR' })
};

export const toggleAppLanguage = (lang) => dispatch => {
    dispatch({ type: 'TOGGLE_LANGUAGE', language: lang })
};

export const initiateLocale = (lang) => {
    return { type: 'TOGGLE_LANGUAGE', language: lang }
};