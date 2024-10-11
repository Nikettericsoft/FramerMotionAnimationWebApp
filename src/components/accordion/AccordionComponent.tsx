import React, {useState} from 'react';
import {motion} from 'framer-motion';
import "./AccordionComponent.scss"

interface AccordionProps {
    title: string;
    content: string;
}

const Accordion: React.FC<AccordionProps> = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion">
            <motion.h2
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{cursor: 'pointer'}}
                className="accordion-title"
            >
                {title}
            </motion.h2>
            {isOpen && (
                <motion.div
                    className="accordion-content"
                    initial={{height: 0}}
                    animate={{height: 'auto'}}
                    transition={{duration: 0.3}}
                >
                    <p>{content}</p>
                </motion.div>
            )}
        </div>
    );
};

export default Accordion;
