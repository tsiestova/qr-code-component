import React, { useContext } from 'react';
import QRCode from "react-qr-code";
import { InputContext } from './LiveCodeComponent'

const QrCodeComonent = () => {
    const { userValue, setUserValue } = useContext(InputContext);

    return (
        <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={userValue.url}
            viewBox={`0 0 256 256`}
        />

    );
};

export default QrCodeComonent;