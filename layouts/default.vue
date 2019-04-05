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
          <a @click="reset" class="navbar-item has-text-light"> รีเซ็ต </a>
        </div>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      cheat: 'game/cheat',
      reset: 'game/reset'
    }),
    style() {
      return {
        'navbar-menu': true,
        'is-active': true,
        'has-background-info': true,
        'has-text-light': true
      }
    }
  }
}
</script>
