<template>
  <div class="nodes">
    <img
      class="max-w-100"
      src="~assets/img/shapes/animation-2.svg"
      alt="Nodes"
    >
    
    <div class="nodes__links">
      <div
        v-b-tooltip.hover
        title="main0.tezos.net.everstake.one"
        class="nodes__link"
      >
        <!--   hidden   -->
      </div>
      <div
        v-b-tooltip.hover
        title="main1.tezos.net.everstake.one"
        class="nodes__link"
      >
        <!--   hidden   -->
      </div>
      <div
        v-b-tooltip.hover
        title="main0.tezos.net.bakenrolls.com"
        class="nodes__link"
      >
        <!--   hidden   -->
      </div>
      <div
        v-b-tooltip.hover
        title="main0.tezos.net.bakenrolls.com"
        class="nodes__link"
      >
        <!--   hidden   -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NodesLinks'
};
</script>

<style lang="scss" scoped>
  .nodes {
    max-width: 400px;
    position: relative;
    
    &__links {
      position: absolute;
      /*bottom: 40px;*/
      bottom: 8%;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    
    &__link {
      cursor: pointer;
      height: 80px;
      width: 80px;
    }
  }
</style>
