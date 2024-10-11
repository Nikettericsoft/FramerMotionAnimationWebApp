import React from 'react';
import {motion} from 'framer-motion';
import './ButtonComponent.scss';

interface ButtonComponentProps {
    name?: string;
    onClick?: () => void;
}

const AnimatedButton: React.FC<ButtonComponentProps> = ({onClick, name}) => {
    return (
        <motion.button
            className="animated-button"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            onClick={onClick}
        >
            {name}
        </motion.button>
    );
};

export default AnimatedButton;
