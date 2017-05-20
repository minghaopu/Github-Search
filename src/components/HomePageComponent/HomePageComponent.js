import React from 'react';
import {Link} from "react-router";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconButton from 'matetial-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const HomePage = ({
  userId,
  onSubmitted,
  onChangeUserId,
}) => (
  <div>
    <TextField hintText="Please enter your Github user id." onchange={onChangeUserId} />
    <Link to={{
      pathname: '/result',
      query: { userId: userId }
    }}>
      <RaisedButton label="Submit" onClick={onSubmitUserId(userId)} primary />
    </Link>
  </div>
)