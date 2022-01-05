import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const TabBox = styled.div`
  border: 1px solid orange;
`;

export default function Tab({}) {
  return (
    <TabBox>
      <ul>
        <li>
          <Link to="/project/soonsoo">순수교육</Link>
        </li>
        <li>
          <Link to="/project/yanadoo">야나두</Link>
        </li>
      </ul>
    </TabBox>
  );
}
