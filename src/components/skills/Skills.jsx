import React from 'react';
import "./skills.css";
import Backend from './Backend';
import Frontend from './Frontend';
import Misc from './Misc';
import Framework from './Framework';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <Misc />
            <Framework />
        </div>
    </section>
  )
}

export default Skills