const INITIAL_STATE = {
  products:[],
  product:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showDeleteModal: false,
  productToDelete: null,
  showEditModal: false,
  productToEdit: null,
  newProduct: null
}

export  const productReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
          return {
            ...currentState,
            products:[],
            product:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: false,
            productToEdit: null,
          }

    case 'FETCH_PRODUCTS_SUCCESS':
          return {
            ...currentState,
            products:action.products,
            product:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: false,
            productToEdit: null,
          }

    case 'FETCH_PRODUCTS_FAILED':
          return {
            ...currentState,
            products:[],
            product:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: false,
            productToEdit: null,
          }

    case 'FETCH_PRODUCT_REQUEST':
          return {
            ...currentState,
            products:currentState.products,
            product:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: false,
            productToEdit: null,
          }

    case 'FETCH_PRODUCT_SUCCESS':
          return {
            ...currentState,
            products:currentState.products,
            product:action.product,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: false,
            productToEdit: null,
          }

    case 'FETCH_PRODUCT_FAILED':
          return {
            ...currentState,
            products:[],
            product:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: false,
            productToEdit: null,
          }

    case 'ADD_NEW_PRODUCT_REQUEST':
          return {
            ...currentState,
            products:currentState.products,
            product:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: false,
            productToEdit: null,
            newProduct: action.product
          }

    case 'ADD_NEW_PRODUCT_REQUEST_FAILED':
          return {
            ...currentState,
            products:currentState.products,
            product:null,
            isFetching: true,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: false,
            productToEdit: null,
            newProduct: null
          }

    case 'ADD_NEW_PRODUCT_REQUEST_SUCCESS':
          const nextState =  {
            ...currentState,
            products:[...currentState.products, action.product],
            product:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: false,
            productToEdit: null,
            newProduct: action.product
          }
        return nextState;

  case 'SHOW_EDIT_MODAL':
        return {
          ...currentState,
          products:currentState.products,
          product:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          productToDelete: null,
          showEditModal: true,
          productToEdit: action.product,
          newProduct: null
        }

  case 'HIDE_EDIT_MODAL':
        return {
          ...currentState,
          products:currentState.products,
          product:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          productToDelete: null,
          showEditModal: false,
          productToEdit: null,
          newProduct: null
        }

    case 'EDIT_PRODUCT_REQUEST':
          return {
            ...currentState,
            products:currentState.products,
            product:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: true,
            productToEdit: action.product,
            newProduct: null
          }

    case 'EDIT_PRODUCT_SUCCESS':
         const updatedProducts = currentState.products.map((product) => {
           if(product._id !== action.product._id){
             return product;
           }
           return { ...product, ...action.product }
         })
          return {
            ...currentState,
            products:updatedProducts,
            product:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: true,
            productToEdit: action.product,
            newProduct: null
          }

  case 'EDIT_PRODUCT_FAILED':
        return {
          ...currentState,
          products:currentState.products,
          product:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: false,
          productToDelete: null,
          showEditModal: true,
          productToEdit: currentState.productToEdit,
          newProduct: null
        }

  case 'DELETE_PRODUCT_REQUEST':
        return {
          ...currentState,
          products:currentState.products,
          product:null,
          isFetching: true,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          productToDelete: action.product,
          showEditModal: false,
          productToEdit: null,
          newProduct: null
        }

  case 'DELETE_PRODUCT_SUCCESS':
  const filteredProducts = currentState.products.filter((product) => product._id !== currentState.productToDelete._id)
        return {
          ...currentState,
          products:filteredProducts,
          product:null,
          isFetching: false,
          error: null,
          successMsg:action.message,
          showDeleteModal: true,
          productToDelete: null,
          showEditModal: false,
          productToEdit: null,
          newProduct: null
        }


  case 'DELETE_PRODUCT_FAILED':
        return {
          ...currentState,
          products:currentState.products,
          product:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: true,
          productToDelete: null,
          showEditModal: false,
          productToEdit: null,
          newProduct: null
        }

  case 'SHOW_DELETE_MODAL':
        return {
          ...currentState,
          products:currentState.products,
          product:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          productToDelete: action.product,
          showEditModal: false,
          productToEdit: null,
          newProduct: null
        }

  case 'HIDE_DELETE_MODAL':
        return {
          ...currentState,
          products:currentState.products,
          product:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          productToDelete: null,
          showEditModal: false,
          productToEdit: null,
          newProduct: null
        }


    default:
       return currentState;

  }
}
