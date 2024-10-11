import React from 'react';
import {motion} from 'framer-motion';
import "./StaggeredComponent.scss";

interface StaggeredListProps {
    items: string[];
}

const StaggeredList: React.FC<StaggeredListProps> = ({items}) => {
    return (
        <motion.ul
            className="staggered-list"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {transition: {staggerChildren: 0.2}},
            }}
        >
            {items.map((item, index) => (
                <motion.li
                    key={index}
                    variants={{
                        hidden: {opacity: 0},
                        visible: {opacity: 1},
                    }}
                >
                    {item}
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default StaggeredList;
