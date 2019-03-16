<template>
  <box>
    <div class="columns is-vcentered">
      <div class="column is-12-mobile is-6-desktop">
        <div v-if="isEmpty(monster)">
          <h6 class="title is-6">
            เลือกมอนสเตอร์
          </h6>
          <div class="is-flex" style="justify-content:space-evenly">
            <a v-for="(mType, index) in database.monsters" :key="index" @click="pickMonster(mType)" class="button is-danger">
              {{ mType.name }}
            </a>
          </div>
        </div>
        <div v-else>
          <p>
            มอนสเตอร์ : {{ monster.name }}<br>
            HP: {{ monster.hp }}/{{ monster.maxHp }}
          </p>
        </div>
      </div>
      <div class="column is-12-mobile is-6-desktop">
        <div v-if="isEmpty(hero)">
          <h6 class="title is-6">
            เลือกฮีโร่
          </h6>
          <div class="is-flex" style="justify-content:space-evenly">
            <a v-for="(hType, index) in database.classes" :key="index" @click="pickHero(hType)" class="button is-primary">
              {{ hType.name }}
            </a>
          </div>
        </div>
        <div v-else>
          <div v-if="!isEmpty(monster)">
            <p>
              {{ hero.name }}<br>
              HP: {{ hero.hp }}/{{ hero.maxHp }}<br>
              MP: {{ hero.mp }}/{{ hero.maxMp }}<br>
              ความเร็ว : {{ getHeroStat('speed') }}<br>
              พลังโจมตี : {{ getHeroStat('atk') }}<br>
              พลังป้องกัน : {{ getHeroStat('def') }}<br>
            </p>
            <div class="columns is-multiline is-centered">
              <div class="column is-flex is-6-mobile" style="justify-content: space-around">
                <buton @click="executeCommand({ command: 'attack' })" class="button is-success">
                  โจมตี
                </buton>
                <button @click="executeCommand({ command: 'heal' })" class="button is-success">
                  ฟื้นฟู
                </button>
              </div>
              <div class="column is-12 has-text-left" />
              <div v-for="(skill, index) in hero.skills" :key="index" class="column is-narrow">
                <button @click="useSkill(skill)" :disabled="hero.mp <= skill.cost" class="button is-success">
                  {{ skill.name }}
                </button>
                {{ getSkillDesc(skill) }}
              </div>
            </div>
          </div>
          <div v-else>
            <p>
              กรุณาเลือกมอนสเตอร์ก่อน
            </p>
          </div>
        </div>
      </div>
    </div>
  </box>
</template>

<script>
import { mapActions } from 'vuex'
import { Dialog } from 'buefy/dist/components/dialog'
import Box from '@/components/Box'
import rpgDb from '@/static/rpg_db.json'
export default {
  components: { Box },
  props: {
    gameId: {
      type: Number,
      required: true,
      default: 2
    }
  },
  data() {
    return {
      database: rpgDb,
      hero: {},
      monster: {}
    }
  },
  methods: {
    ...mapActions({
      win: 'game/completeGame'
    }),
    getSkillDesc(skill) {
      switch (skill.type) {
        case 'damage':
          return `ทำความเสียหาย ${skill.value}`
        case 'true_damage':
          return `ทำความเสียหายจริง ${skill.value}`
        case 'damage_plus':
          return `เพิ่มความเสียหายจากปกติ ${skill.value}`
        case 'atk_buff':
          return `เพิ่มพลังโจมตี ${skill.value}`
        case 'def_buff':
          return `เพิ่มพลังป้องกัน ${skill.value}`
        case 'spd_buff':
          return `เพิ่มความเร็ว ${skill.value}`
        case 'atk_debuff':
          return `ลดพลังโจมตีศัตรู ${skill.value}`
        case 'def_debuff':
          return `ลดพลังป้องกันศัตรู ${skill.value}`
        case 'instant_kill':
          return `มีโอกาสฆ่าศัตรูทันที ${skill.value}`
      }
    },
    getHeroStat(type) {
      return this.hero.buffs.reduce((prev, curr) => {
        if (curr.type === type) {
          return prev + curr.value
        } else {
          return prev
        }
      }, this.hero[type])
    },
    getMonStat(type) {
      return this.monster.debuffs.reduce((prev, curr) => {
        if (curr.type === type) {
          return prev - curr.value
        } else {
          return prev
        }
      }, this.monster[type])
    },
    isEmpty(obj) {
      return Object.entries(obj).length === 0 && obj.constructor === Object
    },
    pickHero(heroClass) {
      this.hero = {
        ...heroClass,
        hp: heroClass.maxHp,
        mp: 0,
        buffs: []
      }
    },
    pickMonster(monsterType) {
      this.monster = {
        ...monsterType,
        hp: monsterType.maxHp,
        debuffs: []
      }
    },
    executeCommand(command) {
      if (this.getMonStat('speed') > this.hero.speed) {
        this.monsterAttack()
        this.useAction(command)
      } else {
        this.useAction(command)
        this.monsterAttack()
      }
      if (this.hero.hp <= 0) {
        Dialog.alert('แพ้แล้ว แงๆ')
        this.$parent.close()
      }
      if (this.monster.hp <= 0) {
        Dialog.alert('เย้ ชนะแล้ว เปิดต่อได้!')
        this.win(this.gameId)
        this.$parent.close()
      }
    },
    monsterAttack() {
      this.hero.hp -= this.getMonStat('atk') * 3 - this.getHeroStat('def') * 2
    },
    useAction({ command, skill }) {
      switch (command) {
        case 'attack':
          const damage =
            this.getHeroStat('atk') * 3 - this.getMonStat('def') * 2
          if (damage >= 0) {
            this.monster.hp -= damage
          }
          break
        case 'heal':
          const heal = Math.floor((Math.random() * this.hero.maxHp) / 4)
          if (heal + this.hero.hp > this.hero.maxHp) {
            this.hero.hp = this.hero.maxHp
          } else {
            this.hero.hp += heal
          }
          break
        case 'skill':
          this.hero.mp -= skill.cost
          switch (skill.type) {
            case 'damage':
              this.monster.hp -= skill.value - this.getMonStat('def')
              break
            case 'atk_buff':
              this.hero.buffs.push({
                type: 'atk',
                value: skill.value
              })
              break
            case 'spd_buff':
              this.hero.buffs.push({
                type: 'speed',
                value: skill.value
              })
              break
            case 'damage_plus':
              this.monster.hp -=
                this.getMonStat('atk') * 3 -
                this.getHeroStat('def') * 2 +
                skill.value
              break
            case 'def_debuff':
              this.monster.debuffs.push({
                type: 'def',
                value: skill.value
              })
              break
            case 'true_damage':
              this.monster.hp -= skill.value
              break
            case 'atk_debuff':
              this.monster.debuffs.push({
                type: 'atk',
                value: skill.value
              })
              break
            case 'instant_kill':
              const chance = Math.floor(Math.random() * 100)
              if (chance > skill.value) {
                this.monster.hp = 0
              }
              break
          }
      }

      const manaHeal = Math.floor((Math.random() * this.hero.maxMp) / 4)
      if (manaHeal + this.hero.mp >= this.hero.maxMp) {
        this.hero.mp = this.hero.maxMp
      } else {
        this.hero.mp += manaHeal
      }
    },
    useSkill(skill) {
      if (this.hero.mp >= skill.cost) {
        this.executeCommand({
          command: 'skill',
          skill: skill
        })
      }
    }
  }
}
</script>

<style>
</style>
