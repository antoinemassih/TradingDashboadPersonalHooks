import {useD3} from "../../hooks/useD3";

import React from 'react';
import * as d3 from 'd3';

function PieChart({ data }) {

    const ref = useD3(
        (svg) => {

            const outerRadius = 300;
            const innerRadius = 50;

            const margin = {
                top: 50, right: 50, bottom: 50, left: 50,
            };
            const width = 2 * outerRadius + margin.left + margin.right;
            const height = 2 * outerRadius + margin.top + margin.bottom;


            const colorScale = d3
                .scaleSequential()
                .interpolator(d3.interpolateCool)
                .domain([0, data.length]);

            svg.attr('width', width)
                .attr('height', height)
                .append('g')
                .attr('transform', `translate(${width / 2}, ${height / 2})`);

            const arcGenerator = d3
                .arc()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius);
            const pieGenerator = d3
                .pie()
                .padAngle(0)
                .value((d) => d.value);
            const arc = svg.select('g')
                .selectAll()
                .data(pieGenerator(data))
                .enter();

            // Append sectors
            arc
                .append('path')
                .attr('d', arcGenerator)
                .style('fill', (_, i) => colorScale(i))
                .style('stroke', '#ffffff')
                .style('stroke-width', 0);
// Append text labels
            arc
                .append('text')
                .attr('text-anchor', 'middle')
                .attr('alignment-baseline', 'middle')
                .text((d) => d.data.label)
                .style('fill', '#ffffff')
                    .attr('transform', (d) => {
                        const [x, y] = arcGenerator.centroid(d);
                        return `translate(${x}, ${y})`;
                    });

        },
        [data.length]
    );

    return (
        <svg
            ref={ref}
            style={{

                marginRight: "100px",
                marginLeft: "100px",
            }}
        >


        </svg>
    );
}

export default PieChart;