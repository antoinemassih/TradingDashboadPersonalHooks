import {useD3} from "../../hooks/useD3";

import React from 'react';
import * as d3 from 'd3';
import { sankey as d3Sankey, sankeyLinkHorizontal } from 'd3-sankey'


function SankeyChartWorking({ data}) {
    const ref = useD3(
        (svg) => {
    const margin = 10;
    const width = 840;
    const height = 500;
    const svgBackground = "white";
    const svgBorder = "1px solid black";
    const nodeWidth = 24;
    const nodePadding = 16;
    const nodeOpacity = 0.8;
    const linkOpacity = 0.5;
    const nodeDarkenFactor = 0.3;
    const nodeStrokeWidth = 4;
    const arrow = "\u2192";
    const colorScale = d3.interpolateRainbow;
    const path = sankeyLinkHorizontal();


    function addGradientStop(gradients, offset, fn) {
        return gradients.append("stop")
            .attr("offset", offset)
            .attr("stop-color", fn);
    }

    function color(index) {
        let ratio = index / (data.nodes.length - 1.0);
        return colorScale(ratio);
    }

    function darkenColor(color, factor) {
        return d3.color(color).darker(factor)
    }

    function getGradientId(d) {
        return `gradient_${d.source.id}_${d.target.id}`;
    }

     function reduceUnique(previous, current) {
                if (previous.indexOf(current) < 0) {
                    previous.push(current);
                }
                return previous;
            }
            function sumValues(previous, current) {
                previous += current;
                return previous;
            }


            svg
                .attr("width", width)
                .attr("height", height)
                .style("background-color", svgBackground)
                .style("border", svgBorder)
                .append("g")
                .attr("transform", `translate(${margin},${margin})`);

            const graphSize = [width - 2*margin, height - 2*margin];
            const sankey = d3Sankey()
                .size(graphSize)
                .nodeId(d => d.id)
                .nodeWidth(nodeWidth)
                .nodePadding(nodePadding);
            let graph = sankey(data);

            graph.nodes.forEach(node => {
                let fillColor = color(node.index);
                node.fillColor = fillColor;
                node.strokeColor = darkenColor(fillColor, nodeDarkenFactor);
                node.width = node.x1 - node.x0;
                node.height = node.y1 - node.y0;
            });

            // Build the links.
            let svgLinks = svg.append("g")
                .classed("links", true)
                .selectAll("g")
                .data(graph.links)
                .enter()
                .append("g");
            let gradients = svgLinks.append("linearGradient")
                .attr("gradientUnits", "userSpaceOnUse")
                .attr("x1", d => d.source.x1)
                .attr("x2", d => d.target.x0)
                .attr("id", d => getGradientId(d));
            addGradientStop(gradients, 0.0, d => color(d.source.index));
            addGradientStop(gradients, 1.0, d => color(d.target.index));
            svgLinks.append("path")
                .classed("link", true)
                .attr("d", path)
                .attr("fill", "none")
                .attr("stroke", d => `url(#${getGradientId(d)})`)
                .attr("stroke-width", d => Math.max(1.0, d.width))
                .attr("stroke-opacity", linkOpacity);

            // Add hover effect to links.
            svgLinks.append("title")
                .text(d => `${d.source.id} ${arrow} ${d.target.id}\n${d.value}`);

            let svgNodes = svg.append("g")
                .classed("nodes", true)
                .selectAll("rect")
                .data(graph.nodes)
                .enter()
                .append("rect")
                .classed("node", true)
                .attr("x", d => d.x0)
                .attr("y", d => d.y0)
                .attr("width", d => d.width)
                .attr("height", d => d.height)
                .attr("fill", d => d.fillColor)
                .attr("opacity", nodeOpacity)
                .attr("stroke", d => d.strokeColor)
                .attr("stroke-width", 0);

            svg.append("g")
                .attr("font-family", "sans-serif")
                .attr("font-size", 10)
                .selectAll("text")
                .data(graph.nodes)
                .join("text")
                .attr("x", d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)
                .attr("y", d => (d.y1 + d.y0) / 2)
                .attr("dy", "0.35em")
                .attr("text-anchor", d => d.x0 < width / 2 ? "start" : "end")
                .text(d => d.id);

            let nodeDepths = graph.nodes
                .map(n => n.depth)
                .reduce(reduceUnique, []);

            nodeDepths.forEach(d => {
                let nodesAtThisDepth = graph.nodes.filter(n => n.depth === d);
                let numberOfNodes = nodesAtThisDepth.length;
                let totalHeight = nodesAtThisDepth
                    .map(n => n.height)
                    .reduce(sumValues, 0);
                let whitespace = graphSize[1] - totalHeight;
                let balancedWhitespace = whitespace / (numberOfNodes + 1.0);
                console.log("depth", d, "total height", totalHeight, "whitespace", whitespace, "balanced whitespace", balancedWhitespace);
            });




        },[data.length]);

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

export default SankeyChartWorking;