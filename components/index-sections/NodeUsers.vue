<template>
  <div class="node-users">
    <div class="node-users__top">
      <h2 class="title title--medium">
        Already using Tezos Giga Node
      </h2>
      <h6 class="subtitle subtitle--large">
        Your reliable public infrastructure
      </h6>
    </div>
    
    <div class="animation-container">
      <div class="text-sm-center">
        <img
          class="circles d-none d-lg-inline"
          src="~assets/img/shapes/circles.svg"
          alt="Circles"
        >
        <img
          class="circles d-none d-sm-inline d-lg-none"
          src="~assets/img/shapes/circles-768.svg"
          alt="Circles"
        >
        <img
          class="circles d-inline d-sm-none"
          src="~assets/img/shapes/circles-320.svg"
          alt="Circles"
        >
      </div>
      
      <div class="users">
        <div class="users__row users__row--1">
          <div class="users__item users__item--1">
            <div class="name">Tezos Notifier Bot</div>
          </div>
  
          <div class="users__item users__item--2">
            <div class="name">Tezos Reward Distributor</div>
          </div>
        </div>
  
        <div class="users__row users__row--3">
          <div class="users__item users__item--3 text-sm-center">
            <div class="name">Trust wallet</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NodeUsers'
};
</script>


<style lang="scss" scoped>
  
  .node-users {
    padding: 100px 0 190px;
    @include from-laptop-down {
      padding-bottom: 120px;
    }
    @include md-down {
      padding-top: 54px;
    }
    
    &__top {
      text-align: center;
      margin-bottom: 110px;
      @include from-laptop-down {
        margin-bottom: 66px;
      }
    }
  }

  .animation-container {
    position: relative;
    padding: 0 15px;
    @include sm-down {
      padding-top: 70px;
    }
  }
  
  .users {
    max-width: 790px;
    width: 100%;
    transform: translateX(-50%);
    top: 0;
    left: 50%;
    position: absolute;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    @include lg-down {
      margin-top: 20px;
      max-width: 540px;
    }
    @include sm-down {
      margin-top: 0;
      align-items: center;
    }
    
     &__row {
       width: 100%;
       display: flex;
       justify-content: space-between;
       
       &--1 {
         margin-bottom: 230px;
         @include from-laptop-down {
           padding-left: 20px;
           margin-bottom: 250px;
         }
         @include lg-down {
           margin-bottom: 130px;
         }
         @include sm-down {
           padding-left: 0;
           margin-bottom: 0;
           flex-direction: column;
         }
       }
       
       &--3 {
         justify-content: center;
         @include sm-down {
           justify-content: flex-start;
         }
       }
     }
    
    &__item {
      max-width: 90px;
      font-weight: $fw-bold;
      @include xl-down {
        max-width: auto;
        width: 250px;
      }
      &--1 {
        @include sm-down {
          margin-bottom: 120px;
          margin-left: 30px;
        }
      }
      
      &--2 {
        @include sm-down {
          margin-left: 210px;
          margin-bottom: 115px;
        }
      }
  
      &--3 {
        @include sm-down {
          margin-left: 30px;
        }
      }
    }
  }
  
</style>
