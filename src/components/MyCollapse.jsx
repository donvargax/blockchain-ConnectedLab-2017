import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Collapse} from "react-collapse"
import {PlusButton, CloseButton} from 'react-svg-buttons';

class MyCollapse extends Component {
  static propTypes = {
    isOpened: PropTypes.bool,
    title: PropTypes.string,
  };


  static defaultProps = {
    isOpened: false,
    title: '',
  };

  constructor(props) {
    super(props)
    console.log("PROPS", props)
    this.state = {
      isOpened: this.props.isOpened,
      title: this.props.title,
    }
  }

  openCollapse = (e) => {
    let {isOpened} = this.state
    this.setState({
      isOpened: !isOpened
    })
  }

  render() {
    let {isOpened, title} = this.state
    console.log("TITLE", title, isOpened, this.props)
    let button = null

    if (isOpened) {
      button = <CloseButton onClick={this.openCollapse}/>
    } else {
      button = <PlusButton onClick={this.openCollapse}/>
    }

    return (
      <div>
        {button}
        {title}
        <Collapse isOpened={isOpened}>
          {this.props.children}
        </Collapse>
      </div>
    )
  }
}

export default MyCollapse
