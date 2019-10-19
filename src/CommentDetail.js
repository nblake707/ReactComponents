import React from 'react';



//props allow us to configure dynamic content 

const CommentDetail = props => {
 
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={props.pic}/>
        </a>
        <div className="content">
            <a href="/" className="author">
                {props.author}
            </a>
            <div className="metaData"></div>
            <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.text}</div>
    </div>
    );
};

//makes this available to outside files
export default CommentDetail;