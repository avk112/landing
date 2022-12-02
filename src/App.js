import React, {useRef} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import VideoArea from "./components/VideoArea";
import MenuArea from "./components/MenuArea";
import GalleryArea from "./components/GalleryArea";
import ReviewArea from "./components/ReviewArea";
import BlogArea from "./components/BlogArea";

const App = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const coffeeRef = useRef(null);
    const reviewRef = useRef(null);
    const blogRef = useRef(null);

    const smoothScroll = (e, myRef)=> {
        myRef.current?.scrollIntoView({behavior:'smooth'})
    }


    return (
        <div className="app">
            <Header
                homeRef={homeRef}
                aboutRef={aboutRef}
                coffeeRef={coffeeRef}
                reviewRef={reviewRef}
                blogRef={blogRef}
                click={smoothScroll}
            />
            <main className="main">
                <Banner myRef={homeRef}/>
                <VideoArea myRef={aboutRef}/>
                <MenuArea myRef={coffeeRef}/>
                <GalleryArea myRef={reviewRef}/>
                <ReviewArea/>
                <BlogArea myRef={blogRef}/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;