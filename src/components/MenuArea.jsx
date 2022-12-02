import React from 'react';
import cofee from "../data/products";

const MenuArea = ({myRef}) => {
    const cofeeBlock = cofee.map(item=>{
        return <div  key={item.id} className="menu-area__row__item">
                <div className="menu-area__row__item__top">
                    <div className="menu-area__row__item__top__h4">{item.name}</div>
                    <div className="menu-area__row__item__top__price">${item.price}</div>
                </div>
                <p className="menu-area__row__item__description">{item.description}</p>
            </div>
    });


    return (
        <div className="menu-area" ref={myRef}>
            <h1 className="universal-area__header">What kind of Coffee we serve for you</h1>
            <p className="universal-area__subheader">Who are in extremely love with eco friendly system.</p>
            <div className="menu-area__row">{cofeeBlock}</div>
        </div>
    );
};

export default MenuArea;