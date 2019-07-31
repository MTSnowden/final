import { connect } from 'react-redux'
import Signup from '../components/Signup'
import { signUp } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user))
  }
}

export default connect(null, mapDispatchToProps)(Signup)