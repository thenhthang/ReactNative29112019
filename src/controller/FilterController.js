import { connect } from 'react-redux';
import {fillter} from '../redux/action/actionCreator'
import Filter from '../components/Filters';

const mapStateToProps = state =>{
  return {optionSelected:state.optionSelected}
}
const mapDispatchToProps = dispatch =>{
  return {
    filter : (text) => dispatch(fillter(text))
  }
}
const FilterController = connect(mapStateToProps,mapDispatchToProps)(Filter)

export default FilterController

