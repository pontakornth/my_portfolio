<template>
  <box>
    <div class="columns is-vcentered">
      <div class="column is-12-mobile is-6-desktop">
        <h1 v-for="mon in database.monsters" :key="mon.name">
          {{ mon.name }}
        </h1>
      </div>
      <div class="column is-12-mobile is-6-desktop">
        <h1 v-for="heroClass in database.classes" :key="heroClass.name">
          {{ heroClass.name }}
        </h1>
      </div>
    </div>
  </box>
</template>

<script>
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
  computed: {
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
    }
  },
  methods: {
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
      if (this.monster.speed > this.hero.speed) {
        this.monsterAttack()
        this.useAction(command)
      } else {
        this.useAction(command)
        this.monsterAttack()
      }
    },
    monsterAttack() {
      this.hero.hp -= this.monster.atk * 3 - this.hero.def * 2
    },
    useAction({ command, skill }) {
      switch (command) {
        case 'attack':
          this.monster.hp -= this.hero.atk * 3 - this.monster.def * 2
          break
        case 'heal':
          this.hero.hp += Math.floor(Math.random() * this.hero.maxHp)
          break
        case 'skill':
          switch (skill) {
            case 'damage':
              this.monster.hp -= skill.value - this.monster.def
              break
            case 'atk_buff':
              this.hero.buffs.append({
                type: 'atk',
                value: skill.value
              })
              break
            case 'spd_buff':
              this.hero.buffs.append({
                type: 'speed',
                value: skill.value
              })
              break
            case 'damage_plus':
              this.monster.hp -=
                this.monster.atk * 3 - this.hero.def * 2 + skill.value
              break
            case 'def_debuff':
              this.monster.debuffs.append({
                type: 'def',
                value: skill.value
              })
              break
            case 'true_damage':
              this.monster.hp -= skill.value
              break
            case 'atk_debuff':
              this.monster.debuffs.append({
                type: 'atk',
                value: skill.value
              })
              break
            case 'instant_kill':
              const chance = Math.floor(Math.random() * 100)
              if (chance > skill.value) {
                // win()
              }
          }
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
