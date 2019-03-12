<template>
  <div class="level is-mobile">
    <div class="level-item">
      <a @click="reduceMoney(50)" class="button is-primary">
        <b-icon pack="fas" icon="minus" />
      </a>
    </div>
    <div class="level-item">
      <h2 class="title">
        {{ money }}
      </h2>
    </div>
    <div class="level-item">
      <a @click="addMoney(50)" class="button is-primary">
        <b-icon pack="fas" icon="plus" />
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ControlPanel',
  computed: {
    ...mapGetters({ money: 'shop/money' })
  },
  methods: {
    ...mapActions({
      addMoney: 'shop/addMoney',
      reduceMoney: 'shop/reduceMoney'
    })
  }
}
</script>

<style>
</style>
