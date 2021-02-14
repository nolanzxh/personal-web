import React from "react";
import './LanguageSwitch.css'
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { toggleAppLanguage } from "../../actions";

export class LanguageSwitch extends React.Component {

    toggleLang = (e) => {
        if (e.target.dataset.lang !== this.props.language)
            this.props.language === 'EN' ?
                this.props.toggleAppLanguage('FR') :
                this.props.toggleAppLanguage('EN')
    }

    render() {
        return (
            <div
                className={`switch_container ${this.props.isSmallScreen ? 'small_switch' : null}`}
                data-lang={this.props.language}
                onClick={this.toggleLang}
            >
                <motion.div
                    layout
                    transition={{
                        type: 'spring',
                        damping: 30,
                        stiffness: 700
                    }}
                    className='selected' />
                <div className='lang_option' data-lang="EN">EN</div>
                <div className='lang_option' data-lang="FR">FR</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isSmallScreen: state.isSmallScreen,
    showMenuBar: state.showMenuBar,
    language: state.languageValue
});

export default connect(mapStateToProps, { toggleAppLanguage })(LanguageSwitch);