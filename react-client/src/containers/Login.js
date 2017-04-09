import { connect } from 'react-redux'
import { loginUser, logOutUser } from '../actions'
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state) => {
  return {
    isLoggedIn:  (state.login.loggedIn ? state.login.loggedIn : false) 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: () => {
      dispatch(loginUser())
    },
    onLogOutClick: () => {
      dispatch(logOutUser())
    }
  }
}

const Login = connect (
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default Login;