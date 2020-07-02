<template>
  <section
    id="features"
    class="features"
  >
    <div class="features__inner">
      <h2 class="title title--large title--large-resp mb-5">
        Features
      </h2>


      <div>
        <p class="mb-5">
          We are excited to introduce GIGANODE IPFS Gateway, an easy way to access content from the
          InterPlanetary File System (IPFS). We hope that our gateway, hosted at Giganode.io infrastructure,
          will serve as the platform for many new highly-reliable and security-enhanced web applications.
        </p>
        
        <h3 class="title mb-2">
           - GIGANODE IPFS STORAGE FOR TEZOS SNAPSHOTS
          <a href="https://snapshots-tezos.giganode.io" target="_blank" class="link">https://snapshots-tezos.giganode.io</a>
        </h3>
        
        <p>
          We are providing access to daily tezos snapshots (full and rolling) via IPFS and web.
        </p>        
        
        <br><br>

        <h3 class="title mb-2">
           - GIGANODE LINKS FOR MAINNET/TESTNES PEER LISTS         
        </h3>
        
        <p>
          MAINNET:
           <a href="https://ipfs-tezos.giganode.io/ipfs/QmeAvj1wRTjcmq6xDwN8s13X7URnzPfrCZGJw2meeuxr3n" target="_blank" class="link">IPFS</a>|WEB
        </p>

        <p>
           TESTNET:
           <a href="https://ipfs-tezos.giganode.io/ipfs/Qmd6p1d15AQvh3yFNmTYKwU58wZrpYWm3ggPTzcyk8MtZ9" target="_blank" class="link">IPFS</a>|WEB
        </p>        
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Features'
  };
</script>

<style lang="scss" scoped>
  /* TODO: Duplicate of NodeService.vue */
  .features {
    font-size: 32px;
    font-weight: 500;
    padding: 100px 34px;
    margin: 0 38px;
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

  .link {
    @include laptop-up {
      font-size: $fs-25;
    }
  }
</style>
