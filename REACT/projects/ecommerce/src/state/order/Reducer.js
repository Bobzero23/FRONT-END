import {
  CRAETE_ORDER_FAILURE,
  CRAETE_ORDER_REQUEST,
  CRAETE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from "./ActionType";

const initialState = {
  orders: [],
  order: null,
  error: null,
  loading: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CRAETE_ORDER_REQUEST:
      return { ...state, error: null, loading: true };

    case CRAETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        order: action.payload,
        error: null,
      };

    case CRAETE_ORDER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case GET_ORDER_BY_ID_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_ORDER_BY_ID_SUCCESS:
      return { ...state, loading: false, error: null, order: action.payload };

    case GET_ORDER_BY_ID_FAILURE:
      return { ...state, loading: false, order: action.payload };

    default:
      return state;
  }
};
