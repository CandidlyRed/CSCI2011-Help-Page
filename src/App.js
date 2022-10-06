import './App.css';
import {useState} from 'react';
import YoutubeEmbed from "./YoutubeEmbed";

function App() {


  const [toggleState2, setToggleState2] = useState(1);
  const [toggleState3, setToggleState3] = useState(2);

  const toggleTab2 = (index) => {
    setToggleState2(index);
  }

  const toggleTab3 = (index) => {
    setToggleState3(index);
  }

  return (
    <>
    
    <div className="container">
    <div className="title-container">
      <div className="title">
        <h1>Fall 2022 : CSCI 2011 - Discrete Structures</h1>
      </div>
      <div className="title-box">
        <a href="https://canvas.umn.edu/courses/332566/assignments/syllabus">
            <h1>Schedule</h1>
        </a>
        <a href="https://canvas.umn.edu/courses/332566">
          <h1>Canvas</h1>
        </a>
        <a href="https://canvas.umn.edu/courses/332566/pages/office-hours?module_item_id=8849912">
          <h1>Office Hours</h1>
        </a>
      </div>
    </div>
      <div className="content-tabs">
          <div className="bloc-tabs">
            <button
            className={toggleState2 === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab2(1)}
          >
            Logic
          </button>
          <button
            className={toggleState2 === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab2(2)}
          >
            Boolean Algebra
          </button>
          <button
            className={toggleState2 === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab2(3)}
          >
            Sets
          </button>
          <button
            className={toggleState2 === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab2(4)}
          >
            Cryptography
          </button>
          <button
            className={toggleState2 === 5 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab2(5)}
          >
            Induction
          </button>
        </div>
          <div className="content-tabs">
            <div
            className={toggleState2 === 1 ? "content  active-content" : "content"}
            >
              <div className="bloc-tabs">
                <button
                  className={toggleState3 === 1 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab3(1)}
                >
                1.1: 14
                </button>
                <button
                  className={toggleState3 === 2 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab3(2)}
                >
                1.1: 37acf
                </button>
                <button
                  className={toggleState3 === 3 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab3(3)}
                >
                1.3: tbd
                </button>
                <button
                  className={toggleState3 === 4 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab3(4)}
                >
                1.3: tbd
                </button>
              </div>
              <div className="content-tabs">
          <div
            className={toggleState3 === 1 ? "content2  active-content" : "content2"}
          >
            {/* https://www.youtube.com/watch?v= */}
            <YoutubeEmbed embedId="vb0n3FIDkI8" />
          </div>
          <div
            className={toggleState3 === 2 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="uIgtgPCDeBU" />
          </div>
        </div>
            </div>
            <div
            className={toggleState2 === 2 ? "content2  active-content" : "content2"}
            >
              <h2>Come back later!</h2>
            </div>
            <div
            className={toggleState2 === 3 ? "content2  active-content" : "content2"}
            >
              <h2>Come back later!</h2>
            </div>
            <div
            className={toggleState2 === 4 ? "content2  active-content" : "content2"}
            >
              <h2>Come back later!</h2>
            </div>
            <div
            className={toggleState2 === 5 ? "content2  active-content" : "content2"}
            >
              <h2>Come back later!</h2>
            </div>

          </div>

      </div>
    </div>
    </>
  );
}

export default App;
