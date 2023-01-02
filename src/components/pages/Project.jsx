import { useState } from 'react';

import Wemakeprice from './project/Wemakeprice';
import Yanadoo from './project/Yanadoo';
import Soonsoo from './project/Soonsoo';
import Tab from './project/Tab';

import CommonStyle from '../../assets/style/CommonStyle';

const TAB = [
  {
    id: 1,
    name: 'Wemakeprice',
    component: <Wemakeprice key="Wemakeprice"/>
  },
  {
    id: 2,
    name: 'Yanadoo',
    component: <Yanadoo key="Yanadoo"/>
  },
  {
    id: 3,
    name: 'Soonsoo',
    component: <Soonsoo key="Soonsoo"/>
  }
]
export default function Project() {
  const [activeTab, setActiveTab] = useState('Wemakeprice');

  const handleActiveTab = (activeTab) => {
    setActiveTab(activeTab);
  };

  return (
    <CommonStyle.Section bgColor="#fff">
      <CommonStyle.H3>프로젝트</CommonStyle.H3>
      <Tab activeTab={activeTab} handleActiveTab={handleActiveTab} />
      {TAB
        .filter(tab => tab.name === activeTab)
        .map(item => {
          return item.component
        })
      }
    </CommonStyle.Section>
  );
}
