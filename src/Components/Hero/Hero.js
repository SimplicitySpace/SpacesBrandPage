import React, { useState, useEffect } from 'react'
import classes from './Hero.module.css'
import 'animate.css';

const Hero = () => {

    const [height, setHeight] = useState(0);
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => {
        setOffsetY(window.pageYOffset)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    })

    useEffect(() => {
        let intervalId = setInterval(() => {
            setHeight(prevHeight => {
                if (prevHeight >= 180) {
                    clearInterval(intervalId);
                    return 160;
                }
                return prevHeight + 10;
            });
        }, 100);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <section className={classes.heroBlock}>
            <img style={{ transform: `translateY(${offsetY * 0.7}px)` }} className={`${classes.heroBlockimg}  ${classes.img1}`} src='https://res.cloudinary.com/da3avivzn/image/upload/v1685626659/graph_14_oweurx.png' alt='' />
            <img style={{ transform: `translateY(${offsetY * 0.3}px)` }} className={`${classes.heroBlockimg}  ${classes.img2}`} src='https://res.cloudinary.com/da3avivzn/image/upload/v1685626660/graph_15_rsobv5.png' alt='' />
            <img style={{ transform: `translateY(${offsetY * 0.2}px)` }} className={`${classes.heroBlockimg}  ${classes.img3}`} src='https://res.cloudinary.com/da3avivzn/image/upload/v1685626766/graph_16_hw6gkx.png' alt='' />
            <img style={{ transform: `translateY(${offsetY * 0.6}px)` }} className={`${classes.heroBlockimg}  ${classes.img4}`} src='https://res.cloudinary.com/da3avivzn/image/upload/v1685626813/graph_18_fytllu.png' alt='' />
            <img style={{ transform: `translateY(${offsetY * 0.3}px)` }} className={`${classes.heroBlockimg}  ${classes.img5}`} src='https://res.cloudinary.com/da3avivzn/image/upload/v1685626910/graph_21_vcggnd.png' alt='' />
            <img style={{ transform: `translateY(${offsetY * 0.3}px)` }} className={`${classes.heroBlockimg}  ${classes.img6}`} src='https://res.cloudinary.com/da3avivzn/image/upload/v1685626964/graph_23_htulvp.png' alt='' />
            <div style={{ height: `${height}px` }}
                className={classes.center} >
                <img
                    src='https://res.cloudinary.com/dt9f36crx/image/upload/v1675513596/spacesbrandpages/Space..._hrxsmo.png'
                />
            </div>
        </section >
    )
}

export default Hero