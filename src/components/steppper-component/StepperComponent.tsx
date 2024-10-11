import React, {useState} from 'react';
import {motion} from 'framer-motion';
import './StepperComponent.scss';

interface Step {
    label: string;
    content: React.ReactNode;
}

interface StepperProps {
    steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({steps}) => {
    const [currentStep, setCurrentStep] = useState(0);

    const goNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const goBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="stepper">
            <div className="stepper-header">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`stepper-step ${
                            index <= currentStep ? 'active' : ''
                        }`}
                    >
                        <motion.div
                            className="step-number"
                            animate={{scale: index === currentStep ? 1.2 : 1}}
                        >
                            {index + 1}
                        </motion.div>
                        <div className="step-label">{step.label}</div>
                    </div>
                ))}
            </div>
            <motion.div
                className="stepper-content"
                key={currentStep}
                initial={{opacity: 0, x: 50}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -50}}
                transition={{duration: 0.5}}
            >
                {steps[currentStep].content}
            </motion.div>
            <div className="stepper-controls">
                <button onClick={goBack} disabled={currentStep === 0}>
                    Back
                </button>
                <button
                    onClick={goNext}
                    disabled={currentStep === steps.length - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Stepper;
