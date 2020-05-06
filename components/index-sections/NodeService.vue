<template>
  <section
    id="service"
    class="node-service"
  >
    <div class="node-service__inner">
      <h2 class="title title--large title--large-resp mb-4">
        Tezos Archive Full <br>
        Node As a Service (NaaS)
      </h2>
  
      <p class="mb-5">
        We can easily deploy a Tezos Archive Full Node as a service that fits your requirements and needs.
      </p>
  
      <p class="mb-5">
        The extensive experience of our specialists
        allows us to create the necessary infrastructure
        in no time while maintaining it further for you.
      </p>
  
      <a href="mailto:info@giganode.io">Contact us</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NodeAsService'
};
</script>

<style lang="scss" scoped>

  .node-service {
    background: url('~assets/img/node-service-bg.png') center no-repeat/ cover ;
    font-size: $fs-32;
    font-weight: 500;
    padding: 100px 34px;
    margin: 0 $padding-sides-custom;
    @include from-laptop-down {
      font-size: $fs-24;
    }
    @include xl-down {
      margin: 0 $padding-sides-custom-2;
    }
    @include lg-down {
      font-size: $fs-18;
    }
    @include md-down {
      margin: 0 $padding-sides-custom-3;
      padding: 55px 10px;
      font-size: $fs-base;
    }
    
    &__inner {
      max-width: 1100px;
      margin: 0 auto;
    }
  }
  
</style>
