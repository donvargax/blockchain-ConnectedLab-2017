/**
 * Created by gardend on 7/18/17.
 */
import React, {Component} from 'react'

class WorkflowStep extends Component {

  constructor(props) {
    super(props);
    console.log("WorkflowStep: Constructor()");

    this.name = props.name;
    this.state = {displayDetails: false};

    this.onStepClicked = this.onStepClicked.bind(this);
  }

  onStepClicked() {
    console.log("Clicked");
    this.setState(prevState => ({
      displayDetails: !prevState.displayDetails
    }));
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.onStepClicked}>
          Step {this.name}
        </button>
        <div className={this.state.displayDetails ? '' : 'hidden'}>
          Details!
        </div>
      </div>
    );
  }
}

export default WorkflowStep