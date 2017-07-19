import { connect } from 'react-redux'
import { toggleRun } from '../actions'
import RunList from '../components/RunList'

const mapStateToProps = state => {
  return {
    runs: state.runs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRunClick: id => {
      dispatch(toggleRun(id))
    }
  }
}

const VisibleRunList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RunList)

export default VisibleRunList
