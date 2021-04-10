import react from "react";
import faker, { time } from "faker";



const CommentDetail=(props)=>{

    return (
    <div className="comment">
        <a href="/" className="avatat">
        <img alt="avatat" src={faker.image.avatar()}/>
        </a>
        <div className="content">
        <a href="/" className="author">{props.author}</a>
        <div className="metadata">
            <span className="date">{props.time}</span>
        </div>
        <div className="text">{props.comment}</div>
        </div>
    </div>

    );
};

export default CommentDetail;