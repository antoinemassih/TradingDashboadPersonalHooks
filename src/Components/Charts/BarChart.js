import {useD3} from "../../hooks/useD3";

import React from 'react';
import * as d3 from 'd3';

function MyBarChart({ data ,xvalue,yvalue}) {

    const ref = useD3(
        (svg) => {
            const height = 500;
            const width = 1500;
            const margin = { top: 20, right: 30, bottom: 30, left: 40 };

            const x = d3
                .scaleBand()
                .domain(data.map((d) => d[xvalue]))
                .rangeRound([margin.left, width - margin.right])
                .padding(0.1);

            const y1 = d3
                .scaleLinear()
                .domain([d3.min(data, (d) => d[yvalue]), d3.max(data, (d) => d[yvalue])])
                .rangeRound([height - margin.bottom, margin.top]);

            const xAxis = (g) =>
                g.attr("transform", `translate(0,${height - margin.bottom})`).style("color", "steelblue")
                    .call(
                    d3
                        .axisBottom(x)
                        .tickValues(
                            d3
                                .ticks(...d3.extent(x.domain()), width / 40)
                                .filter((v) => x(v) !== undefined)
                        )
                        .tickSizeOuter(0)
                );

            const y1Axis = (g) =>
                g
                    .attr("transform", `translate(${margin.left},0)`)
                    .style("color", "steelblue")
                    .call(d3.axisLeft(y1).ticks(null, "s"))
                    .call((g) => g.select(".domain").remove())
                    .call((g) =>
                        g
                            .append("text")
                            .attr("x", -margin.left)
                            .attr("y", 10)
                            .attr("fill", "currentColor")
                            .attr("text-anchor", "start")
                            .text(data.y1)
                    );

            svg.select(".x-axis").call(xAxis);
            svg.select(".y-axis").call(y1Axis);

            svg
                .select(".plot-area")
                .selectAll(".bar")
                .data(data)
                .join("rect").attr("fill",(d)=>{ if (d[yvalue]>0){return "steelblue"}else{return "red"}})
                .attr("class", "bar")
                .attr("x", (d) => x(d[xvalue]))
                .attr("width", x.bandwidth())
                .attr("y", (d) => y1(Math.max(0,d[yvalue])))
                .attr("height", (d) => { if(d[yvalue]<0){
                    return (Math.abs( y1(d[yvalue]))-y1(0))
                }else{
                    return (y1(0) - y1(d[yvalue]))
                }
                });
        },
        [data.length]
    );

    return (
        <svg
            ref={ref}
            style={{
                height: 500,
                width: 1500,
                marginRight: "0px",
                marginLeft: "0px",
            }}
        >
            <g className="plot-area" />
            <g className="x-axis" />
            <g className="y-axis" />
        </svg>
    );
}

export default MyBarChart;