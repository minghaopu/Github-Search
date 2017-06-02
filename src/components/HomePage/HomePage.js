import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const HomePage = ({
  userId,
  onSubmitUserId,
  onChangeUserId,
}) => (
  <div>
    <TextField
      hintText="Please Key in your Github User Id."
      onChange={onChangeUserId} 
    />
    <Link 
      to={{
        pathname: '/result',
        query: { userId },
      }}
    >
      <RaisedButton label="Submit" onClick={onSubmitUserId(userId)} primary />
    </Link>
  </div>
);

HomePage.propTypes = {
  onSubmitUserId: PropTypes.func,
  onChangeUserId: PropTypes.func,
  userId: PropTypes.string,
};

export default HomePage;
