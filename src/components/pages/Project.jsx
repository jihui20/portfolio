import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommonStyle from '../../assets/style/CommonStyle';
import Soonsoo from './project/Soonsoo';
import Tab from './project/Tab';
import Yanadoo from './project/Yanadoo';

export default function Project() {
  const { company } = useParams();
  const [activeTab, setActiveTab] = useState('yanadoo');

  const handleActiveTab = (activeTab) => {
    setActiveTab(activeTab);
  };

  // useEffect(() => {
  //   setActiveTab(company);
  // }, [company]);

  return (
    <CommonStyle.Section bgColor="#fff">
      <CommonStyle.H3>프로젝트</CommonStyle.H3>
      <Tab activeTab={activeTab} handleActiveTab={handleActiveTab} />
      {activeTab === 'yanadoo' ? <Yanadoo /> : <Soonsoo />}
    </CommonStyle.Section>
  );
}
