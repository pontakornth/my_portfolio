export const state = () => ({
  completedGames: [],
  passcode: 'JWC4826159357',
  currentGame: 0
})

export const getters = {
  isWon: state => gameId => {
    return state.completedGames.includes(gameId)
  },
  isPlaying: state => gameId => {
    return state.currentGame === gameId
  }
}

export const mutations = {
  completeGame(state, { gameId }) {
    state.completedGames.push(gameId)
  },
  cheat(state) {
    state.completedGames = [999]
  },
  play(state, { gameId }) {
    state.currentGame = gameId
  }
}

export const actions = {
  completeGame({ commit }, gameId) {
    commit('completeGame', { gameId: gameId })
  },
  cheat({ commit, state }, givenPasscode) {
    if (givenPasscode === state.passcode) {
      commit('cheat')
    } else {
      throw Error("No, that's wrong!")
    }
  },
  play({ commit }, gameId) {
    commit('play', { gameId })
  }
}
