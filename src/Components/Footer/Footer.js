import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={classes.topRow}>
                <div className={classes.ImgBox}>
                    <img src='https://res.cloudinary.com/da3avivzn/image/upload/v1684308125/SpacesBrandPage/Space.._2_v5jjvp.png' alt='' />
                </div>
                <div className={classes.textBox}>
                    <div className={classes.textBox1} >
                        <span>Home</span>
                        <span>Projects</span>
                        <span>Services</span>
                    </div>
                    <div className={classes.textBox2}>
                        <span>About Us</span>
                        <span>Contact Us</span>
                        <span>Support</span>
                    </div>
                </div>
            </div>
            <div className={classes.bottomRow}>
                <div className={classes.socialIcons}>
                    <a href='https://twitter.com/Spaces_ui' target="_blank" rel="noopener noreferrer" >
                        <img src='https://res.cloudinary.com/da3avivzn/image/upload/v1684309186/SpacesBrandPage/Social_Icon_fx3pmg.png' alt='' />
                    </a>
                    <a href='https://instagram.com/spaces_ui?igshid=MmJiY2I4NDBkZg==' target="_blank" rel="noopener noreferrer" >
                        <img src='https://res.cloudinary.com/da3avivzn/image/upload/v1684309189/SpacesBrandPage/Social_Icon_1_z1fo9d.png' alt='' />
                    </a>
                    <a>
                        <img src='https://res.cloudinary.com/da3avivzn/image/upload/v1684309191/SpacesBrandPage/Social_Icon_2_snnchi.png' alt='' />

                    </a>
                </div>
                <div>
                    <span> 2023 Spaces. All rights reserved</span>

                </div>
            </div>
        </footer>
    )
}

export default Footer