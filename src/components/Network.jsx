/**
 * Created by gardend on 7/18/17.
 */

import React from 'react';
import {InteractiveForceGraph, ForceGraphNode, ForceGraphLink} from 'react-vis-force';
import * as d3 from "d3";

class Network extends React.Component {

  // constructor(props) {
  //   super(props);
  //
  //
  //   const svg = d3.select("svg"),
  //     width = +svg.attr("width"),
  //     height = +svg.attr("height");
  //
  //   const color = d3.scaleOrdinal(d3.schemeCategory20);
  //
  //   this.simulation = d3.forceSimulation()
  //     .force("link", d3.forceLink().id(function (d) {
  //       return d.id;
  //     }))
  //     .force("charge", d3.forceManyBody())
  //     .force("center", d3.forceCenter(width / 2, height / 2));
  //
  //   d3.json("miserables.json", function (error, graph) {
  //     if (error) throw error;
  //
  //     const link = svg.append("g")
  //       .attr("class", "links")
  //       .selectAll("line")
  //       .data(graph.links)
  //       .enter().append("line")
  //       .attr("stroke-width", function (d) {
  //         return Math.sqrt(d.value);
  //       });
  //
  //     const node = svg.append("g")
  //       .attr("class", "nodes")
  //       .selectAll("circle")
  //       .data(graph.nodes)
  //       .enter().append("circle")
  //       .attr("r", 5)
  //       .attr("fill", function (d) {
  //         return color(d.group);
  //       })
  //       .call(d3.drag()
  //         .on("start", this.dragstarted)
  //         .on("drag", this.dragged)
  //         .on("end", this.dragended));
  //
  //     node.append("title")
  //       .text(function (d) {
  //         return d.id;
  //       });
  //
  //     this.simulation
  //       .nodes(graph.nodes)
  //       .on("tick", ticked);
  //
  //     this.simulation.force("link")
  //       .links(graph.links);
  //
  //     function ticked() {
  //       link
  //         .attr("x1", function (d) {
  //           return d.source.x;
  //         })
  //         .attr("y1", function (d) {
  //           return d.source.y;
  //         })
  //         .attr("x2", function (d) {
  //           return d.target.x;
  //         })
  //         .attr("y2", function (d) {
  //           return d.target.y;
  //         });
  //
  //       node
  //         .attr("cx", function (d) {
  //           return d.x;
  //         })
  //         .attr("cy", function (d) {
  //           return d.y;
  //         });
  //     }
  //   });
  //
  // }
  //
  // dragstarted(d) {
  //   if (!d3.event.active) this.simulation.alphaTarget(0.3).restart();
  //   d.fx = d.x;
  //   d.fy = d.y;
  // }
  //
  // dragged(d) {
  //   d.fx = d3.event.x;
  //   d.fy = d3.event.y;
  // }
  //
  // dragended(d) {
  //   if (!d3.event.active) this.simulation.alphaTarget(0);
  //   d.fx = null;
  //   d.fy = null;
  // }
  //
  // render() {
  //   return (
  //     "hello"
  //   )
  // }

  addNode() {
    console.log("Adding node")
  }

  render() {
    return (
      <div>
        <InteractiveForceGraph
          simulationOptions={{height: 300, width: 1000}}
          labelAttr="label"
          onSelectNode={(node) => console.log(node)}
          show
          highlightDependencies>
          <ForceGraphNode node={{id: 'first-node', label: 'Instrument 1', radius: 30}} fill="red"/>
          <ForceGraphNode node={{id: 'second-node', label: 'Instrument 2', radius: 30}} fill="blue"/>
          <ForceGraphNode node={{id: 'third-node', label: 'Analysis Application', radius: 30}} fill="green"/>
          <ForceGraphLink link={{source: 'first-node', target: 'third-node'}}/>
          <ForceGraphLink link={{source: 'second-node', target: 'third-node'}}/>

        </InteractiveForceGraph>
        {/*<input type="button" onClick={this.addNode} value="Add Node"/>*/}
      </div>
    )
  }

}

export default Network;