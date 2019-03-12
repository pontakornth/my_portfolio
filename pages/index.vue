<template>
  <section class="section">
    <control-panel />
    <shop />
    <div class="level container">
      <inventory :items="allItems" />
    </div>
  </section>
</template>

<script>
import Shop from '@/components/Shop'
import Inventory from '@/components/Inventory'
import ControlPanel from '@/components/ControlPanel'
import { mapGetters } from 'vuex'
// import LinkButton from '~/components/LinkButton'
export default {
  name: 'HomePage',
  components: {
    Inventory,
    ControlPanel,
    Shop
  },
  data() {
    return {
      bgUrl: '~/assets/hero-bg.jpg'
    }
  },
  computed: {
    ...mapGetters({ allItems: 'shop/allItemsInStock' })
  }
}
</script>
