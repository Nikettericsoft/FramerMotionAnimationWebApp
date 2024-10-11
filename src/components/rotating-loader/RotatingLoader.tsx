import React from 'react';
import { motion } from 'framer-motion';
import './RotatingLoader.scss';

const RotatingLoader: React.FC = () => {
    return (
        <motion.div
            className="rotating-loader"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
        />
    );
};

export default RotatingLoader;
