import React from 'react';
import { useSelector } from 'react-redux';
import './SkillsBlock.scss';

let text;

function SkillsBlock() {
  text = useSelector((state) => state.user.siteText.skillsBlock);

  return (
    <div className="skills-block">
      <p className="skills-block__title">{text.skills_title}</p>
      <div className="skills-block__content-container">
        <div className="skills-block__content skills-block__content__first">
          <img
            className="skills-block__image"
            src="/images/arrow.png"
            width="40"
            height="35"
            alt="arrow"
          />
          <p className="skills-block__text">{text.first_skill}</p>
        </div>
        <div className="skills-block__content skills-block__content__second">
          <img
            className="skills-block__image"
            src="/images/arrow.png"
            width="40"
            height="35"
            alt="arrow"
          />
          <p className="skills-block__text">{text.second_skill}</p>
        </div>
        <div className="skills-block__content skills-block__content__third">
          <img
            className="skills-block__image"
            src="/images/arrow.png"
            width="40"
            height="35"
            alt="arrow"
          />
          <p className="skills-block__text">{text.third_skill}</p>
        </div>
        <div className="skills-block__content skills-block__content__fourth">
          <img
            className="skills-block__image"
            src="/images/arrow.png"
            width="40"
            height="35"
            alt="arrow"
          />
          <p className="skills-block__text">{text.fourth_skill}</p>
        </div>
        <div className="skills-block__content skills-block__content__fifth">
          <img
            className="skills-block__image"
            src="/images/arrow.png"
            width="40"
            height="35"
            alt="arrow"
          />
          <p className="skills-block__text">{text.fifth_skill}</p>
        </div>
      </div>
    </div>
  );
}

export default SkillsBlock;
