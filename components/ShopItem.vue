<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ item.title }}
        </p>
      </header>
      <div class="card-image">
        <figure class="image is-128x128">
          <img :src="item.imageUrl" :alt="item.imageAlt">
        </figure>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <p>ราคา : {{ item.price }}</p>
        </div>
        <div class="card-footer-item">
          <a @click="addToCart(item)" class="button">ซื้อ</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({ money: 'shop/money' }),
    style() {
      return {
        button: true,
        isInfo: true,
        isDisable: this.money < this.item.price
      }
    }
  },
  methods: {
    ...mapActions({
      addToCart: 'shop/addToCart'
    })
  }
}
</script>

<style>
</style>
