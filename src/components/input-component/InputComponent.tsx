import React, {useState} from 'react';
import {motion} from 'framer-motion';
import './InputComponent.scss';

interface FormInputWithValidationProps {
    label: string;
    placeholder: string;
    validate: (value: string) => boolean;
    errorMessage: string;
}

const FormInputWithValidation: React.FC<FormInputWithValidationProps> = ({
                                                                             label,
                                                                             placeholder,
                                                                             validate,
                                                                             errorMessage,
                                                                         }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleBlur = () => {
        setError(!validate(value));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (error) {
            setError(!validate(e.target.value));
        }
    };

    return (
        <div className="form-input-with-validation">
            <label>{label}</label>
            <motion.input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                animate={error ? {x: [0, -10, 10, -10, 10, 0]} : {}}
                transition={{duration: 0.3}}
                className={error ? 'error' : ''}
            />
            {error && <span className="error-message">{errorMessage}</span>}
        </div>
    );
};

export default FormInputWithValidation;
