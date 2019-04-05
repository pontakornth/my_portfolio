import { Dialog } from 'buefy/dist/components/dialog'
import { Toast } from 'buefy/dist/components/toast'
export const state = () => ({
  completedGames: [],
  passcode: 'H2SO4',
  currentGame: 0,
  allPasscodes: [
    {
      // Birth month
      code: 'RGVjZW1iZXI=',
      output: 999
    },
    {
      // Name backward
      code: 'Z25lYXNlYVAgbnJva2F0bm9Q',
      output: 1
    },
    {
      // camp name and year
      code: 'SldDMjAxOQ==',
      output: 2
    },
    {
      // Most hated role in WWO
      code: 'QXJzb25pc3Q=',
      output: 3
    }
  ]
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
      (state.completedGames.includes(1) &&
        state.completedGames.includes(2) &&
        state.completedGames.includes(3)) ||
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
  },
  reset(state) {
    state.completedGames = []
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
        placeholder: 'คำใบ้: ไม่มีแล้วนะ'
      },
      onConfirm: givenPasscode => {
        const allCodes = state.allPasscodes.map(x => x.code)
        const selected = allCodes.indexOf(
          Buffer.from(givenPasscode).toString('base64')
        )
        if (selected !== -1) {
          Toast.open('ผ่านแล้วจ้า')
          commit('completeGame', {
            gameId: state.allPasscodes[selected].output
          })
        } else {
          Toast.open('สูตรผิดล่ะ')
        }
      },
      cancelText: 'ไม่เอา',
      confirmText: 'ฮ่า ๆ'
    })
  },
  reset({ commit }) {
    Dialog.confirm({
      message: 'จะรีจริง ๆ หรอ',
      cancelText: 'ไม่เอา',
      confirmText: 'จะรีจริง ๆ นะ',
      onConfirm: commit('reset')
    })
  },
  play({ commit }, gameId) {
    commit('play', { gameId })
  }
}
