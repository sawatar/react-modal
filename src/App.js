import {useState} from 'react';

import "./app.scss";

const App = ()=> {
  const [open,setOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">🥳 Открыть окошко!</button>
      {
        open &&(
          <div className="overlay">
        <div className="modal">
          <div onClick={() =>setOpen(false)} className="close"></div>
          <h2>спокойной ночи</h2>
          <iframe src="https://gifer.com/embed/8q4" width="350px" height="170.325" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
        )
      }
    </div>
  );
}

export default App;
