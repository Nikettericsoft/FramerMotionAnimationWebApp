import React from 'react';
import {motion} from 'framer-motion';
import "./Modal.scss"
import AnimatedButton from "../button/ButtonComponent.tsx";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;

    return (
        <motion.div
            className="modal-backdrop"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <motion.div
                className="modal-content"
                initial={{scale: 0.8}}
                animate={{scale: 1}}
                exit={{scale: 0.8}}
            >
                <AnimatedButton name={'X'} onClick={onClose}/>
                {children}
            </motion.div>
        </motion.div>
    );
};

export default Modal;
