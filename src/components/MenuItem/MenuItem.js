import React from 'react';
import "./MenuItem.css";
import { withRouter } from 'react-router-dom';

class MenuItem extends React.Component {


    componentDidMount() {
        console.log('pro', this.props)
    }

    onPageChange = () => {
        this.props.history.push(this.props.to)
    }

    render() {

        return (
            <div className='menuitem'>
                <div className={`icon ${this.props.active ? 'menuitem_active' : null}`} onClick={this.onPageChange}>
                    <span className="iconfont menu_icon">{this.props.icon}</span>
                </div>
                <div className='itemname'>{this.props.itemName}</div>
            </div>
        )
    }
}

export default withRouter(MenuItem);