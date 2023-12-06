import React from 'react'

const Framework = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Framework & Misc.</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                {/* <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">C</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Framework