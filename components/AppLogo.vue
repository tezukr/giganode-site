<template>
  <n-link 
    :to="{ name: 'index' }" 
    class="app-logo"
  >
    <AppCircle
      :responsive="responsive"
      class="circle--logo"
    />
    <span 
      :class="{
        'title title--tiny': true,
        'fs-21': !responsive,
    }">
      Tezos Giga Node
    </span>
  </n-link>
</template>

<script>
import AppCircle from './AppCircle'

export default {
  name: 'AppLogo',
  components: {
    AppCircle
  },
  props: {
    responsive: {
      type: Boolean,
      default: true
    }
  },
}

</script>

<style lang="scss" scoped>
  .app-logo {
    display: flex;
    color: initial;
    text-decoration: none;
    align-items: center;
  }
  
  .circle--logo {
    margin-right: 15px;
    @include md-down {
      margin-right: 8px;
    }
  }
</style>

