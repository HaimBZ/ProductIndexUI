import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import App from '../components/App';
import * as productActions from '../actions/productActions';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //accessed with this.props.mappedAppSate
    mappedAppState: state.appState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //accessed with this.props.mappedAppActions
    mappedToggleAddProduct: () => dispatch(appActions.toggleAddProduct()),
    mappedAddProduct: product => dispatch(productActions.addNewProduct(product))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
