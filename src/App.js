import QRCode from "./App.css";
import { useState } from "react";

function App() {
const[url, setUrl] = useState('')
const[qrcode, setQrcode] = useState('')
const GenerateQRCode = () => {
  QRCode.toDataURL(url, (err, urL) => {
    if (err) return console.error(err)

      console.log(urL)
    setQrcode(urL)
  })
}

  return (
    <div className="App">
     <h1>QR Code Generator</h1>
     <input
     type="text"
     placeholder="e.g. https://google.com"
     value={url}
     onChange={(evt) => setUrl(evt.target.value)} />
     <button onClick={GenerateQRCode}>Generate</button>
     <img src={qrcode} />
    </div>
  );
}

export default App;
