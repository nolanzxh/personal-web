import React from 'react';
import "./Menu.css";
import MenuItem from "../MenuItem/MenuItem";
import '../../icon/iconfont.css';
import { motion } from "framer-motion";

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this);
        this.state = {
            isSmallScreen: false,
            showMenuBar: true
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        let smallSreen = (window.innerWidth < 900 || window.innerHeight < 520) ? true : false;
        this.setState({
            isSmallScreen: smallSreen,
            showMenuBar: !smallSreen
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize(e) {
        let smallSreen = (e.target.innerWidth < 900 || e.target.innerHeight < 520) ? true : false;
        this.setState({
            isSmallScreen: smallSreen,
            showMenuBar: !smallSreen
        });
    }

    hanldeShow = () => {
        this.setState({ showMenuBar: !this.state.showMenuBar })
    }

    render() {
        const { isSmallScreen, showMenuBar } = this.state;
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
                        <MenuItem itemName='Home' icon='&#xe87b;' to='home'
                            active={this.props.isOn === '/home'} isSmallScreen={isSmallScreen}></MenuItem>
                        <MenuItem itemName='Resume' icon='&#xe6b8;' to='resume'
                            active={this.props.isOn === '/resume'} isSmallScreen={isSmallScreen}></MenuItem>
                        <MenuItem itemName='Skill' icon='&#xe6de;' to='skill'
                            active={this.props.isOn === '/skill'} isSmallScreen={isSmallScreen}></MenuItem>
                        <MenuItem itemName='Contact' icon='&#xe715;' to='contact'
                            active={this.props.isOn === '/contact'} isSmallScreen={isSmallScreen}></MenuItem>
                    </motion.div>
                    <motion.div
                        onClick={this.hanldeShow}
                        className={`iconfont ${isSmallScreen ? 'menubar_icon_small' : 'menubar_icon'}`}
                    >
                        &#xe87b;</motion.div>
                </div>
            </div>

        )
    }
}