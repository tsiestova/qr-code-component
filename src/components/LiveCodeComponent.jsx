import React, {useState, useRef} from "react";
import componentStyle from './liveCode.module.scss'
import QRCode from "react-qr-code";

const LiveCodeComponent = () => {

    const [qrCode, setQrCode] = useState("https://www.frontendmentor.io/home");
    const inputRef = useRef();

    const handleInputChange = (value) => {
        setQrCode(value);
    }

    return (
        <div className={componentStyle.card}>
            <div className={componentStyle.layout}>
                <div className={componentStyle.qrCode__container}>
                    <QRCode
                        size={256}
                        style={{ height: "100%", width: "100%",
                    display: "block", margin: "auto"
                    }}
                        value={`${qrCode}`}
                        viewBox={`0 0 256 256`}
                        color={"white"}
                    />
                </div>
                <div className={componentStyle.heading}>Improve your front-end skills by building projects</div>
                <div className={componentStyle.description}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>

                <label className={componentStyle.subheading}>
                    Generate your QR code
                </label>
                    <input
                        className={componentStyle.input__link}
                        type="text"
                        ref={inputRef}
                        onChange={() => {
                            handleInputChange(inputRef.current.value)
                        }}
                    />
            </div>
        </div>
    )
}

export default LiveCodeComponent