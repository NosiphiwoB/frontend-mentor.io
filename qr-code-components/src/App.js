
import './App.css';
import qr_code from './qr_code/image-qr-code.png'

function App() {
  return (
    <div className="App">
      <div id="container">
        <div>
        <img id="image" src={qr_code} alt="code" />
        </div>

      <div >
        <div id="header">
         <h2>Improve your front-end skills by building projects</h2>
        </div>

        <div>
            <p>Scan the QR code to visit Frontend 
            <br/>Mentor and take your coding skills to
            <br/>the next level</p>
        </div>
    </div>
   </div>

    </div>
  );
}

export default App;
