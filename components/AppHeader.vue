<template>
  <header class="app-header">
    <div class="app-header__left">
      <AppLogo />
      <AppNav class="app-header__app-nav" />
    </div>
    
    <div>
      <b-btn
        class="btn--wide d-none d-lg-block"
        variant="success"
        href="#startUsing"
      >
        Start using now
      </b-btn>
  
      <AppMobileMenu class="d-block d-lg-none" />
    </div>
  </header>
</template>

<script>
import AppLogo from './AppLogo';
import AppNav from './AppNav';
import AppMobileMenu from './AppMobileMenu';

export default {
  name: 'AppHeader',
  components: {
    AppLogo,
    AppNav,
    AppMobileMenu
  }
};
</script>

<style lang="scss" scoped>
  
  .app-header {
    background-color: $white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 $padding-sides-custom;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: $height-header;
    box-sizing: border-box;
    @include from-laptop-down {
      height: $height-header-2;
    }
    @include xl-down {
      padding: 0 $padding-sides-custom-2;
    }
    @include md-down {
      height: $height-header-3;
      padding: 0 $padding-sides-custom-3;
    }
    
    &__left {
      display: flex;
      align-items: center;
    }
    
    &__app-nav {
      margin-left: 70px;
      @include from-laptop-down {
        margin-left: 60px;
      }
      @include lg-down {
        display: none;
      }
    }
  }
  
</style>
