import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const StatisticsPage = () => {
  const chartRef = useRef(null);
  const temperatureData = [13, 9, 12];
  useEffect(() => {
    d3.select(chartRef.current)
      .selectAll('h2')
      .data(temperatureData)
      .enter()
      .append('h2')
      .text((d) => d);
  }, []);

  return (
    <>
      <div className="div" ref={chartRef}>
        Chart
      </div>
    </>
  );
};

export default StatisticsPage;
