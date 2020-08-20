import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { IsLoggedContext } from '../../state/IsLogged';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogged } = useContext(IsLoggedContext);

  return (
    <Route
      {...rest}
      render={props =>
        isLogged ? <Component {...props} /> : <Redirect to="/register" />
      }
    />
  );
};

export default PrivateRoute;
