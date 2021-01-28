import React from 'react';
import "./MenuItem.css";
import { withRouter } from 'react-router-dom';

export class MenuItem extends React.Component {

    onPageChange = () => {
        this.props.history.push(this.props.to)
    }

    render() {
        const { isSmallScreen, active } = this.props;
        return (
            <div
                className={isSmallScreen ? 'menuitem_small' : 'menuitem'}>
                <div
                    className={`${isSmallScreen ? 'icon_button_small' : 'icon_button'} ${active ? 'menuitem_active' : null}`}
                    onClick={this.onPageChange}
                >
                    <span className="iconfont menu_icon">{this.props.icon}</span>
                </div>
                <div
                    className={isSmallScreen ? 'itemname_small' : 'itemname'}>{this.props.itemName}</div>
            </div>
        )
    }
}

export default withRouter(MenuItem);