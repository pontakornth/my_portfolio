<template>
  <nuxt-link :to="to" class="button">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    to: {
      default: '/',
      type: String
    }
  }
}
</script>
