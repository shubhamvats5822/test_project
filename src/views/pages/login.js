// import external modules
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Row, Col, Card, CardBody, CardFooter } from 'reactstrap';
import { loginApi } from '../../redux/actions/apiAction/authentication/authAction';
import { connect } from 'react-redux';
import LoginForm from '../../components/login/loginForm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   *
   * @returns
   * formik form is being used for login
   */
  render() {
    return (
      <div className='form-page'>
        <div className='container'>
          <Row className='full-height-vh'>
            <Col
              xs='12'
              className='d-flex align-items-center justify-content-center'
            >
              <Card className='text-left width-400'>
                <CardBody>
                  <h3 className='text--center'>Login</h3>
                  <LoginForm></LoginForm>
                </CardBody>
                <CardFooter>
                  <div className='text-center'>
                    <NavLink to='/forgotPassword'>Forgot Password?</NavLink>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // const {  } = state.login;
  return {};
};
export default connect(mapStateToProps, { loginApi })(Login);
