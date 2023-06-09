import React from 'react'
import classes from './Projects.module.css'


const Projects = ({ list }) => {

    return (
        <section className={classes.projectBlock}>
            {list.map((items) => {
                return (
                    <a href={items.url}>
                         <div  className={classes.projectBox} style={{ border: `2px solid ${items.color}` }}>
                        <div className={classes.firstRow}>
                            <div className={classes.titleNote}>
                                <h2 style={{
                                    color: `${items.color}`
                                }}
                                >{items.title}</h2>
                                <p>{items.note}</p>
                            </div>
                            <div className={classes.iconTypeBox}>
                                <div className={classes.iconType}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke={items.color} fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
</svg>
                                    <p>{items.type}</p>
                                </div>
                                <div className={classes.iconType}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke={items.color} fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill=''/>
  <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
  <path d="M16 3l0 4" />
  <path d="M8 3l0 4" />
  <path d="M4 11l16 0" />
  <path d="M8 15h2v2h-2z" />
</svg>
                                    <p>{items.date}</p>
                                </div>
                                <div className={classes.iconType}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tinder" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke={items.color} fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18.918 8.174c2.56 4.982 .501 11.656 -5.38 12.626c-7.702 1.687 -12.84 -7.716 -7.054 -13.229c.309 -.305 1.161 -1.095 1.516 -1.349c0 .528 .27 3.475 1 3.167c3 0 4 -4.222 3.587 -7.389c2.7 1.411 4.987 3.376 6.331 6.174z" />
</svg>
                                    <p>{items.designPlatform}</p>
                                </div>

                                <div className={classes.projectBtn}>
                                    <button
                                        style={{ border: `2px solid ${items.color}`, background: `${items.color}`, color: 'white', border: `${items.color}` }}
                                    >
                                        View Project
                                    </button>
                                </div>
                            </div>
                        </div>
                        <a href={items.url}>
                        <main className={classes.secondRow}>
                        <div className={classes.imgBox}>
                             <img src={items.img} />
                        </div> 
                         </main>
                        </a>
                    </div>
                    </a>
                   

                )
            })}

        </section>
    )
}

export default Projects