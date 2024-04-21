import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenarator() {
  const [qrCode, SetQrCode] = useState("");
  const [input, SetInput] = useState("");
  function handleGenarateQrCode() {
    SetQrCode(input);
    SetInput('')
  }

  return (
    <div>
      <h1>Qr Code Genarator</h1>
      <div>
        <input
          onChange={(e) => {
            SetInput(e.target.value);
          }}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter Your Value Here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenarateQrCode}
        >
          Genarate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
