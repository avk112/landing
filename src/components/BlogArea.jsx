import React from 'react';
import blog from "../data/blog";

const BlogArea = ({myRef}) => {
    const itemsBlock = blog.map(item=>{
        const tagsBlock = item.tags.map((tag, index)=>{
            return <div key={index} className="blog-area__item__tags__tag">{tag}</div>
        });

        return <div key={item.id} className="blog-area__item">
                    <div className="blog-area__item__img-block">
                        <img
                            className="blog-area__item__img-block__img"
                            src={item.img}
                        />
                    </div>
                    <div className="blog-area__item__tags">
                        {tagsBlock}
                    </div>
                    <h4 className="blog-area__item__title">{item.title}</h4>
                    <p className="blog-area__item__text">{item.text}</p>
                    <div className="blog-area__item__date">{item.date}</div>
                 </div>
    });


    return (
        <div className="blog-area" ref={myRef}>
            <h1 className="universal-area__header" >What kind of Coffee we serve for you</h1>
            <p className="universal-area__subheader" >Who are in extremely love with eco friendly system.</p>
            <div className="blog-area__items-block">
                {itemsBlock}
            </div>
        </div>
    );
};

export default BlogArea;