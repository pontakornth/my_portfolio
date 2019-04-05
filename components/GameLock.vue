<template>
  <div>
    <div v-if="unlocked">
      <slot />
    </div>
    <div v-else>
      <div class="hero is-info is-large bordered">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column has-text-centered">
              <h4 class="title is-4">
                เล่นเกมเพื่อปลดล็อก
              </h4>
            </div>
            <div class="column has-text-centered">
              <button @click="play(gameId)" class="button is-large is-primary">
                <b-icon pack="fas" icon="key" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    unlocked: {
      type: Boolean,
      required: true
    },
    gameId: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapActions({
      play: 'game/play'
    })
  }
}
</script>

<style>
.bordered {
  border-top: 1px solid white;
}
</style>
