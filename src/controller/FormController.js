import {connect} from 'react-redux'
import Form from '../components/Form'
import { addWord,toggleForm } from '../redux/action/actionCreator'

const mapStateToProps = state => {
  return {shouldShowForm: state.shouldShowForm};
};
const mapDispatchToProps = dispatch =>{
  return {
    toggleForm: () => dispatch(toggleForm()),
    addWord: newWord => dispatch(addWord(newWord))
  }
}
const FormController =  connect (mapStateToProps,mapDispatchToProps)(Form)
export default FormController