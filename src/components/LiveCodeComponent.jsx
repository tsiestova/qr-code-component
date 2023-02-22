import React, {useState, useRef, createContext} from "react";
import QrCodeComonent from './QrCode'
import componentStyle from './liveCode.module.scss'
import InputField from './InputField'


export const InputContext = React.createContext();

const LiveCodeComponent = () => {
    const [userValue, setUserValue] = useState({
        url: "https://github.com/tsiestova?tab=repositories"
    });

    const value = {
        userValue,
        setUserValue
    }

    return (
        <div className={componentStyle.card}>
            <div className={componentStyle.layout}>
                <InputContext.Provider value={value}>
                    <div className={componentStyle.qrCode__container}>
                        <QrCodeComonent/>
                    </div>
                    <div className={componentStyle.heading}>Improve your front-end skills by building projects</div>
                    <div className={componentStyle.description}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>

                    <label className={componentStyle.subheading}>
                        Generate your QR code
                    </label>
                    <InputField />
                </InputContext.Provider>

            </div>
        </div>
    )
}

export default LiveCodeComponent