import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import AuthService from '../utils/AuthService'

export class LoginButton extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const auth = this.props.auth
    return (
        <ButtonToolbar>
        {/* <Button onClick={()=>console.log(auth.login)} /> */}
          <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login</Button>
        </ButtonToolbar>
    )
  }
}

export default LoginButton;
