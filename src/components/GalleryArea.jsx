import React, {useState} from 'react';
import img1 from "../image/g1.jpg";
import img2 from "../image/g2.jpg";
import img3 from "../image/g3.jpg";
import img4 from "../image/g4.jpg";
import img5 from "../image/g5.jpg";
import HiddenScreen from "./HiddenScreen";


const GalleryArea = ({myRef}) => {

    class Picture {
        constructor(id, url) {
            this.id = id;
            this.url = url;
        }
    }

    const imgArray = [img1, img2, img3, img4, img5];
    const picturesToShow = imgArray.map((img, index)=>(new Picture(index+1, img)));
    const [switcher, setSwitcher] = useState(false);
    const [currentImg, setCurrentImg] = useState(picturesToShow[0]);

    const [moveStart, setMoveStart] = useState({
        x:0,
        time: 0
    });



    const changeCurrentImg = (e, id)=>{
        const imgId = Number(id);
        setCurrentImg(picturesToShow.find(img=>img.id===imgId));
    }

    const showFullsizeImg = (e, id)=> {
        changeCurrentImg(e,id);
        setSwitcher(prev=>!prev);
        setTimeout(()=>{
            setSwitcher(false);
        }, 1000)
    }

    const startSwiping = (e)=> {
        setMoveStart({
            x: e.touches[0].clientX,
            time: e.timeStamp
        })
    }

    const endSwiping = (e, id)=> {
        const endX = e.changedTouches[0].clientX;
        const endTime = e.timeStamp;
        let nextImgId;

        if((endTime-moveStart.time) <= 500){
            if((endX - moveStart.x ) >= 10){
                nextImgId = id===picturesToShow.length ? picturesToShow[0].id : currentImg.id+1;
                changeCurrentImg(e, nextImgId);
            }
            if((endX - moveStart.x <=-10)){
                nextImgId = id===picturesToShow[0].id ? picturesToShow.length : currentImg.id-1;
                changeCurrentImg(e, nextImgId);
            }
        }
    }


    const picturesBlock = picturesToShow.map((pic, index)=> {
        let gridlass ="standart";
        if(((index+1)=== 2) || (index+1)-Math.floor((index+1)/5)*5 === 2){
            gridlass="wide";
        }
        if(((index+1)=== 3) || (index+1)-Math.floor((index+1)/5)*5 === 3){
            gridlass="tall";
        }
        return <img
                    key={pic.id}
                    className={`gallery-area__row__img ${gridlass}`}
                    src={pic.url}
                    onClick={(e)=>showFullsizeImg(e, pic.id)}
        />
    });

    const hiddenGalleryBlock = <div className="gallery-area__hidden-screen__gallery-block">
                                    <img className="gallery-area__hidden-screen__gallery-block__img"
                                         src={currentImg.url}
                                         onTouchStart={startSwiping}
                                         onTouchEnd={(e)=>endSwiping(e, currentImg.id)}
                                    />
                                </div>


    return (
        <div className="gallery-area" ref={myRef}>
            <h1 className="universal-area__header">What kind of Coffee we serve for you</h1>
            <p className="universal-area__subheader">Who are in extremely love with eco friendly system.</p>
            <div className="gallery-area__row">{picturesBlock}</div>
            <HiddenScreen
                justify="center"
                insertBlock = {hiddenGalleryBlock}
                switcher={switcher}
            />
        </div>
    );
};

export default GalleryArea;