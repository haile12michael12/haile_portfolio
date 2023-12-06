import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box about__icon">
            <i className="bx bx-award"></i>
            <h3 className="about__title">Education</h3>
            <span className="about__subtitle">BCA 3rd Year</span>
        </div>

        <div className="about__box about__icon">
            <i className="bx bx-briefcase-alt"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">4+ Projects</span>
        </div>

        {/* <div className="about__box about__icon">
            <i className="bx bx-support"></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div> */}
    </div>
  )
}

export default Info