<template>
  <div class="box has-shadow">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style>
.has-shadow {
  box-shadow: 10px 10px 0px 2px rgba(0, 0, 0, 1);
}
</style>
