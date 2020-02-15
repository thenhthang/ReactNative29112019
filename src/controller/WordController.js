import {connect} from 'react-redux'
import Word from '../components/Word'
import { removeWord,toggleMemorized } from '../redux/action/actionCreator'

const mapStateToProps = state =>{
  return{words: state.words,optionSelected: state.optionSelected}
}
const mapDispatchToProps = dispatch =>{
  return {
    toggleWord: id => dispatch(toggleMemorized(id)),
    removeWord: id => dispatch(removeWord(id))
  }
}
const WordController =  connect(mapStateToProps,mapDispatchToProps)(Word)
export default WordController
