import { Dialog } from 'buefy/dist/components/dialog'
import { Toast } from 'buefy/dist/components/toast'
export const state = () => ({
  completedGames: [],
  passcode: 'H2SO4',
  currentGame: 0
})

export const getters = {
  isWon: state => gameId => {
    return (
      state.completedGames.includes(gameId) ||
      state.completedGames.includes(999)
    )
  },
  isPlaying: state => gameId => {
    return state.currentGame === gameId
  },
  isCompleted: state => {
    return (
      (state.completedGames.includes(1) && state.completedGames.includes(2)) ||
      state.completedGames.includes(999)
    )
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
  cheat({ commit, state }) {
    Dialog.prompt({
      message: 'ใส่สูตรโกง',
      inputAttrs: {
        placeholder: 'คำใบ้: กรดแก่ 1 ครั้ง'
      },
      onConfirm: givenPasscode => {
        if (givenPasscode === state.passcode) {
          Toast.open('ผ่านแล้วจ้า')
          commit('cheat')
        } else {
          Toast.open('สูตรผิดล่ะ')
        }
      }
    })
  },
  play({ commit }, gameId) {
    commit('play', { gameId })
  }
}
