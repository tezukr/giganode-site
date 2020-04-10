<template>
  <div 
    :class="{
      'app-circle': true,
      'app-circle--small': small,
      'app-circle--medium': medium,
      'app-circle--irresponsive': !responsive
    }"
  >
    <!--  circle content  -->
  </div>
</template>

<script>
export default {
  name: 'AppCircle',
  props: {
    responsive: {
      type: Boolean,
      default: true,
    },
    small: {
      type: Boolean,
      default: false,
    },
    medium: {
      type: Boolean,
      default: false,
    }
  }
};
</script>

<style lang="scss" scoped>
  
  .app-circle {
    background-color: $color-brand;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    @include from-laptop-down {
      width: 25px;
      height: 25px;
    }
    @include md-down {
      width: 16px;
      height: 16px;
    }
  
    &--irresponsive {
      @include md-down {
        width: 25px;
        height: 25px;
      }
    }
    
    &--small {
      width: 8px;
      height: 8px;
    }
  
    &--medium {
      width: 14px;
      height: 14px;
    }
  }
  
</style>
