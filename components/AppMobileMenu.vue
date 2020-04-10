<template>
  <div>
    <div class="btns">
      <b-btn
        v-show="!isOpen"
        variant="plain"
        @click="toggleMenu"
      >
        <font-awesome-icon :icon="['fas', 'bars']"/>
      </b-btn>
  
      <b-btn
        v-show="isOpen"
        variant="plain"
        @click="toggleMenu"
      >
        <font-awesome-icon :icon="['fas', 'times']"/>
      </b-btn>
    </div>
    
    <div 
      :class="{
        menu: true,
        'menu--open': isOpen
      }"
    >
      <div class="menu__content">
        <AppNav
          mobile
          @link-click="closeMenu"
        />
        
        <b-btn
          class="btn--wide mb-5"
          variant="success"
          href="#footer"
          @click="closeMenu"
        >
          Start using now
        </b-btn>
  
        <div class="text-center mb-5">
          <b-btn
            href="https://twitter.com/UkraineTezos"
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            class="btn--social mr-3"
            @click="closeMenu"
          >
            <font-awesome-icon :icon="['fab', 'twitter']"/>
          </b-btn>
          <b-btn
            href="https://www.linkedin.com/company/tezosukraine"
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            class="btn--social mr-3"
            @click="closeMenu"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']"/>
          </b-btn>
          <b-btn
            href="https://medium.com/@tezosukraine"
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            class="btn--social"
            @click="closeMenu"
          >
            <font-awesome-icon :icon="['fab', 'medium']"/>
          </b-btn>
        </div>
        
        
        <div class="menu__footer grey">
          <div class="mb-3">
            Any time, We are open 24/7 <br>
            <a href="tel:5551234567">
              +018-958-9709
            </a>
          </div>
          
          <div>
            <p>
              5th Floor, AH Building, 756 New Designst Melbourne, Australia
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from './AppNav'

export default {
  name: 'AppMobileMenu',
  components: {
    AppNav
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
  .btn-plain {
    background-color: transparent;
    font-size: $fs-24;
    padding: 0;
  
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(129, 178, 122, 0.5);
    }
  }
  
  .menu {
    background: $white;
    position: absolute;
    top: $height-header;
    left: 0;
    z-index: 2;
    width: 100%;
    height: calc(100vh - 80px);
    min-height: 0;
    transform: translateX(-100%);
    opacity: 0;
    transition: all 0.2s;
    padding: 40px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    @include from-laptop-down {
      top: $height-header-2;
      height: calc(100vh - 60px);
    }
    @include md-down {
      top: $height-header-3;
      height: calc(100vh - 50px);
    }
    
    &--open {
      transform: translateX(0);
      opacity: 1;
    }
    
    &__content {
      height: 100%;
      text-align: center;
      max-width: 300px;
    }
  }
</style>
