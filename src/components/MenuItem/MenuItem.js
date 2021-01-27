import React from 'react';
import "./MenuItem.css";
import { withRouter } from 'react-router-dom';
import { motion } from "framer-motion";

class MenuItem extends React.Component {

    componentDidMount() {

    }

    onPageChange = () => {
        this.props.history.push(this.props.to)
    }

    render() {
        const { isSmallScreen, active } = this.props;
        return (
            <motion.div
                className={isSmallScreen ? 'menuitem_small' : 'menuitem'}
                initial='rest'
                whileHover='hover'
            >
                <motion.div
                    className={`${isSmallScreen ? 'icon_button_small' : 'icon_button'} ${active ? 'menuitem_active' : null}`}
                    onClick={this.onPageChange}
                    variants={isSmallScreen ? {
                        rest: { color: '#a9a9a9' },
                        hover: {
                            color: '#fff',
                            transition: .3
                        }
                    } : null}
                >
                    <span className="iconfont menu_icon">{this.props.icon}</span>
                </motion.div>
                <motion.div
                    className={isSmallScreen ? 'itemname_small' : 'itemname'}
                >{this.props.itemName}</motion.div>
            </motion.div>
        )
    }
}

export default withRouter(MenuItem);