'use client';

import { FC } from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '../chart';
import { ChartData } from '@/app/types/Chart';

type Props = {
  chartConfig: ChartConfig
  chartData: ChartData[]
  height?: number
}

const ChartRadarDots: FC<Props> = ({ chartConfig, chartData, height = 250 }) => {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square"
      style={
        {
          height: height,
          maxHeight: height
        }
      }
    >
      <RadarChart data={chartData}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
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
          fill="var(--color-desktop)"
          fillOpacity={0.6}
          dot={{
                r: 4,
                fillOpacity: 1,
              }}
        />
      </RadarChart>
    </ChartContainer>
  );
};

export default ChartRadarDots;
