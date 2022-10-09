import './App.css';
import {useState} from 'react';
import YoutubeEmbed from "./YoutubeEmbed";

function App() {


  const [toggleState2, setToggleState2] = useState(1);
  const [toggleState3, setToggleState3] = useState(2);
  const [toggleState4, setToggleState4] = useState(3);
  const [toggleState5, setToggleState5] = useState(4);

  const toggleTab2 = (index) => {
    setToggleState2(index);
  }

  const toggleTab3 = (index) => {
    setToggleState3(index);
  }

  const toggleTab4 = (index) => {
    setToggleState4(index);
  }

  const toggleTab5 = (index) => {
    setToggleState5(index);
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
                1.3: 28
                </button>
                <button
                  className={toggleState3 === 4 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab3(4)}
                >
                1.3: 30
                </button>
                <button
                  className={toggleState3 === 5 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab3(5)}
                >
                1.3: 34
                </button>
                <button
                  className={toggleState3 === 6 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab3(6)}
                >
                1.4: 9
                </button>
                <button
                  className={toggleState3 === 7 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab3(7)}
                >
                1.4: 11
                </button>
                <button
                  className={toggleState3 === 8 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab3(8)}
                >
                1.5: 8
                </button>
                <button
                  className={toggleState3 === 9 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab3(9)}
                >
                1.5: 26
                </button>
                <button
                  className={toggleState3 === 10 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab3(10)}
                >
                1.6: 11
                </button>
                <button
                  className={toggleState3 === 11 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab3(11)}
                >
                1.6: 34
                </button>
                <button
                  className={toggleState3 === 12 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab3(12)}
                >
                1.7: 26
                </button>
                <button
                  className={toggleState3 === 13 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab3(13)}
                >
                1.7: 39
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
          <div
            className={toggleState3 === 3 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="h7vyFMna4Cs" />
          </div>
          <div
            className={toggleState3 === 4 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="xuCLq_KHY9o" />
          </div>
          <div
            className={toggleState3 === 5 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="VbSQqrtIL5U" />
          </div>
          <div
            className={toggleState3 === 6 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="lEBBfbtdQPU" />
          </div>
          <div
            className={toggleState3 === 7 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="59KYZuPQo2A" />
          </div>
          <div
            className={toggleState3 === 8 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="-MdrPH3rGfM" />
          </div>
          <div
            className={toggleState3 === 9 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="kd0QB_eNn2Y" />
          </div>
          <div
            className={toggleState3 === 10 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="SmLKFSo3gZU" />
          </div>
          <div
            className={toggleState3 === 11 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="KZBlOS7Xe58" />
          </div>
          <div
            className={toggleState3 === 12 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="xVPynvc4HJs" />
          </div>
          <div
            className={toggleState3 === 13 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="tMJbTrS3bx4" />
          </div>
        </div>
            </div>
            <div
            className={toggleState2 === 2 ? "content  active-content" : "content2"}
            >
              <div className="bloc-tabs">
                <button
                  className={toggleState4 === 1 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab4(1)}
                >
                12.1: 1
                </button>
                <button
                  className={toggleState4 === 2 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab4(2)}
                >
                12.1: 2
                </button>
                <button
                  className={toggleState4 === 3 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab4(3)}
                >
                12.2: 3
                </button>
                <button
                  className={toggleState4 === 4 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab4(4)}
                >
                12.3: 1
                </button>
                <button
                  className={toggleState4 === 5 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab4(5)}
                >
                12.3: 6
                </button>
              </div>
              <div className="content-tabs">
          <div
            className={toggleState4 === 1 ? "content2  active-content" : "content2"}
          >
            {/* https://www.youtube.com/watch?v= */}
            <YoutubeEmbed embedId="SwcOXIYr0w4" />
          </div>
          <div
            className={toggleState4 === 2 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="h0qrIsjWeqs" />
          </div>
          <div
            className={toggleState4 === 3 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="SsCquMOQO1w" />
          </div>
          <div
            className={toggleState4 === 4 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="RmX0HHPxSE0" />
          </div>
          <div
            className={toggleState4 === 5 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="dEqJ0p53MRo" />
          </div>
          </div>

            </div>
            <div
            className={toggleState2 === 3 ? "content  active-content" : "content2"}
            >
              <div className="bloc-tabs">
                <button
                  className={toggleState5 === 1 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab5(1)}
                >
                2.1: 1
                </button>
                <button
                  className={toggleState5 === 2 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab5(2)}
                >
                2.1: 10
                </button>
                <button
                  className={toggleState5 === 3 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab5(3)}
                >
                2.1: 24
                </button>
                <button
                  className={toggleState5 === 4 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab5(4)}
                >
                2.1: 35
                </button>
                <button
                  className={toggleState5 === 5 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab5(5)}
                >
                2.2: 3
                </button>
                <button
                  className={toggleState5 === 6 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab5(6)}
                >
                2.2: 27
                </button>
                <button
                  className={toggleState5 === 7 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab5(7)}
                >
                2.3: 1
                </button>
                <button
                  className={toggleState5 === 8 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab5(8)}
                >
                2.3: 12/13
                </button>
                <button
                  className={toggleState5 === 9 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab5(9)}
                >
                2.4: 2
                </button>
                <button
                  className={toggleState5 === 10 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab5(10)}
                >
                2.4: 29
                </button>
              </div>
              <div className="content-tabs">
          <div
            className={toggleState5 === 1 ? "content2  active-content" : "content2"}
          >
            {/* https://www.youtube.com/watch?v= */}
            <YoutubeEmbed embedId="hu2aqRlEokQ" />
          </div>
          <div
            className={toggleState5 === 2 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="DETrBzrUAWQ" />
          </div>
          <div
            className={toggleState5 === 3 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="I43ypYwEoYA" />
          </div>
          <div
            className={toggleState5 === 4 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="gKvgrYeLZfY" />
          </div>
          <div
            className={toggleState5 === 5 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="9hERHqEbSN8" />
          </div>
          <div
            className={toggleState5 === 6 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="hZNpnkXkdeg" />
          </div>
          <div
            className={toggleState5 === 7 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="sSdMyxc-Fqs" />
          </div>
          <div
            className={toggleState5 === 8 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="5BKyz1buJWA" />
          </div>
          <div
            className={toggleState5 === 9 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="-8RMnHononw" />
          </div>
          <div
            className={toggleState5 === 10 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="Iz_tNCKsa4Y" />
          </div>
          </div>
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
