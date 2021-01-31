import React from "react";
import './Home.css'
import { motion } from "framer-motion";
import { pageVariants } from "../../variants";
import Typed from "typed.js";

export default class Home extends React.Component {

    componentDidMount() {
        const options = {
            strings: ['<strong>an university student.</strong>^1000',
                '<strong>an information engineer.</strong>^1000',
                '<strong>a web developer.</strong>^1000'],
            typeSpeed: 50,
            backSpeed: 40,
            startDelay: 500,
            backDelay: 700,
            loop: true,
            loopCount: Infinity
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
                    Xianhua ZHOU</motion.div>
                <div style={{ color: '#a9a9a9', fontSize: '1.5rem', fontWeight: 200 }}>
                    I am&nbsp;
                    <span
                        className='identity'
                        ref={(el) => { this.identity = el }}
                    />
                </div>
            </motion.div>
        );
    }
}
