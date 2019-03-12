export const state = () => ({
  stock: ['a', 'b'],
  cart: [],
  inventory: [],
  money: 0
})
export const getters = {
  allItemsInCart(state) {
    return state.cart
  },
  totalPrice(state) {
    return state.cart.reduce((x, y) => {
      return x.price + y.price
    })
  },
  allItemsInStock(state) {
    return state.stock
  },
  money(state) {
    return state.money
  },
  allItemsInInventory(state) {
    return state.inventory
  }
}
export const mutations = {
  addToCart(state, { item }) {
    state.cart.push(item)
  },
  removeFromCart(state, { item }) {
    const index = state.cart.indexOf(item)
    if (index > -1) {
      state.cart.splice(index, 1)
    }
  },
  clearCart(state) {
    state.cart = []
  },
  addToInventory(state, { item }) {
    state.cart.push(item)
  },
  removeFromInventory(state, { item }) {
    const index = state.inventory.indexOf(item)
    if (index > -1) {
      state.inventory.splice(index, 1)
    }
  },
  clearInventory(state) {
    state.inventory = []
  },
  addMoney(state, { amount }) {
    state.money += amount
  },
  reduceMoney(state, { amount }) {
    state.money -= amount
  }
}

export const actions = {
  addToCart({ commit }, item) {
    commit('addToCart', { item })
  },
  removeFromCart({ commit }, item) {
    commit('removeFromCart', { item })
  },
  clearCart({ commit }) {
    commit('clearCart')
  },
  addMoney({ commit }, amount) {
    commit('addMoney', { amount })
  },
  reduceMoney({ commit, state }, amount) {
    if (state.money >= amount) {
      commit('reduceMoney', { amount })
    }
  },
  buyItems({ commit, state }) {
    const totalPrice = state.cart.reduce((x, y) => x.price + y.price)
    if (totalPrice >= state.money) {
      commit('addToInventory', { items: [...state.cart] })
      commit('reduceMoney', { amount: totalPrice })
    }
  }
}
