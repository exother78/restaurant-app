// export const initialState = {
// basket: [],
// ttgat: "",
// user: {},
// isAdmin: false,
// isLoggedIn: false,
// };

export const getBasketTotal = (basket) => {
  return basket?.reduce(
    (amount, item) => item.price * item.quantity + amount,
    0
  );
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_BASKET":
//       return {
//         ...state,
//         basket: [...state.basket, action.item],
//       };

//     case "EMPTY_BASKET":
//       return {
//         ...state,
//         basket: [],
//       };

//     case "REMOVE_FROM_BASKET":
//       const newBasket = state.basket;
//       newBasket.splice(action.removeIndex, 1);
//       return {
//         ...state,
//         basket: [...state.basket],
//       };

//     case "LOGGED_IN":
//       return { ...state, isLoggedIn: true };

//     case "T":
//       return {
//         ...state,
//         ttgat: action.t,
//       };

//     case "SET_USER":
//       return {
//         ...state,
//         user: action.user,
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;
