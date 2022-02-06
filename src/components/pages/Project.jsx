import { useState } from 'react';

import Soonsoo from './project/Soonsoo';
import Tab from './project/Tab';
import Yanadoo from './project/Yanadoo';

import CommonStyle from '../../assets/style/CommonStyle';

export default function Project() {
  const [activeTab, setActiveTab] = useState('yanadoo');

  const handleActiveTab = (activeTab) => {
    setActiveTab(activeTab);
  };

  return (
    <CommonStyle.Section bgColor="#fff">
      <CommonStyle.H3>프로젝트</CommonStyle.H3>
      <Tab activeTab={activeTab} handleActiveTab={handleActiveTab} />
      {activeTab === 'yanadoo' ? <Yanadoo /> : <Soonsoo />}
    </CommonStyle.Section>
  );
}
