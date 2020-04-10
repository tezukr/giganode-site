<template>
  <div class="circles">
    <div class="circles__row">
      <div class="circles__item circles__item--top circles__item--1">
        <div class="name">Tezos Notifier Bot</div>
      </div>
      <div>
        <img
          class="circles__img d-none d-sm-inline"
          src="~assets/img/shapes/circles-768.svg"
          alt="Circles"
        >
        <img
          class="circles__img d-sm-none"
          src="~assets/img/shapes/circles-320.svg"
          alt="Circles"
        >
      </div>
      <div class="circles__item circles__item--top circles__item--2">
        <div class="name">Tezos Reward Distributor</div>
      </div>
    </div>
    <div class="circles__row d-flex justify-content-center">
      <div class="circles__item circles__item--3">
        <div class="name">Trust wallet</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Circles'
};
</script>

<style lang="scss" scoped>
  
  .circles {
    max-width: 543px;
    
    &__img {
      margin: 0 10px 10px;
      @include sm-down {
        margin-left: 0;
      }
    }
    
    &__row {
      display: flex;
      @include sm-down {
        flex-direction: column;
      }
    }
    
    &__item {
      max-width: 90px;
      font-weight: $fw-bold;
      
      &--top {
        margin-top: 20px;
      }
      
      &--1 {
        text-align: right;
        @include sm-down {
          text-align: left;
          padding-left: 10px;
        }
      }
      
      &--2 {
        @include sm-down {
          transform: translate3d(210px, -218px, 0);
        }
      }
      
      &--3 {
        padding-left: 15px;
        @include sm-down {
          transform: translatey(-100px);
          padding-left: 10px;
        }
      }
    }
  }
  
  
</style>
