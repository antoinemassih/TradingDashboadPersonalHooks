// BarChart.js
import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

function BarChart({ width, height, data }){
    const ref = useRef();

    useEffect(() => {
        const margin = {'top': 20,'right':20,'bottom':100,'left':100};
        const graphWidth = width - margin.left - margin.right;
        const graphHeight = height - margin.top - margin.bottom;

        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform","translate(20,20)")
            .style("border", "1px solid black")
            .style("margin-left",100)
    }, []);

    useEffect(() => {
        draw();
    }, [data]);

    const draw = () => {

        const svg = d3.select(ref.current);

        var yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, height-100]);



        var selection = svg.selectAll("rect").data(data);


        svg
            .append("g")
            .call(d3.axisLeft(yScale)).attr("transform", "translate(20, 10)") ;

        var xScale = d3.scaleBand().range ([0, width]).domain([0,1,2,3,4]);

        svg
            .append("g")
            .call(d3.axisBottom(xScale)).attr("transform", "translate(20, 10)");

        selection
            .transition().duration(200)
            .attr("height", (d) => yScale(d))
            .attr("y", (d) => height - yScale(d))

        selection
            .enter()
            .append("rect").attr("transform", "translate(20, 20)")
            .attr("x", (d, i) => i * 45)
            .attr("y", (d) => height)
            .attr("width", 40)
            .attr("height", 0)
            .attr("fill", "orange")
            .transition().duration(200)
            .attr("height", (d) => yScale(d))
            .attr("y", (d) => height - yScale(d))

        selection
            .exit()
            .transition().duration(200)
            .attr("y", (d) => height)
            .attr("height", 0)
            .remove()
    }


    return (
        <div className="chart">
            <svg ref={ref}>
            </svg>
        </div>

    )

}

export default BarChart;