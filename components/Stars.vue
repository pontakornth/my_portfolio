<template>
  <span>
    <b-icon v-for="star in 5" :key="star" :style="isStared(star)" pack="fas" icon="star" />
  </span>
</template>

<script>
export default {
  props: {
    amount: {
      validator(value) {
        return typeof value === 'number' && value >= 0 && value <= 5
      },
      required: true
    }
  },
  methods: {
    isStared(value) {
      return {
        color: value <= this.amount ? '#ede400' : '#474747'
      }
    }
  }
}
</script>

<style>
</style>
