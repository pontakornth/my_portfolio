<template>
  <box class="has-text-centered">
    <progress :value="progress" class="progress is-success" max="100">
      {{ progress }}%
    </progress>
    <h3 class="title is-2">
      จงแยกขยะ
    </h3>
    <div class="level">
      <div class="level-item">
        <p>
          {{ getTypeName(definiteAnswer.type) }}
        </p>
      </div>
    </div>
    <div class="level">
      <a v-for="(trash, index) in allAnswer" :key="index" @click="checkAnswer(trash)" class="button is-primary">{{ trash.name }}</a>
    </div>
  </box>
</template>

<script>
import { mapActions } from 'vuex'
import { Dialog } from 'buefy/dist/components/dialog'
import { trashes } from '@/static/trash_db.json'
import Box from '@/components/Box'
export default {
  components: { Box },
  props: {
    gameId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      trashes: trashes,
      allTypes: ['wet', 'recycle', 'danger'],
      progress: 0,
      pickedType: '',
      definiteAnswer: {},
      allAnswer: []
    }
  },
  watch: {
    progress(newValue, _) {
      if (newValue === 100) {
        Dialog.alert({
          message: 'เย้ ถูกเปิดต่อได้',
          canCancel: false,
          onConfirm: () => {
            this.$parent.close()
            this.win(this.gameId)
          }
        })
      }
    }
  },
  mounted() {
    this.update()
  },
  methods: {
    ...mapActions({
      win: 'game/completeGame'
    }),
    setPickedType() {
      // eslint-disable-next-line standard/computed-property-even-spacing
      this.pickedType = this.allTypes[
        Math.floor(Math.random() * this.allTypes.length)
      ]
    },
    setDefiniteAnswer() {
      const filteredTrashes = this.trashes.filter(
        x => x.type === this.pickedType
      )
      this.definiteAnswer =
        filteredTrashes[Math.floor(Math.random() * filteredTrashes.length)]
    },
    setAllAnswer() {
      const answers = [this.definiteAnswer]
      answers.push(
        ...Array(4)
          .fill({})
          .map(
            _ => this.trashes[Math.floor(Math.random() * this.trashes.length)]
          )
      )
      this.allAnswer = this.shuffle(answers)
    },
    update() {
      this.setPickedType()
      this.setDefiniteAnswer()
      this.setAllAnswer()
    },
    shuffle(array) {
      let counter = array.length
      // copied from stackoverflow
      // While there are elements in the array
      while (counter > 0) {
        // Pick a random index
        const index = Math.floor(Math.random() * counter)

        // Decrease counter by 1
        counter--

        // And swap the last element with it
        const temp = array[counter]
        array[counter] = array[index]
        array[index] = temp
      }

      return array
    },
    getTypeName(type) {
      switch (type) {
        case 'wet':
          return 'ขยะเปียก'
        case 'recycle':
          return 'ขยะรีไซเคิล'
        case 'danger':
          return 'ขยะอันตราย'
      }
    },
    checkAnswer(trash) {
      if (trash.type === this.pickedType) {
        this.progress += 20
        this.update()
      } else {
        Dialog.alert('ผิดนะจ๊ะ')
      }
    }
  }
}
</script>
