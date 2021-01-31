import React from 'react';
import "./Menu.css";
import MenuItem from "../MenuItem/MenuItem";
import '../../icon/iconfont.css';
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { handleMenubarDisplay } from "../../actions";

export class Menu extends React.Component {

    handleClick = () => {
        this.props.handleMenubarDisplay();
    }

    render() {
        const { isSmallScreen, showMenuBar } = this.props;
        return (
            <div className={isSmallScreen ? 'menu_container_small' : 'menu_container'}>
                <div className={isSmallScreen ? 'menu_small' : 'menu'}>
                    <div className={isSmallScreen ? 'logo_small' : 'logo'}>
                        Z<p style={{ display: 'inline', color: '#cf000f' }}>.</p>
                    </div>
                    <motion.div
                        initial='hide'
                        animate={showMenuBar ? 'show' : 'hide'}
                        variants={{
                            hide: { opacity: 0 },
                            show: { opacity: 1 }
                        }}
                        transition={{ duration: .3 }}
                        className={`${isSmallScreen ? 'itemlist_small' : 'itemlist'} ${showMenuBar ? 'show_bar' : 'hide_bar'}`}
                    >
                        <MenuItem itemName='Home' icon='&#xe702;' to='home'
                            active={this.props.isOn === '/home'} isSmallScreen={isSmallScreen}></MenuItem>
                        <MenuItem itemName='About' icon='&#xe715;' to='about'
                            active={this.props.isOn === '/about'} isSmallScreen={isSmallScreen}></MenuItem>
                        <MenuItem itemName='Resume' icon='&#xe6e6;' to='resume'
                            active={this.props.isOn === '/resume'} isSmallScreen={isSmallScreen}></MenuItem>
                        <MenuItem itemName='Skill' icon='&#xe6f4;' to='skill'
                            active={this.props.isOn === '/skill'} isSmallScreen={isSmallScreen}></MenuItem>
                        <MenuItem itemName='Contact' icon='&#xe70a;' to='contact'
                            active={this.props.isOn === '/contact'} isSmallScreen={isSmallScreen}></MenuItem>
                    </motion.div>
                    <div
                        onClick={this.handleClick}
                        className={isSmallScreen ? 'menubar_icon_small' : 'menubar_icon'}
                    >
                        <span className={`middle_line ${showMenuBar ? 'opened' : null}`}></span>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    isSmallScreen: state.isSmallScreen,
    showMenuBar: state.showMenuBar
});

export default connect(mapStateToProps, { handleMenubarDisplay })(Menu);