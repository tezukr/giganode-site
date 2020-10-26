<template>
  <section
    id="intro"
    class="intro"
  >
    <div class="intro__top">
      <h1 class="title title--large">
        Tezos Giga Node
      </h1>
      <h6 class="subtitle subtitle--large">
        Your reliable public infrastructure
      </h6>
    </div>

    <div class="intro__nodes">
      <CardNode
        v-for="(node, index) in nodes"
        :key="index"
        :node-data="{
          percent: node.percent,
          name: node.name,
          desc: node.desc,
          status: node.status,
          to: node.to
        }"
        class="intro__nodes-item"
      />
    </div>

    <div>
      <iframe
        :src="`https://monitor-net.tezos.org.ua/d-solo/hb7fSE0Z22/monitor-giganode-io?orgId=1&panelId=157&from=${fromTimestamp}&to=${toTimestamp}&var-job=giganode_io_exporter&var-hostname=All&var-node=All&var-maxmount=&var-env=&var-name=&theme=light`"
        width="100%"
        height="500"
        frameborder="0"
      />
    </div>
  </section>
</template>

<script>
  import CardNode from '../../components/CardNode';
  import graphanaFromTo from '../../mixins/graphanaFromTo';

  export default {
    name: 'Intro',
    components: {
      CardNode,
    },
    mixins: [graphanaFromTo],
    data() {
      return {
        nodes: [
          {
            percent: 99.87,
            name: 'Carthage mainnet (v7.4)',
            desc: {
              isLink: true,
              content: 'https://mainnet-tezos.giganode.io'
            },
            status: 'Online',
            to: "carthage-mainnet",
          },
          {
            percent: 99.67,
            name: 'Carthage testnet (v7.3)',
            desc: {
              isLink: true,
              content: 'https://testnet-tezos.giganode.io'
            },
            status: 'Online',
            to: "",
          },
          {
            percent: 99.69,
            name: 'Delphinet testnet (v8.0-rc1)',
            desc: {
              isLink: true,
              content: 'https://delphinet-tezos.giganode.io'
            },
            status: 'Online',
            to: "",
          },
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>

  .intro {
    background-color: $white-grey;
    padding-top: 100px;
    @include from-laptop-down {
      padding-top: 80px;
    }
    @include md-down {
      padding-top: 40px;
    }

    &__top {
      text-align: center;
      margin-bottom: 50px;
      @include md-down {
        margin-bottom: 24px;
      }
    }

    &__nodes {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      flex-wrap: wrap;
      @include md-down {
        flex-direction: column;
        align-items: center;
        margin-bottom: 0;
      }
    }

    &__nodes-item {
      margin: 0 15px 15px;
      flex: 1 0 auto;
      @include lg-down {
        margin: 0 10px 15px;
      }
    }
  }

</style>
