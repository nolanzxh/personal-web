export const handleWindowResize = (isSmallScreen) => dispatch => {
    dispatch({ type: 'WINDOW_RESIZE', isSmallScreen: isSmallScreen })
};

export const handleMenubarDisplay = () => dispatch => {
    dispatch({ type: 'SWITCH_MENU_BAR' })
};