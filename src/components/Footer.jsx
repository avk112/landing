import React from 'react';
import arrowImg from "../image/right-arrow.png";
import facebook from "../image/facebook-app-symbol.png";
import twitter from "../image/twitter.png";
import instagram from "../image/instagram.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__row">
                <div className="footer__row__item about-us">
                    <h6 className="footer__item__title">About Us</h6>
                    <p className="footer__item__text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    <p className="footer__item__text">Copyright ©2022 All rights reserved | This page is made as a demonstration</p>
                </div>

                <div className="footer__row__item newsletter">
                    <h6 className="footer__item__title">Newsletter</h6>
                    <p className="footer__item__text">Stay update with our latest</p>
                    <form className="newsletter__form">
                        <input
                            placeholder="Enter E-mail"
                        />
                        <button>
                            <img src={arrowImg}/>
                        </button>
                    </form>

                </div>

                <div className="footer__row__item follow-us">
                    <h6 className="footer__item__title">Follow Us</h6>
                    <p className="footer__item__text">Let us be social</p>
                    <div className="footer__item__social-btns">
                        <img src={facebook}/>
                        <img src={twitter}/>
                        <img src={instagram}/>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;