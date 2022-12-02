import React, {useEffect, useRef, useState} from 'react';
import reviews from "../data/review-items";
import counts from "../data/review-counter";
import goldStarImg from "../image/star-gold.png";
import starImg from "../image/star.png";

const ReviewArea = () => {

    const counterRef = useRef(null);
    const maxRate = [starImg, starImg, starImg,starImg,starImg];
    const [scroll, setScroll] = useState({allowed: false, y: 0});
    const [runningCount, setRunningCount] = useState(counts.map(count=>(
        {
            id: count.id,
            count: 0,
            maxCount: count.count
        })));

    const handleScroll = ()=> {
       setScroll(prev=>({...prev, y: window.scrollY}));
    };

    const runCounter = (duration=1000, timeout=40)=> {
        if(runningCount[0].count < runningCount[0].maxCount) {
            setTimeout(()=>{
                setRunningCount(prev => {
                    return prev.map(item => ({...item, count: item.count + (item.maxCount/duration)*timeout}))
                })},timeout)
        }
        if(runningCount[0].count >= runningCount[0].maxCount){
             setScroll(prev=>({...prev, allowed: false}));
             setRunningCount(prev => {
                 return prev.map(item => ({...item, count: item.maxCount}));
             })
        }
    }

    const counterBlock = counts.map(count=>{
        return <div
                  key={count.id}
                  className="review-area__counter__item"
                >
                    <h1 className="review-area__counter__item__count">{Math.round(runningCount.find(item=>item.id===count.id).count)}</h1>
                    <p>{count.name}</p>
            </div>
    });

    const reviewsBlock = reviews.map(review=>{
        const ratesBlock=maxRate.map((rate, index)=>{
            return (index+1)<= review.rate ? <img key={index} src={goldStarImg}/> : <img key={index} src={rate}/>
        });

        return <div  key={review.id} className="review-area__row__review-item">
                    <img
                        className="review-area__row__review-item__logo"
                        src={review.logo}
                    />
                    <div className="review-area__row__review-item__title-block">
                        <h4 className="review-area__row__review-item__title-block__name">{review.name}</h4>
                        <div className="review-area__row__review-item__title-block__rate">
                           {ratesBlock}
                        </div>
                    </div>
                        <div className="review-area__row__review-item__description">
                            {review.description}
                        </div>
                </div>
    });

    useEffect(()=>{
        if(scroll.allowed) {
            runCounter();
        }

    }, [runningCount, scroll.allowed]);

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        if((scroll.y > counterRef.current.offsetTop+100) && runningCount[0].count !== runningCount[0].maxCount){
            setScroll(prev=>({...prev, allowed: true}));
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [scroll.y]);


    return (
        <div className="review-area" ref={counterRef}>
            <h1 className="universal-area__header" >What kind of Coffee we serve for you</h1>
            <p className="universal-area__subheader" >Who are in extremely love with eco friendly system.</p>
            <div className="review-area__row">
                {reviewsBlock}
            </div>
            <div className="review-area__counter">
                {counterBlock}
            </div>
        </div>
    );
};

export default ReviewArea;