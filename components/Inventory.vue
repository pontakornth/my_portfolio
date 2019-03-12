<template>
  <div class="level">
    <div v-for="i in items" :key="i.id" class="level-item">
      <div class="container">
        <a @click="isModalOpen[i.id] = !isModalOpen[i.id]" class="button is-info">{{ i.title }}</a>
      </div>
    </div>
    <b-modal v-for="i in items" :key="i.id" :active.sync="isModalOpen[i.id]">
      <card :title="i.title" class="is-7">
        {{ i.content }}
      </card>
    </b-modal>
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
  name: 'Inventory',
  components: { Card },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isModalOpen: {
        [this.items.id]: false
      }
    }
  }
}
</script>

<style>
</style>
