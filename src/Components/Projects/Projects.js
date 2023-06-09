import React from 'react'
import classes from './Projects.module.css'


const Projects = ({ list }) => {



    return (
        <section className={classes.projectBlock}>
            {list.map((items) => {
                return (
                    <div className={classes.projectBox} style={{ border: `2px solid ${items.color}` }}>
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
                                    <svg
                                        style={{
                                            fill: `${items.color}`
                                        }}
                                        xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tag" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="8.5" cy="8.5" r="1" fill="" />
                                        <path d="M4 7v3.859c0 .537 .213 1.052 .593 1.432l8.116 8.116a2.025 2.025 0 0 0 2.864 0l4.834 -4.834a2.025 2.025 0 0 0 0 -2.864l-8.117 -8.116a2.025 2.025 0 0 0 -1.431 -.593h-3.859a3 3 0 0 0 -3 3z" />
                                    </svg>
                                    <p>{items.type}</p>
                                </div>
                                <div className={classes.iconType}>
                                    <svg
                                        style={{
                                            fill: `${items.color}`
                                        }}
                                        xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-time" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                                        <circle cx="18" cy="18" r="4" />
                                        <path d="M15 3v4" />
                                        <path d="M7 3v4" />
                                        <path d="M3 11h16" />
                                        <path d="M18 16.496v1.504l1 1" />
                                    </svg>
                                    <p>{items.date}</p>
                                </div>
                                <div className={classes.iconType}>
                                    <svg
                                        style={{
                                            fill: `${items.color}`
                                        }}
                                        xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-artboard" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <rect x="8" y="8" width="8" height="8" rx="1" />
                                        <line x1="3" y1="8" x2="4" y2="8" />
                                        <line x1="3" y1="16" x2="4" y2="16" />
                                        <line x1="8" y1="3" x2="8" y2="4" />
                                        <line x1="16" y1="3" x2="16" y2="4" />
                                        <line x1="20" y1="8" x2="21" y2="8" />
                                        <line x1="20" y1="16" x2="21" y2="16" />
                                        <line x1="8" y1="20" x2="8" y2="21" />
                                        <line x1="16" y1="20" x2="16" y2="21" />
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
                        <main className={classes.secondRow}>

                            <div className={classes.imgBox}>
                                <img src={items.img} />
                            </div>
                            <p>{items.quote}</p>
                        </main>
                    </div>

                )
            })}

        </section>
    )
}

export default Projects