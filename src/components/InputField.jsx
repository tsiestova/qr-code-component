import React, { useContext } from 'react';
import componentStyle from './liveCode.module.scss'
import { InputContext } from './LiveCodeComponent'

const InputField = () => {

   const { userValue, setUserValue } = useContext(InputContext);

   const handleChange = e => {
       setUserValue({...userValue, url: e.target.value});
   }

    return (
            <input
                className={componentStyle.input__link}
                type="url"
                placeholder={userValue.url}
                onChange={handleChange}
            />
    );
};

export default InputField;