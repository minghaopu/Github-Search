import React from 'react';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const GithubBox = (props) => (
  <div>
    <Card>
      <CardHeader title={props.data.get('name')} subtitle={props.userId} avatar={props.data.get('avatar_url')} />
      <CardText>
        Following: {props.data.get('follewers')}
      </CardText>
      <CardText>
        Following: {props.data.get('Following')}
      </CardText>
      <CardAction>
        <Link to="/">
          <RaisedButton label="Back" icon={<ActionHome />} secondary={true} />
        </Link>
      </CardAction>
    </Card>
  </div>
);

export default GithubBox;
