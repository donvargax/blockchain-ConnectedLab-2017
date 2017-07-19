import React from 'react';
// import ReactDOM from 'react-dom';
// import * as RJD from "react-js-diagrams/dist/main";
import * as SRD from "storm-react-diagrams/dist/main";
// import '../test.scss';

import ReactDom from 'react-dom';
import Popup from 'react-popup';


/**
 *
 * Simple test showing the Object oriented way of using this library.
 * It creates 2 nodes and links them together with a single link
 *
 */
class Step {
  green = 'rgb(124, 252, 0)';
  blue = 'rgb(0, 192, 255)';
  grey = 'rgb(128, 128, 128)';

  constructor(node, portInput, portOutput) {
    this.node = node;
    this.portInput = portInput;
    this.portOutput = portOutput;
    this.linkForwards = null;
    this.linkBackwards = null;
    this.titleElement = document.getElementsByClassName('title')
    this.status = null;
  }

  setInProgress() {
    if (this.linkBackwards) {
      this.linkBackwards.selected = true;
      this.linkBackwards.isActive = true;
    }
    this.node.color = this.blue;
    this.node.isInProgress = true;
  }

  setComplete() {
    if (this.linkBackwards) {
      this.linkBackwards.selected = false;
      this.linkBackwards.isActive = false;
    }
    this.node.color = this.green;
    this.node.isInProgress = false;
    this.node.isComplete = true;
  }
}

class Workflow2 extends React.Component {

  grey = 'rgb(128, 128, 128)';

  constructor(props) {
    super(props);

    console.log("Workflow2: Constructor()");

    // Setup the diagram engine
    this.engine = new SRD.DiagramEngine();
    this.engine.registerNodeFactory(new SRD.DefaultNodeFactory());
    this.engine.registerLinkFactory(new SRD.DefaultLinkFactory());

    // Setup the diagram model
    this.model = new SRD.DiagramModel();

    this.steps = [];

    this.isInitialized = false;

    Popup.registerPlugin('popover', function (content, target) {
      console.log("Creating popover");

      const Message = React.createClass({
        render () {
          return (
            <div>
              <div dangerouslySetInnerHTML={{__html: this.props.content}}/>
            </div>

          )
        }
      });

      this.create({
        content: <Message content={content}/>,
        className: 'popover',
        noOverlay: false,
        position: function (box) {
          let bodyRect = document.body.getBoundingClientRect();
          let btnRect = target.getBoundingClientRect();
          // let btnOffsetTop  = btnRect.top - bodyRect.top;
          let btnOffsetBottom = btnRect.bottom - bodyRect.top;
          let btnOffsetLeft = btnRect.left - bodyRect.left;
          let scroll = document.documentElement.scrollTop || document.body.scrollTop;

          box.style.top = (btnOffsetBottom + 10) - scroll + 'px';
          box.style.left = (btnOffsetLeft + (target.offsetWidth / 2) - (box.offsetWidth / 2)) + 'px';
          box.style.top = 500;
          box.style.left = 500;
          box.style.margin = 0;
          box.style.opacity = 1;
          console.log("Finishing up positioning");
        }
      });
    });


  }

  createNode(options) {
    const {name, color, x, y} = options;
    var node = new SRD.DefaultNodeModel(name, color);
    // node.setLocked();
    node.x = x;
    node.y = y;
    node.addListener({
      selectionChanged: (node, isSelected) => {
        if (isSelected) {
          this.displayDetailedInformation(node);
        }
      }
    });
    return node;
  }

  displayDetailedInformation(node) {
    console.log("Node clicked");
    let message = "<h3>";
    console.log(node.isInProgress);
    if (node.isInProgress) {
      message += "Status: In progress"
    }
    message += "<h2>Tx: blah blah blah<br>" +
      "Date: blah blah<br>" +
      "Owner: blah blah<br>";

    message += "</h2>";
    Popup.plugins().popover(message, document.getElementById('foo'));
  }

  createPort(node, options) {
    const {isInput, id, name} = options;
    return node.addPort(new SRD.DefaultPortModel(isInput, id, name));
  }

  linkNodes(port1, port2) {
    const link = new SRD.LinkModel();
    link.addListener({
      selectionChanged: (node, isSelected) => {
        node.selected = node.isActive;
      }
    });
    link.setSourcePort(port1);
    link.setTargetPort(port2);
    return link;
  }

  linkSteps(step1, step2) {
    const link = this.linkNodes(step1.portOutput, step2.portInput);
    link.setLocked(true);
    this.model.addLink(link);

    step1.linkForwards = link;
    step2.linkBackwards = link;

    return link;
  }

  createStep(name, x, y) {
    const node = this.createNode({
      name: name,
      color: this.grey,
      x: x,
      y: y
    });
    const portInput = this.createPort(node, {
      isInput: true,
      id: name + '-i',
      name: ' '
    });
    const portOutput = this.createPort(node, {
      isInput: false,
      id: name + '-o',
      name: ' '
    });
    this.model.addNode(node);

    const step = new Step(node, portInput, portOutput);
    this.steps.push(step);
    return step;
  }

  render() {
    const {engine, model} = this;

    // this.engine.clearRepaintEntities();

    // this.engine = new SRD.DiagramEngine();
    // this.engine.registerNodeFactory(new SRD.DefaultNodeFactory());
    // this.engine.registerLinkFactory(new SRD.DefaultLinkFactory());
    // this.model = new SRD.DiagramModel();

    const step1 = this.createStep("Instrument", 100, 100);
    const step2 = this.createStep("Upload File", 300, 100);
    const step3 = this.createStep("Analyze Results", 500, 100);
    const step4 = this.createStep("Generate Report", 700, 100);
    const step5 = this.createStep("Email Report", 900, 100);

    this.linkSteps(step1, step2);
    this.linkSteps(step2, step3);
    this.linkSteps(step3, step4);
    this.linkSteps(step4, step5);

    step1.setComplete();
    step2.setInProgress();
    // this.next();

    // model.setLocked(true);
    // engine.setLocked(true);

    engine.setDiagramModel(model);

    // Render the canvas
    return (
      <div id="foo">
        <Popup
          className="mm-popup"
          btnClass="mm-popup__btn"
          closeBtn={false}
          closeHtml={""}
          defaultOk="Ok"
          defaultCancel="Cancel"
          wildClasses={false}
          closeOnOutsideClick={true}/>
        <SRD.DiagramWidget diagramEngine={engine} allowCanvasZoom={false} allowCanvasTranslation={false}/>
      </div>
    )
  }

  // next() {
  //   for (let i=0; i<this.steps.length; i++) {
  //     console.log("Checking step ", i);
  //     const step = this.steps[i];
  //     if (step.node.isInProgress) {
  //       console.log("Found active step, completing and starting next");
  //       step.setComplete();
  //       if (i+1 < this.steps.length) {
  //         this.steps[i+1].setInProgress();
  //       }
  //       break;
  //     } else if (step.node.isComplete) {
  //       // keep searching for the latest step
  //       console.log("Found completed step");
  //     } else {
  //       // not started, start this node
  //       console.log("Found latest step, setting in progress");
  //       step.setInProgress();
  //       console.log(step.node);
  //       break;
  //     }
  //   }
  // }
}

export default Workflow2;
