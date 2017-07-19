/**
 * Created by gardend on 7/18/17.
 */
import React, {Component} from 'react'

import WorkflowStep from "./workflow-step.component";

// class Workflow extends Component {
//
//   constructor(props) {
//     super(props);
//
//     this.name = props.name;
//
//     console.log("Workflow: Constructor()");
//   }
//
//   render() {
//     return (
//       <div>
//         Workflow {this.name}
//         <WorkflowStep name="Upload"/>
//         <WorkflowStep name="Analysis"/>
//         <WorkflowStep name="Report"/>
//         <WorkflowStep name="Email"/>
//       </div>
//     );
//   }
// }

import * as SRD from "storm-react-diagrams/dist/main";
import * as RJD from "react-js-diagrams/dist/main";

class Workflow extends Component {

  constructor(props) {
    super(props);

    console.log("Workflow: Constructor()");

    this.name = props.name;

    //1) setup the diagram engine
    var engine = new SRD.DiagramEngine();
    engine.registerNodeFactory(new SRD.DefaultNodeFactory());
    engine.registerLinkFactory(new SRD.DefaultLinkFactory());

    var model = new SRD.DiagramModel();

    var node1 = new SRD.DefaultNodeModel("Node 1", "rgb(0,192,255)");
    var port1 = node1.addPort(new SRD.DefaultPortModel(false, "out-1", "Out"));
    node1.x = 100;
    node1.y = 100;

    var node2 = new SRD.DefaultNodeModel("Node 2", "rgb(192,255,0)");
    var port2 = node2.addPort(new SRD.DefaultPortModel(true, "in-1", "IN"));
    node2.x = 400;
    node2.y = 100;

    var link1 = new SRD.LinkModel();
    link1.setSourcePort(port1);
    link1.setTargetPort(port2);

    model.addNode(node1);
    model.addNode(node2);
    model.addLink(link1);

    engine.setDiagramModel(model);

    //!========================================= <<<<<<<

    model.setLocked(true);
    // var props = {
    //     diagramEngine: engine,
    //     allowLooseLinks: false,
    //     allowCanvasTranslation: false,
    //     allowCanvasZoom: false
    //   } as SRD.DiagramProps;

    //!=========================================  <<<<<<<

    // this.diagram = React.createElement(SRD.DiagramWidget);
    this.diagramEngine = engine;
    // console.log(this.diagram);

    // ReactDOM.render(React.createElement(SRD.DiagramWidget), document.body);
  }

  onChange() {

  }

  render() {
    // ReactDOM.render(this.diagram, document.getElementById('wf'));
    return (
      <div>
        Foo
        <RJD.DiagramWidget diagramEngine={this.diagramEngine} onChange={this.onChange.bind(this)}/>
      </div>
    )
  }
}

export default Workflow