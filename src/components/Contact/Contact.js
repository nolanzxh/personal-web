import React from "react";
import './Contact.css';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { motion } from "framer-motion";
import { pageVariants } from "../../variants";
import { connect } from "react-redux";

const mapStyles = {
    position: 'relative',
};

export class Contact extends React.Component {
    state = {
        selectedPlace: {},
        activeMarker: {},
        showingInfoWindow: false
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <motion.div
                className={`contact_page ${this.props.isSmallScreen ? 'smallscreen_page' : null}`}
                initial='pageInitial'
                animate='pageAnimate'
                exit='pageOut'
                variants={pageVariants}
                transition={{ duration: .6, type: 'tween', ease: 'anticipate' }}
            >
                <section className='contact_panel'>
                    <section className='map'>
                        <div className='map_title'>My location</div>
                        {<Map
                            google={this.props.google}
                            zoom={14}
                            containerStyle={mapStyles}
                            initialCenter={{
                                lat: 49.41235203166623,
                                lng: 2.8122966426523854
                            }}
                        >
                            <Marker
                                onClick={this.onMarkerClick}
                                name='My position'
                                title='My position'
                                position={{ lat: 49.41235203166623, lng: 2.8122966426523854 }} />
                            <InfoWindow
                                marker={this.state.activeMarker}
                                visible={this.state.showingInfoWindow}
                                onClose={this.onClose}
                            >
                                <div><h4>{this.state.selectedPlace.name}</h4></div>
                            </InfoWindow>
                        </Map>}
                    </section>
                    <div className='contact_list'>

                        <div className='contact_item'>
                            <span className='iconfont contact_item_icon'>&#xe72f;</span>
                            <div className='contact_item_description'>
                                <h2 className='contact_item_title'>Address</h2>
                                <p className='contact_item_content'>France, Compiègne</p>
                            </div>
                        </div>

                        <div className='contact_item'>
                            <span className='iconfont contact_item_icon'>&#xe612;</span>
                            <div className='contact_item_description'>
                                <h2 className='contact_item_title'>Mail</h2>
                                <p className='contact_item_content'>xianhua.zhou@etu.utc.fr</p>
                            </div>
                        </div>

                        <div className='contact_item'>
                            <span className='iconfont contact_item_icon'>&#xe622;</span>
                            <div className='contact_item_description'>
                                <h2 className='contact_item_title'>Phone</h2>
                                <p className='contact_item_content'>+33 0636109977</p>
                            </div>
                        </div>


                        <div className='contact_item'>
                            <span className='iconfont contact_item_icon'>&#xe666;</span>
                            <div className='contact_item_description'>
                                <h2 className='contact_item_title'>Others</h2>
                                <p className='contact_item_content'>None</p>
                            </div>
                        </div>
                    </div>
                </section>

            </motion.div >
        );
    }
}

const mapStateToProps = (state) => ({
    isSmallScreen: state.isSmallScreen,
});

export default connect(mapStateToProps)(GoogleApiWrapper({
    apiKey: 'AIzaSyD5nHI6LnQF2qinXK9R8S6s2oMmyJDTBac'
})(Contact))