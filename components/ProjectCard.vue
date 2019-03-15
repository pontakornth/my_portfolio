<template>
  <div class="column">
    <div class="card has-shadow">
      <header class="card-header">
        <p class="card-header-title has-text-grey">
          {{ title }}
        </p>
      </header>
      <div class="card-content is-flex" style="justfy-content:center">
        <div class="content has-text-centered">
          <slot />
        </div>
      </div>
      <footer class="card-footer">
        <div class="footer-item" style="padding: 1rem">
          <a :href="link" target="_blank" class="button is-link">
            รับชม
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 3
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>
