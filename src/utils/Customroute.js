import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from '../constants/api-constants';

function Customroute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          localStorage.getItem(ACCESS_TOKEN_NAME) ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/Login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

export default Customroute;