import React, {Component} from 'react';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
`

export default class LoginPage extends Component {
  state: {
    errors: {}
  }

  validateField = (field) => () => {

  }

  render() {
    const { } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="">
            Username
            <input
              text="username" 
              autoComplete="username" 
              autoFocus />
          </label>
          <label htmlFor="password">Password</label>
          <input name="password" test="password" autoComplete="password" />
        </form>
      </div>
    )
  }
}