<template>
  <div class="card">
    <slot name="content" />
  </div>
</template>

<script>
export default {
  name: 'Card'
};
</script>

<style lang="scss" scoped>

  .card {
    background-color: $white;
    border-radius: 4px;
    border: none;
    padding: 28px 20px;
    max-width: 370px;
    @include from-laptop-down {
      padding: 20px;
    }
  }
  
</style>
