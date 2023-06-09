import React, { useState } from 'react'
import classes from './Services.module.css'
// import './Services.css'


const Services = ({ list, color }) => {

    const [hover, setHover] = useState(false)

    return (
        <main>
            <div>
                <h3 className={classes.serviceHead}>Services We Provide</h3>
            </div>

            <section className={classes.grid}>


                {list.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={classes.serviceBox}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            <div className={classes.layer}></div>
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>

                        </div>
                    )
                })}
            </section>

        </main>
    )
}

export default Services