const apiUrl = "/api/";

export const toggleAddBook = () => {
  return {
    type: 'TOGGLE_ADD_PRODUCT'
  }
}

export const addNewProduct = (product) => {console.log(product)
  return (dispatch) => {
    dispatch(addNewProductRequest(product));
    return fetch(apiUrl, {
      method:'post',
      body: product,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.product);
          dispatch(addNewProductRequestSuccess(data.product, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewProductRequestFailed(error))
        })
      }
    })
  }
}

export const addNewProductRequest = (product) => {
  return {
    type: 'ADD_NEW_PRODUCT_REQUEST',
    product
  }
}

export const addNewProductRequestSuccess = (product,message) => {
  return {
    type: 'ADD_NEW_PRODUCT_REQUEST_SUCCESS',
    product:product,
    message:message
  }
}

export const addNewProductRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_PRODUCT_REQUEST_FAILED',
    error
  }
}

//Async action
export const fetchProducts = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchProductsRequest());
    // Returns a promise
    return fetch(apiUrl)
                .then(response => {
                  if(response.ok){
                    response.json().then(data => {
                      dispatch(fetchProductsSuccess(data.products,data.message));
                    })
                  }
                  else{
                    response.json().then(error => {
                      dispatch(fetchProductsFailed(error));
                    })
                  }
                })


  }
}

export const fetchProductsRequest = () => {
  return {
    type:'FETCH_PRODUCTS_REQUEST'
  }
}


//Sync action
export const fetchProductsSuccess = (products,message) => {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    products: products,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchProductsFailed = (error) => {
  return {
    type:'FETCH_PRODUCTS_FAILED',
    error
  }
}

export const fetchProductById = (productId) => {
  return (dispatch) => {
    dispatch(fetchProductRequest());
      // Returns a promise
      return fetch(apiUrl + productId)
             .then(response => {
               if(response.ok){
                 response.json().then(data => {
                   dispatch(fetchProductSuccess(data.product[0], data.message));
                 })
               }
               else{
                 response.json().then(error => {
                   dispatch(fetchProductFailed(error));
                 })
               }
             })

  }
}

export const fetchProductRequest = () => {
  return {
    type:'FETCH_PRODUCT_REQUEST'
  }
}


//Sync action
export const fetchProductSuccess = (product,message) => {
  return {
    type: 'FETCH_PRODUCT_SUCCESS',
    product: product,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchProductFailed = (error) => {
  return {
    type:'FETCH_PRODUCT_FAILED',
    error
  }
}

export const showAddModal = (productToAdd) => {
  return {
    type:'SHOW_ADD_MODAL',
    product:productToAdd
  }
}

export const hideAddModal = () => {
  return {
    type:'HIDE_ADD_MODAL'
  }
}

export const showEditModal = (productToEdit) => {
  return {
    type:'SHOW_EDIT_MODAL',
    product:productToEdit
  }
}

export const hideEditModal = () => {
  return {
    type:'HIDE_EDIT_MODAL'
  }
}

export const editProduct = (product) => {
    return (dispatch) => {
      dispatch(editProductRequest(product));
      return fetch(apiUrl, {
        method:'put',
        body:product
      }).then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(editProductSuccess(data.product,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(editProductFailed(error));
          })
        }
      })
    }
}

export const editProductRequest = (product) => {
   return {
     type:'EDIT_PRODUCT_REQUEST',
     product
   }
}

export const editProductSuccess = (product,message) => {
  return {
    type:'EDIT_PRODUCT_SUCCESS',
    product:product,
    message:message
  }
}

export const editProductFailed = (error) => {
  return {
    type:'EDIT_PRODUCT_FAILED',
    error
  }
}

export const deleteProduct = (product) => {
  return (dispatch) => {
    dispatch(deleteProductRequest(product));
    return fetch(apiUrl + product._id ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteProductSuccess(data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(deleteProductFailed(error));
        })
      }
    })

  }
}

export const deleteProductRequest = (product) => {
   return {
     type:'DELETE_PRODUCT_REQUEST',
     product
   }
}

export const deleteProductSuccess = (message) => {
  return {
    type:'DELETE_PRODUCT_SUCCESS',
    message:message
  }
}

export const deleteProductFailed = (error) => {
  return {
    type:'DELETE_PRODUCT_FAILED',
    error
  }
}

export const showDeleteModal = (productToDelete) => {
  return {
    type:'SHOW_DELETE_MODAL',
    product:productToDelete
  }
}

export const hideDeleteModal = () => {
  return {
    type:'HIDE_DELETE_MODAL'
  }
}
