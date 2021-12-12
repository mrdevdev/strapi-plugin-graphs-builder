/**
 *
 * GraphCard
 *
 */

import React from 'react';
import PieChart from './PieChart';
import BarChart from './BarChart';
import LineChart from './LineChart';
import DateLineChart from './DateLineChart';

import { Box } from '@strapi/design-system/Box';
import { Card } from '@strapi/design-system/Card';

const GraphCard = ({ title, graphType, data }) => (
  <Card width="350" style={{ margin: 8 }}>
    <Box style={{ padding: '24px 0 16px 0', paddingRight: graphType === 'pie' ? '0' : '32px' }}>
      {graphType === 'dateLine' && <DateLineChart {...{ title, data }} />}
      {graphType === 'line' && <LineChart {...{ title, data }} />}
      {graphType === 'pie' && <PieChart {...{ title, data }} />}
      {graphType === 'bar' && <BarChart {...{ title, data }} />}
    </Box>
  </Card>
);

export default GraphCard;
