'use client';

import { FC } from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../chart';
import { DualChartData } from '@/app/types/Chart';

type Props = {
  chartConfig: ChartConfig
  chartData: DualChartData[]
}

const DualRadarChart: FC<Props> = ({ chartConfig, chartData }) => {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <RadarChart
        data={chartData}
        margin={{
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            }}
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <PolarAngleAxis
          dataKey="month"
          tick={({ x, y, textAnchor, index, ...props }) => {
            const data = chartData[index];

            return (
              <text
                x={x}
                y={y + 4}
                textAnchor={textAnchor}
                fontSize={12}
                fontWeight={400}
                className="fill-primary"
                {...props}
              >
                <tspan>{data.month}</tspan>
              </text>
            );
          }}
        />

        <PolarGrid />
        <Radar
          dataKey="desktop"
          stroke="var(--color-desktop)"
          fill="var(--color-desktop)"
          fillOpacity={0.6}
          dot={{
            r: 4,
            fillOpacity: 1,
            stroke: 'var(--color-desktop)',
            fill: 'var(--color-desktop)',
          }}
        />
        <Radar
          dataKey="mobile"
          stroke="var(--color-mobile)"
          fill="var(--color-mobile)"
          fillOpacity={0.3}
          dot={{
            r: 3,
            fillOpacity: 1,
            stroke: 'var(--color-mobile)',
            fill: 'var(--color-mobile)',
          }}
        />
      </RadarChart>
    </ChartContainer>
  );
};

export default DualRadarChart;
