import { connect } from 'react-redux';
import * as productActions from '../actions/productActions';
import Products from '../components/Products';

// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //accessed with this.props.mappedAppSate
    mappedProductState: state.productState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //accessed with this.props.mappedAppActions
    fetchProducts: () => dispatch(productActions.fetchProducts()),
    mappedEditProduct: productToEdit => dispatch(productActions.editProduct(productToEdit)),
    mappedshowEditModal: productToEdit => dispatch(productActions.showEditModal(productToEdit)),
    mappedhideEditModal: () => dispatch(productActions.hideEditModal()),
    mappedDeleteProduct: productToDelete => dispatch(productActions.deleteProduct(productToDelete)),
    mappedshowDeleteModal: productToDelete => dispatch(productActions.showDeleteModal(productToDelete)),
    mappedhideDeleteModal: () => dispatch(productActions.hideDeleteModal())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);
