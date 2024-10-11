import React from 'react';
import { motion } from 'framer-motion';
import './DraggableCard.scss';

const DraggableCard: React.FC = () => {
    return (
        <motion.div
            className="draggable-card"
            drag
            whileDrag={{ scale: 1.1 }}
        >
            Drag Me
        </motion.div>
    );
};

export default DraggableCard;
