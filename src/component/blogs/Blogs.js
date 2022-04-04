import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className="blog">
                <h2>What is contex API</h2>
                <p>Context API is a way to pass data through the component tree without having to pass props down manually at every level.Contex is a way to manage state globally.In React data is passed throw top-down via props, but such usese can be problematic for certain types of props.For example there are data tree and and state declare in first component and when this state needs for the last component then we can pass throw all component by props.To solve this problem contex provides a way to share values between components without having to explicitly pass a prop throgh every level of the tree.</p>
            </div>
            <div className="blog">
                 <h2>What is semantic tags</h2>
                 <p>Semantic element clearly descrives its meaning.The purpose of semantic tags are many types.More specificly it's used for both blind, eyes-disable person and for developer.It tells it's content and c learly define it's content. header,footer,table,form,article etc are the semantic tags.And non-semantic tags is span, div etc that donot clearly defines it's content.</p>
            </div>
            <div className="blog">
                <h2>Inline and Inline-block</h2>
                  <p>The major difference is that display: inline-block allows to set a width and height on the element. Also, with display: inline-block , the top and bottom margins/paddings are respected, but with display: inline they are not.</p>
            </div>
        </div>
    );
};

export default Blogs;