<template>
  <div class="columns">
    <shop-item v-for="i in items" :key="i.id" :item="i" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShopItem from '@/components/ShopItem'
export default {
  components: {
    ShopItem
  },
  computed: {
    ...mapGetters({
      items: 'shop/allItemsInStock'
    })
  }
}
</script>

<style>
</style>
