import { connect } from 'react-redux';
import ResultPageComponent from '../../components/ResultPageComponent';

export default connect(
  (state) => ({
    data: state.getIn(['github', 'data'])
  }),
  (dispatch) => ({})
)(ResultPageComponent);
