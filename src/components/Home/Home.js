import React from "react";
import './Home.css'
import { motion } from "framer-motion";
import { pageVariants } from "../../variants";
import Typed from "typed.js";
import { FormattedMessage, injectIntl } from "react-intl";

const typedTexts = {
    en: ['<strong>an university student.</strong>^1000',
        '<strong>an information engineer.</strong>^1000',
        '<strong>a web developer.</strong>^1000'],
    fr: ["<strong>un étudiant de l'UTC.</strong>^1000",
        '<strong>un ingénieur informatique.</strong>^1000',
        '<strong>un développeur web.</strong>^1000'],
}

export class Home extends React.Component {

    componentDidMount() {
        const options = {
            typeSpeed: 50,
            backSpeed: 40,
            startDelay: 500,
            backDelay: 700,
            loop: true,
            loopCount: Infinity,
            onStringTyped: (arrayPos, self) => {
                self.strings = typedTexts[this.props.intl.locale]
            },
            onBegin: (self) => {
                self.strings = typedTexts[this.props.intl.locale]
            }
        };
        this.typed = new Typed(this.identity, options);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        return (
            <motion.div
                className='home_page'
                initial='pageInitial'
                animate='pageAnimate'
                exit='pageOut'
                variants={pageVariants}
                transition={{ duration: .6, type: 'tween', ease: 'anticipate' }}
            >
                <motion.div
                    initial='authorIn'
                    animate='authorOut'
                    variants={{
                        authorIn: { scale: .7, opacity: 0 },
                        authorOut: { scale: 1, opacity: 1 }
                    }}
                    transition={{ delay: .5 }}
                    className='author'
                >
                    Xianhua ZHOU
                </motion.div>
                <div style={{ color: '#a9a9a9', fontSize: '1.5rem', fontWeight: 200 }}>
                    <FormattedMessage id="present" />&nbsp;
                    <span
                        className='identity'
                        ref={(el) => { this.identity = el }}
                    />
                </div>
            </motion.div>
        );
    }
}

export default injectIntl(Home);
