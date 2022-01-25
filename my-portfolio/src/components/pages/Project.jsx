import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommonStyle from '../../assets/style/CommonStyle';
import Soonsoo from './project/Soonsoo';
import Tab from './project/Tab';
import Yanadoo from './project/Yanadoo';

export default function Project() {
  const { company } = useParams();
  const [activeTab, setActiveTab] = useState(company);

  useEffect(() => {
    setActiveTab(company);
  }, [company]);

  return (
    <CommonStyle.Section bgColor="#d2d8d9">
      <CommonStyle.H3>프로젝트</CommonStyle.H3>
      <Tab activeTab={activeTab} />
      {activeTab === 'soonsoo' ? <Soonsoo /> : <Yanadoo />}
    </CommonStyle.Section>
  );
}
