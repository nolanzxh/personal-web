import React from "react";
import './ProgressBar.css'
import { motion } from "framer-motion";

export default class ProgressBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            progress: '0%'
        }
    }

    componentDidMount() {
        let counter = 0;
        const timer = setInterval(() => {
            counter++;
            this.setState({ progress: counter + '%' });
            if (counter === this.props.percentage)
                clearInterval(timer);
        }, 10)
    }

    render() {
        return (
            <div className='ability'>
                <div className='ability_bar_title'>
                    <h5 className='barname'>{this.props.title}
                        <span className='bar_percentage'>{this.state.progress}</span>
                    </h5>
                </div>
                <div className='bar_container'>
                    <motion.div
                        className='bar_content'
                        initial='begin'
                        animate='end'
                        variants={{
                            begin: { width: 0 },
                            end: { width: this.props.percentage + '%' }
                        }}s
                        transition={{ duration: 1, type: 'spring', stiffness: 30, damping: 5 }}
                    ></motion.div>
                </div>
            </div>
        );
    }
}
