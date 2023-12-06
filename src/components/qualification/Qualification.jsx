import React, {useState} from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className='qualification section' id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification-icon"></i>
                    Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification-icon"></i>
                     Certifications
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState===1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BCA</h3>
                            <span className="qualification__subtitle">Bareilly College</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">12th</h3>
                            <span className="qualification__subtitle">DPS, Bareilly</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2020
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">10th</h3>
                            <span className="qualification__subtitle">DPS, Bareilly</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>

                <div className={toggleState===2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                
                
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Dev Bootcamp 2023</h3>
                            <span className="qualification__subtitle">Udemy</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> OCT 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">AI for Everyone</h3>
                            <span className="qualification__subtitle">Coursera - DeepLearning.AI</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> SEPT 2023
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">JAVA (Basic) Skill</h3>
                            <span className="qualification__subtitle">HackerRank</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> SEPT 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">AppDev Cohort 1.0</h3>
                            <span className="qualification__subtitle">Reskill</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> JULY 2023
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">CSS & SQL Skill</h3>
                            <span className="qualification__subtitle">HackerRank</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> JULY 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">HTML & CSS Bootcamp 2023</h3>
                            <span className="qualification__subtitle">Udemy</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> JUNE 2023
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification