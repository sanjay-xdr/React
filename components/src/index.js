import react from "react";
import ReactDOM from "react-dom";
import faker from "faker";


const App = ()=>{
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatat">
          <img alt="avatat" src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a href="/" className="author">Sam</a>
          <div className="metadata">
            <span className="date">Today at 6:00Pm</span>
          </div>
          <div className="text">Nice blog popst</div>
        </div>
      </div>
      {/* i am the comment */}
      <div className="comment">
        <a href="/" className="avatat">
          <img alt="avatat" src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a href="/" className="author">Sam</a>
          <div className="metadata">
            <span className="date">Today at 6:00Pm</span>
          </div>
          <div className="text">Nice blog popst</div>
        </div>
      </div>
    </div>
  );
};


ReactDOM.render(<App/>,document.querySelector("#root"));