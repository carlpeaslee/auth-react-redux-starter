import React, { PropTypes} from 'react'
import {connect} from 'react-redux'
// import {Button} from 'react-bootstrap'
import AuthService from '../../../utils/AuthService'
import LoginButton from '../../../components/LoginButton'
import LogoutButton from '../../../components/LogoutButton'
import {reduxLogout} from '../../../actions/auth'


export class Home extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    auth: PropTypes.instanceOf(AuthService)
  }

  render(){

    const authButton = () => {
      if (!this.props.token) {
        return (
          <LoginButton
            auth={this.props.auth}
          />
        )
      } else {
        return (
          <LogoutButton
            auth={this.props.auth}
          />
        )
      }
    }
    return (
      <div>
        <h2>Home</h2>
        <p>Welcome {this.props.profile.name ? 'logged in' : "logged out"}!</p>
        {authButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.auth.profile,
    token: state.auth.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchReduxLogout: () => {
      dispatch(reduxLogout())
    },
  }
}

Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default Home
