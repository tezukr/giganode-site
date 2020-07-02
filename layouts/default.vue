<template>
  <div class="default-layout">
    <div class="default-layout__content-wrap">
      <AppHeader />
      <div class="default-layout__content">
        <nuxt/>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

export default {
  name: 'Default',
  components: {
    AppHeader,
    AppFooter
  },
  mounted() {
    this.scrollFix(this.$route.hash);
  },
  methods: {
    scrollFix(hashbang) {
      if (hashbang) {
        this.$scrollTo(hashbang);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .default-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    &__content-wrap {
      flex: 1 0 auto;
    }

    &__content {
      margin-top: $height-header;
      @include from-laptop-down {
        margin-top: $height-header-2;
      }
      @include md-down {
        margin-top: $height-header-3;
      }
    }
  }
</style>
