import React from 'react';
import GeneralInfo from './HomeBlocks/GeneralInfo/GeneralInfo';
import RequestBlock from './HomeBlocks/RequestBlock/RequestBlock';
import PracticeAreas from './HomeBlocks/PracticeAreas/PracticeAreas';
import SkillsBlock from './HomeBlocks/SkillsBlock/SkillsBlock';
import InfoBlock from './HomeBlocks/InfoBlock/InfoBlock';
import MainBlock from './HomeBlocks/MainBlock/MainBlock';

function Home() {
  return (
    <div>
      <MainBlock />
      <InfoBlock />
      <PracticeAreas />
      <SkillsBlock />
      <GeneralInfo />
      <RequestBlock />
    </div>
  );
}

export default Home;
