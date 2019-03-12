<template>
  <td @click="toggle(index)" :style="style" class="has-text-light">
    <div class="cell">
      {{ mark }}
    </div>
  </td>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    mark: {
      type: String,
      required: true,
      default: ''
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    style() {
      return {
        backgroundColor: this.mark === 'O' ? '#0c57d1' : '#d10b0b'
      }
    }
  },
  methods: {
    toggle(cell) {
      const parent = this.$parent
      if (parent.cells[cell] !== '') {
        return
      }
      switch (parent.status) {
        case 'O_TURN':
          parent.cells[cell] = 'O'
          break
        case 'X_TURN':
          parent.cells[cell] = 'X'
          break
        default:
          break
      }
      parent.checkWinCondition()
      if (parent.status === 'O_TURN') {
        parent.status = 'X_TURN'
      } else if (parent.status === 'X_TURN') {
        parent.status = 'O_TURN'
      }
    }
  }
}
</script>

<style>
.cell {
  min-width: 50px;
  min-height: 50px;
  text-align: center;
}
</style>
