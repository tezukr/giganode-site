<template>
  <footer 
    id="footer" 
    class="app-footer"
  >
    <section class="app-footer__top">
      <b-container
        fluid
        class="p-0"
      >
        <b-row no-gutters>
          <b-col
            xl="5"
          >
            <AppLogo
              :responsive="false"
              class="app-footer__app-logo"
            />
          </b-col>
          <b-col
            sm="6"
            md="4"
            xl="2"
          >
            <div class="app-footer__item">
              <h6 class="heading mb-40">
                Socials
              </h6>
              <p>
                <b-btn
                  href="https://twitter.com/UkraineTezos"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  class="btn--social mr-3">
                  <font-awesome-icon :icon="['fab', 'twitter']"/>
                </b-btn>
                <b-btn
                  href="https://www.linkedin.com/company/tezosukraine"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  class="btn--social mr-3">
                  <font-awesome-icon :icon="['fab', 'linkedin']"/>
                </b-btn>
                <b-btn
                  href="https://medium.com/@tezosukraine"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  class="btn--social">
                  <font-awesome-icon :icon="['fab', 'medium']"/>
                </b-btn>
              </p>
            </div>
          </b-col>
          <b-col
            sm="6"
            md="4"
            xl="2"
          >
            <div class="app-footer__item">
              <h6 class="heading mb-40">
                Contact
              </h6>
              <p>
                Any time, We are open 24/7 <br>
                <a href="mailto:info@giganode.io">
                  info@giganode.io
                </a>
              </p>
            </div>
          </b-col>
          <b-col
          
          >
            <div class="app-footer__item mb-0">
              <h6 class="heading mb-40">
                Address
              </h6>
              <p>
                5th Floor, AH Building, 756 New Designst Melbourne, Australia
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    
    <section class="app-footer__bottom">
      <div class="footer__bottom-left mr-5">
        <span class="grey fs-14">
          &copy; {{ currentYear }} Tezos Giga Node
        </span>
      </div>
  
      <div class="footer__bottom-right">
        <AppNav class="d-none d-md-block" />
      </div>
    </section>
  </footer>
</template>

<script>
import AppLogo from './AppLogo'
import AppNav from './AppNav'

export default {
  name: 'AppFooter',
  components: {
    AppLogo,
    AppNav,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  }
};
</script>

<style lang="scss" scoped>

  .app-footer {
    flex-shrink: 0;
    
    &__top {
      padding: 80px $padding-sides-custom;
      @include xl-down {
        padding: 80px $padding-sides-custom-2;
      }
      @include md-down {
        padding: 30px $padding-sides-custom-3;
      }
    }
    
    &__item {
      color: $grey;
      max-width: 270px;
      @include md-down {
        margin-bottom: 40px;
      }
    }
    
    &__app-logo {
      margin-bottom: 100px;
      @include md-down {
        margin-bottom: 40px;
      }
    }
    
    &__bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      background-color: $white-grey;
      padding: 25px $padding-sides-custom;
      @include xl-down {
        padding: 25px $padding-sides-custom-2;
      }
      @include xl-down {
        padding: 25px $padding-sides-custom-3;
      }
    }
  }
  
</style>
