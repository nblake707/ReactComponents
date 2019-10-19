import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () =>{
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam" 
                date="Today at 6:00PM" 
                text="Nice blog post!" 
                pic={faker.image.avatar()}
                />

            <CommentDetail 
                author="Alex" 
                date="Yesterday at 7:00AM" 
                text="Watta Chump!" 
                pic={faker.image.avatar()} 
                />

            <CommentDetail 
                author="Jane" 
                date="Today at 5:50PM" 
                text="lol Sooo funny!!" 
                pic={faker.image.avatar()}
                />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));