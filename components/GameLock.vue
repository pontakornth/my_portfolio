<template>
  <div>
    <div v-if="unlocked">
      <slot />
    </div>
    <div v-else>
      <box>
        <div class="columns is-centered is-vcentered">
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
      </box>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Box from '@/components/Box'
export default {
  components: { Box },
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
</style>
