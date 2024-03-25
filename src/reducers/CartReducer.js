export const initialCartReducerState = (() => {
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : []
})()

export const CART_ACTIONS = {
  ADD: 'ADD_TO_CART',
  REMOVE: 'REMOVE_FROM_CART',
  CLEAR: 'CLEAR_CART',
  INCREMENT: 'INCREMENT_ITEM',
  DECREMENT: 'DECREMENT_ITEM',
  BUY: 'BUY',
}

export const CartReducer = (state = initialCartReducerState, action) => {
  if (action.type === CART_ACTIONS.ADD) {
    const item = action.payload

    const nState = state.find((e) => e.id === item.id)
      ? state.map((e) =>
          e.id === item.id ? { ...e, amount: e.amount + item.amount } : e
        )
      : [...state, item]
    localStorage.setItem('cart', JSON.stringify(nState))
    return nState
  }

  if (action.type === CART_ACTIONS.REMOVE) {
    const id = action.payload
    const nState = state.filter((e) => e.id !== id)
    localStorage.setItem('cart', JSON.stringify(nState))
    return nState
  }

  if (action.type === CART_ACTIONS.CLEAR) {
    localStorage.setItem('cart', JSON.stringify([]))
    return []
  }

  if (action.type === CART_ACTIONS.INCREMENT) {
    const id = action.payload
    const nState = state.map((e) =>
      e.id === id ? { ...e, amount: e.amount + 1 } : e
    )
    localStorage.setItem('cart', JSON.stringify(nState))
    return nState
  }
  if (action.type === CART_ACTIONS.DECREMENT) {
    const id = action.payload
    const nState = state.map((e) =>
      e.id === id ? { ...e, amount: e.amount > 1 ? e.amount - 1 : 1 } : e
    )
    localStorage.setItem('cart', JSON.stringify(nState))
    return nState
  }

  return state
}
