import { connect } from 'react-redux';
import * as productActions from '../actions/productActions';
import Product from '../components/Product';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //accessed with this.props.mappedAppSate
    mappedProductState: state.productState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //accessed with this.props.mappedAppActions
    mappedfetchProductById: productId => dispatch(productActions.fetchProductById(productId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);
