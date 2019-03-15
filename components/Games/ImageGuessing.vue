/* eslint-disable prettier/prettier */
<template>
  <box>
    <div class="columns">
      <div class="column is-12">
        <h5 class="title is-5">
          ทายสินี่อะไร {{ answerStatus }}
        </h5>
        <div class="columns is-centered is-multiline">
          <div class="column is-4">
            <figure class="image is-16x9">
              <img :src="selectedQuiz.imageUrl">
            </figure>
          </div>
          <div class="column is-12 has-offset-8 is-flex" style="justify-content:space-evenly">
            <a v-for="choice in selectedQuiz.choices" :key="choice" v-on:click="checkIfWin(choice)" class="button is-primary">{{ choice }}</a>
          </div>
        </div>
      </div>
    </div>
  </box>
</template>

<script>
import { mapActions } from 'vuex'
import quizzes from '@/static/image_quiz.json'
import Box from '@/components/Box'
import { Dialog } from 'buefy/dist/components/dialog'
export default {
  components: { Box },
  props: {
    gameId: {
      type: Number,
      required: true,
      default: 1
    }
  },
  data() {
    return {
      allQuizzes: quizzes.quizzes,
      dialog: Dialog,
      answerStatus: ''
    }
  },
  computed: {
    // eslint-disable-next-line prettier/prettier
      selectedQuiz() {
      // eslint-disable-next-line prettier/prettier
        return this.allQuizzes[ Math.floor(Math.random() * this.allQuizzes.length) ]
    }
  },
  methods: {
    ...mapActions({ win: 'game/completeGame' }),
    checkIfWin(answer) {
      if (answer === this.selectedQuiz.correctAnswer) {
        this.dialog.alert({
          message: 'เย้ ถูกเปิดพอร์ต !',
          canCancel: false,
          onConfirm: () => {
            this.answerStatus = '(เสร็จล่ะ ปิดได้แล้ว)'
            this.$parent.close()
            this.win(this.gameId)
          }
        })
      } else {
        this.dialog.alert('ว้าย ผิด')
      }
    }
  }
}
</script>

<style>
</style>
