import React from 'react';
import {motion} from 'framer-motion';
import "./SlideCompionent.scss"

interface SlideInProps {
    children: React.ReactNode;
    direction: 'left' | 'right';
}

const SlideIn: React.FC<SlideInProps> = ({children, direction}) => {
    const variants = {
        hidden: {x: direction === 'left' ? -100 : 100},
        visible: {x: 0},
    };

    return (
        <motion.div
            className="slide-in"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{duration: 0.5}}
        >
            {children}
        </motion.div>
    );
};

export default SlideIn;
