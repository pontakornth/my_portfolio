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
      <div class="navbar-menu is-active">
        <div class="navbar-end">
          <a @click="cheat" class="navbar-item"> กดสูตรตรงนี้ </a>
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
      cheat: 'game/cheat'
    })
  }
}
</script>
