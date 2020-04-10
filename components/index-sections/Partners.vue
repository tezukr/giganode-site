<template>
  <section class="partners">
    <div class="partners__top">
      <h2 class="title">
        Our Partners
      </h2>
      <h6 class="subtitle">
        Your reliable public infrastructure
      </h6>
    </div>
      
    <div class="partners__items">
      <div class="partners__item">
        <img
          class="s"
          src="~assets/img/partners/tezos-notif.svg"
          alt="Firstudio"
        >
      </div>
      <div class="partners__item">
        <img
          class="s"
          src="~assets/img/partners/trd.svg"
          alt="Firstudio"
        >
      </div>
      <div class="partners__item">
        <img
          class="s"
          src="~assets/img/partners/trust.svg"
          alt="Firstudio"
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Partners'
};
</script>

<style lang="scss" scoped>
  
  .partners {
    background-color: $white;
    padding: 120px 0;
    text-align: center;
    @include xl-down {
      padding-bottom: 70px;
    }
    @include md-down {
      padding-top: 40px;
      padding-bottom: 30px;
    }
    
    &__top {
      margin-bottom: 100px;
      @include md-down {
        margin-bottom: 50px;
      }
    }
    
    &__items {
      flex-wrap: wrap;
      display: flex;
      justify-content: center;
      max-width: 970px;
      margin: 0 auto;
    }
    
    &__item {
      margin: 0 30px 30px;
      @include lg-down {
        margin-bottom: 30px;
      }
      
      &:last-child {
        @include lg-down {
          margin-bottom: 0;
        }
      }
    }
  }
  
  .s {
    max-height: 50px;
    max-width: 300px;
  }
  
</style>
