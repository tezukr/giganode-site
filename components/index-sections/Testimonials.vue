<template>
  <section class="testimonials">
    <div class="testimonials__top">
      <h2 class="title">
        What People Say
      </h2>
      <h6 class="subtitle">
        Duis aute irure dolor in reprehenderit in voluptate velit esse <br>
        cillum dolore eu fugiat nulla pariatur. Lorem ipsum.
      </h6>
    </div>
    
    <div class="testimonials__items">
      <Testimonial
        :tags="[
          '#LPOS',
          '#NYXStandard',
          '#Amun',
          '#TokenSoft',
          '#tZero',
          '#STO',
          '#Vertalo',
          '#BTG',
          '#Ligo',
          '#usdtz',
          '#AndraCapital',
          '#Chorusmobilty',
          '#HODLXTZ',
          '#ElevatedReturns',
          '#AspenDigital',
          '#TezosGigaNode',
          '#Thanos',
          '#SmartContracts',
          '#zeroknowledgeЕвропа',
          '#SummitRecap'
        ]"
        :icon="['fab', 'twitter']"
        date="14/02/2020"
        testimonial-text="Why #Tezos? #XTZ DYOR starting here:"
        link="https://twitter.com/uncle_babe/status/1227875888202571776"
        class="testimonials__item"
      />
      <Testimonial
        :tags="['#Tezos', '$XTZ', '#TezosGigaNode']"
        :icon="['fab', 'twitter']"
        date="19/02/2020"
        testimonial-text="Done by @SeregaFenix at @LabosNomades Hackday"
        link="https://twitter.com/UkraineTezos/status/1230181971667628034"
        class="testimonials__item"
      />
      <Testimonial
        :tags="['#TezosGigaNode', '$xtz']"
        :icon="['fab', 'twitter']"
        date="05/03/2020"
        testimonial-text="Congratulations to #Tezos ecosystem for a successful protocol amendment, Carthage 2.0 is live on mainnnet!
http://Mainnet.tezos.org.ua rpc endpoint is successfully upgraded & already served the first Bakers payouts executed through Tezos Reward Distributor (TRD)!"
        link="https://twitter.com/cryptobuzznews/status/1235488693114163200"
        class="testimonials__item"
      />
    </div>
  </section>
</template>

<script>
import Testimonial from '../../components/Testimonial'

export default {
  name: 'Testimonials',
  components: {
    Testimonial,
  }
};
</script>

<style lang="scss" scoped>
  
  .testimonials {
    background-color: $white-grey;
    padding: 120px 0;
    text-align: center;
    @include xl-down {
      padding: 70px 0 30px;
    }
    @include md-down {
      padding: 40px 0 30px;
    }
    
    &__top {
      margin-bottom: 80px;
      @include from-laptop-down {
        margin-bottom: 70px;
      }
      @include md-down {
        margin-bottom: 30px;
      }
    }
    
    &__items {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1240px;
      margin: 0 auto;
    }
    
    &__item {
      margin: 0 15px;
      @include xl-down {
        margin-bottom: 30px;
      }
    }
  }
  
</style>
