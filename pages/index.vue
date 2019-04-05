<template>
  <div>
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="level">
            <div class="level-item">
              <figure class="image is-128x128" style="display:flex; justify-content: center;">
                <img class="is-rounded" src="~assets/avatar.jpg" alt="Pontakorn Paesaeng">
              </figure>  
            </div>
          </div> 
          <h1 class="title is-3">
            พนธกร แพแสง
          </h1>
          <div class="content has-text-left">
            <p>
              ผมชื่อนายพนธกร แพแสง หรือโมส ปัจจุบันเป็นนักเรียนโรงเรียนสตรีวิทยา ๒ สายการเรียนวิทย์-คณิต เคยเป็นนักเรียนแลกปลี่ยนไปยังประเทศอาร์เจนตินาของโครงการ AFS เมื่อตอนจบ ม.4
              เป็นเวลาประมาณ 11 เดือน แล้วก็กลับไปยังประเทศไทย เคยเข้าร่วมกิจกรรมเปิดบ้านของคณะ SIIT ที่สถาบันเทคโนโลยีนานาชาติสิรินธร มหาวิทยาลัยธรรมศาสตร์ และก็เข้าร่วมโครงการ
              ToBeIT62 ที่สถาบันเทคโนโลยีพระจอมเกล้าคุณทหารลาดกระบัง
            </p>
            <p>
              งานอดิเรกที่ผมทำจะเป็นการเขียนเว็บ เขียนโปรแกรม เล่นเกมโดยเฉพาะเกมมือถือ หรือฟัง podcast นอกจากนี้ว่าง ๆ ผมจะหาที่เรียนพิเศษเพื่อสอบเข้ามหาวิทยาลัย หรือไม่ก็หาหนังสือมาอ่านเล่น
              วิชาที่ผมชอบในโรงเรียนจะเป็นวิชาคอมพิวเตอร์ เพราะตรงกับงานอดิเรกของผม และวิชาวิทยาศาสตร์ที่ได้เรียนอะไรที่ท้าทายโดยเฉพาะการทดลอง
            </p>
            <p>
              ผลงานที่ผมทำส่วนใหญ่จะเป็นผลงานระดับเล็ก และมีผลงานขนาดกลาง ยังไม่ได้ทำผลงานขนาดใหญ่ ผลงานที่ทำจะเป็นการเขียนเว็บทั่วไป และโปรแกรมเล็กน้อย ผมกำลังฝึกหัดการเขียนโปรแกรม
              โดยเฉพาะภาษา Javascript และภาษา Python ที่มีแนวโน้มความต้องการสูงในอนาคต
            </p>
            <p>
              สำหรับเว็บนี้ก็จะมีข้อมูลเกี่ยวกับผม สามารถเล่นเกมที่ผมทำง่าย ๆ  เพื่อเข้าชมได้ครับ
            </p>
          </div>
        </div>
      </div>
    </div>
    <game-lock :gameId="1" :unlocked="isWon(1)">
      <education />
    </game-lock>
    <game-lock :gameId="2" :unlocked="isWon(2)">
      <portfolio />
    </game-lock>
    <game-lock :gameId="3" :unlocked="isWon(3)">
      <skills />
    </game-lock>
    <contact />
    <b-modal :active.sync="educationGame">
      <image-guessing :gameId="1" />
    </b-modal>
    <b-modal :active.sync="projectGame">
      <fight :gameId="2" />
    </b-modal>
    <b-modal :active.sync="skillsGame">
      <trash-attack :gameId="3" />
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ImageGuessing from '@/components/Games/ImageGuessing.vue'
import Fight from '@/components/Games/Fight.vue'
import Contact from '@/components/Contact'
import GameLock from '@/components/GameLock'
import Skills from '@/components/Skills'
import TrashAttack from '@/components/Games/TrashAttack'
// import Box from '@/components/Box'
import Education from '@/components/Education'
import Portfolio from '@/components/Portfolio'
export default {
  name: 'HomePage',
  components: {
    // Box,
    Education,
    Portfolio,
    GameLock,
    Contact,
    ImageGuessing,
    Fight,
    Skills,
    TrashAttack
  },
  computed: {
    ...mapGetters({
      isWon: 'game/isWon',
      isPlaying: 'game/isPlaying'
    }),
    educationGame: {
      get() {
        return this.isPlaying(1)
      },
      set(value) {
        if (value === false) {
          this.play(0)
        } else {
          this.play(1)
        }
      }
    },
    projectGame: {
      get() {
        return this.isPlaying(2)
      },
      set(value) {
        if (value === false) {
          this.play(0)
        } else {
          this.play(2)
        }
      }
    },
    skillsGame: {
      get() {
        return this.isPlaying(3)
      },
      set(value) {
        if (value === false) {
          this.play(0)
        } else {
          this.play(3)
        }
      }
    }
  },
  methods: {
    ...mapActions({
      play: 'game/play'
    })
  },
  transitions: 'page'
}
</script>
<style>
</style>
