import React from 'react';
import { motion } from 'framer-motion';
import './Bounce.scss';

const Bounce: React.FC = () => {
    return (
        <motion.div
            className="bounce"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
        >
            Bounce
        </motion.div>
    );
};

export default Bounce;
