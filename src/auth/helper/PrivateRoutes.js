import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {isAutenticated} from './index' 

function PrivateRoute({component:Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAutenticated() ? (
            <Component {...props} ></Component>
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;