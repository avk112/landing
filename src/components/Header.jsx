import React, {useEffect, useRef, useState} from 'react';
import logo from "../image/logo.png";
import menu from "../image/menu-button-of-three-horizontal-lines.png";
import cancel from "../image/cancel.png";
import HiddenScreen from "./HiddenScreen";

const Header = ({click, homeRef, aboutRef, coffeeRef, reviewRef, blogRef}) => {
    const scrollRef = useRef(null);
    const [scroll, setScroll] = useState(0);
    const [switcher, setSwitcher] = useState(false);


    const handleScroll= ()=> {
        setScroll(window.scrollY);
    };
    const visibleBackground = scroll > scrollRef.current?.offsetTop ? "visible-background" : "hidden-background";

    const showHiddenMenu = ()=> {
        setSwitcher(true);
        setTimeout(()=> {
            setSwitcher(false);
        }, 1000);
    };

    const menuList = <>
                        <li onClick={(e)=>click(e,homeRef)}>HOME</li>
                        <li onClick={(e)=>click(e,aboutRef)}>ABOUT</li>
                        <li onClick={(e)=>click(e,coffeeRef)}>COFFEE</li>
                        <li onClick={(e)=>click(e,reviewRef)}>REVIEW</li>
                        <li onClick={(e)=>click(e,blogRef)}>BLOG</li>
                    </>;

    const menuBlock = <aside className="header__hidden-nav-block">
                            <ul className="header__hidden-nav-block__navs">
                                {menuList}
                            </ul>
                        </aside>

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[])



    return (
        <header className={`header ${visibleBackground}`}>
            <HiddenScreen
                justify="flex-start"
                insertBlock={menuBlock}
                switcher={switcher}
            />
            <div className="header__logo-block">
                <img src={logo} ref={scrollRef}/>
            </div>
            <div className="header__menu-icon">
                    <img src={menu} onClick={showHiddenMenu}/>
            </div>
            <div className="header__nav-block">
                <ul className="header__nav-block__info">
                    <li>Mon-Fri: 8am to 2pm</li>
                    <li> Sat-Sun: 11am to 4pm</li>
                    <li>(012) 6985 236 7512</li>
                </ul>
                <ul className="header__nav-block__nav">
                    {menuList}
                </ul>
            </div>
        </header>
    );
};

export default Header;