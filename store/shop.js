import content from '../contentMap.js'
export const state = () => ({
  stock: content,
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
      return x + (y.price || 0)
    }, 0)
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
  buyItem({ commit, state }, item) {
    if (item.price >= state.money) {
      commit('addToCart', { items: item })
      commit('reduceMoney', { amount: item.price })
    }
  }
}
