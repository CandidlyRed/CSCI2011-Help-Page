import './App.css';
import {useState} from 'react';
import YoutubeEmbed from "./YoutubeEmbed";
import cat from './assets/Cat1.png';

function App() {

  const [toggleState, setToggleState] = useState(1);
  const [toggleState2, setToggleState2] = useState(2);
  const [toggleState3, setToggleState3] = useState(3);

  const toggleTab = (index) => {
    setToggleState(index);
  }

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
        <a href="https://canvas.umn.edu/courses/332566/pages/schedule-and-homework?module_item_id=8794860">
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
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Homework Tutorials
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Opportunities
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="bloc-tabs">
            <button
            className={toggleState2 === 1 ? "tabs active-tabs2" : "tabs"}
            onClick={() => toggleTab2(1)}
          >
            Hw 1
          </button>
          <button
            className={toggleState2 === 2 ? "tabs active-tabs2" : "tabs"}
            onClick={() => toggleTab2(2)}
          >
            Hw 2
          </button>
          <button
            className={toggleState2 === 3 ? "tabs active-tabs2" : "tabs"}
            onClick={() => toggleTab2(3)}
          >
            Hw 3
          </button>
          <button
            className={toggleState2 === 4 ? "tabs active-tabs2" : "tabs"}
            onClick={() => toggleTab2(4)}
          >
            Hw 4
          </button>
          <button
            className={toggleState2 === 5 ? "tabs active-tabs2" : "tabs"}
            onClick={() => toggleTab2(5)}
          >
            Hw 5
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
                Question 1
                </button>
                <button
                  className={toggleState3 === 2 ? "tabs active-tabs2" : "tabs"}
                  onClick={() => toggleTab3(2)}
                >
                Question 2
                </button>
              </div>
              <div className="content-tabs">
          <div
            className={toggleState3 === 1 ? "content2  active-content" : "content2"}
          >
            <YoutubeEmbed embedId="oZp83fMcdhU" />
          </div>
          <div
            className={toggleState3 === 2 ? "content2  active-content" : "content2"}
          >
            <h2>Come back later!</h2>
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

        <div
          className={toggleState === 2 ? "content2  active-content" : "content2"}
        >
          <div className="event">
            <div className='left'>
              <img src={cat} className="image" alt="" />
            </div>
            <div className='right-top'>
              <h1>UMN App Dev Kickoff</h1>
            </div>
            <div className='right-bottom'>
            We'll be introducing the board, telling you more about our club, and discussing what our plans are for the upcoming semester and year. Afterwards, we'll have a chill time where you can meet other app developers and get some free food!
            </div>
            <div className='right-bottom'>
            Also, our general meetings will be every Tuesday from 6-7 at Tate B55 starting the week after, which is 9/27. We'll talk more about this at the kickoff but they will mainly be workshops where you can learn and play with different app development tools.
             </div>
              </div>
          <div className="space"></div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
