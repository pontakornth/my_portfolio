<template>
  <div>
    <nav
      class="navbar header is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <h1>
            Pontakorn Paesaeng
          </h1>
        </a>
      </div>
      <div :class="style()">
        <div class="navbar-end">
          <a @click="cheat" class="navbar-item has-text-light"> กดสูตรตรงนี้ </a>
        </div>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isCompleted: 'game/isCompleted'
    })
  },
  methods: {
    ...mapActions({
      cheat: 'game/cheat'
    }),
    style() {
      return {
        'navbar-menu': true,
        'is-active': true,
        'is-hidden': this.isCompleted,
        'has-background-info': true,
        'has-text-light': true
      }
    }
  }
}
</script>
