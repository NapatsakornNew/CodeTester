import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function App() {
  const [text, setText] = useState("");

  return (

    <div>
      <h1>สร้าง QR Code ด้วยการพิมพ์ข้อความ</h1>
      {text ? 
      (<QRCodeCanvas className="box" value={text} size={350} />) : (<h2 className="box"> กรุณาพิมพ์ข้อความเพื่อสร้าง QR Code</h2>)}
      <input className="text-qr" type="text" placeholder="พิมพ์ข้อความที่นี่" value={text} onChange={(e) => setText(e.target.value)}/>
    
    </div>
  );
}

export default App;
