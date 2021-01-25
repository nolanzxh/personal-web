import React from 'react';
import "./Menu.css";
import MenuItem from "../MenuItem/MenuItem";
import '../../icon/iconfont.css';

export default class Menu extends React.Component {

    componentDidMount() {
        console.log('muneprops', this.props)
    }

    render() {
        return (
            <div className='menu_container'>
                <div className='menu'>
                    <div className='logo'>
                        Z<p style={{ display: 'inline', color: '#cf000f' }}>.</p>
                    </div>
                    <div className='itemlist'>
                        <MenuItem itemName='Home' icon='&#xe65c;' to='home' active={this.props.isOn === '/home'}></MenuItem>
                        <MenuItem itemName='Resume' icon='&#xe60e;' to='resume' active={this.props.isOn === '/resume'}></MenuItem>
                        <MenuItem itemName='Skill' icon='&#xe646;' to='skill' active={this.props.isOn === '/skill'}></MenuItem>
                        <MenuItem itemName='Contact' icon='&#xe600;' to='contact' active={this.props.isOn === '/contact'} ></MenuItem>
                    </div>
                </div>
            </div>

        )
    }
}