import React from 'react';
import CommonStyle from '../../assets/style/CommonStyle';
import Tab from './project/Tab';

export default function Project() {
  const [activeTab, setActiveTab] = useState('SOONSOO');

  const handleClickTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <CommonStyle.Section>
      <CommonStyle.H3>프로젝트</CommonStyle.H3>
      <Tab handleClickTab={handleClickTab} />
    </CommonStyle.Section>
  );
}
