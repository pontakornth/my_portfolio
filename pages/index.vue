<template>
  <section>
    <div class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="title">
                Pontakorn Paesaeng
              </h1>
              <h2 class="subtitle">
                A student who can code.
              </h2>
              <LinkButton to="/about" class="is-info">
                เกี่ยวกับผม
              </LinkButton>
              <LinkButton to="/games" class="is-link">
                เล่นเกม
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Card from '~/components/Card'
import LinkButton from '~/components/LinkButton'
export default {
  name: 'HomePage',

  components: {
    LinkButton
  },
  data() {
    return {
      bgUrl: '~/assets/hero-bg.jpg'
    }
  }
}
</script>
