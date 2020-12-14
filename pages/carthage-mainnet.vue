<template>
  <div class="node-page">
    <div class="node-page__top">
      <b-container>
        <b-row class="mb-40">
          <b-col lg="3">
            <div class="mb-4">
              <h4 class="title title--tiny">
                HTTPS://MAINNET-TEZOS.GIGANODE.IO
              </h4>
              <div class="grey fw-medium">
                Tezos mainnet endpoint
              </div>
            </div>

            <div class="mb-4">
              <h4 class="title title--tiny d-flex align-items-center">
                <AppCircle
                  class="mr-2"
                  medium
                />
                Online
              </h4>
            </div>

            <div class="mb-4">
              <h4 class="title title--tiny">
                99,9%
              </h4>
              <div class="grey fw-medium">
                System Uptime
              </div>
            </div>

            <div class="mb-4">
              <h4 class="title title--tiny">
                12
              </h4>
              <div class="grey fw-medium">
                CPU Cores
              </div>
            </div>

            <div class="mb-4">
              <h4 class="title title--tiny">
                62.82 GiB
              </h4>
              <div class="grey fw-medium">
                Total RAM
              </div>
            </div>
          </b-col>

          <b-col>
            <NodesLinks class="mx-auto"/>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="6">
            <div>
              <h1 class="title">
                RPC Cluster
              </h1>
              <p class="p--accent">
                Our cluster for mainnet consist of 4 full arhive nodes
                behind load balancer, and split traffic between them (Round Robin),
                we extending public infrastructure that boosts Tezos
                technology mass adoption.
              </p>
            </div>
          </b-col>
          <b-col lg="6">
            <h1 class="title d-none d-lg-block invisible">
              Main title
            </h1>
            <p class="lh-26">
              We always try to implement the best industry practices in
              all things. Thereby, our customer support department works
              solely in-house, providing almost immediate assistance when
              critical problems occur. A team of our experienced DevOps
              engineers works around the clock, ensuring that all systems
              are up and running smoothly.
            </p>
          </b-col>
        </b-row>
      </b-container>

      <b-container fluid>
        <b-row>
          <b-col>
            <BalancerTable class="mt-5"/>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="node-page__charts">
      <div class="node-page__charts-item">
        <b-container>
          <h2 class="title">Network Traffic Basic</h2>
        </b-container>
        <iframe
          :src="`https://monitor-net.tezos.org.ua/d-solo/hb7fSE0Z22/monitor-giganode-io?orgId=1&panelId=157&from=${fromTimestamp}&to=${toTimestamp}&var-job=giganode_io_exporter&var-hostname=All&var-node=All&var-maxmount=&var-env=&var-name=&theme=light`"
          width="100%"
          height="500"
          frameborder="0"
        />
      </div>

      <div class="node-page__charts-item">
        <b-container>
          <h2 class="title">Network Sockstat</h2>
        </b-container>
        <iframe
          :src="`https://monitor-net.tezos.org.ua/d-solo/hb7fSE0Z22/monitor-giganode-io?orgId=1&panelId=158&from=${fromTimestamp}&to=${toTimestamp}&var-job=giganode_io_exporter&var-hostname=All&var-node=All&var-maxmount=&var-env=&var-name=&theme=light`"
          width="100%"
          height="500"
          frameborder="0"/>
      </div>

      <div class="node-page__charts-item">
        <b-container>
          <h2 class="title">CPU Basic</h2>
        </b-container>
        <iframe
          :src="`https://monitor-net.tezos.org.ua/d-solo/hb7fSE0Z22/monitor-giganode-io?orgId=1&panelId=7&from=${fromTimestamp}&to=${toTimestamp}&var-job=giganode_io_exporter&var-hostname=All&var-node=All&var-maxmount=&var-env=&var-name=&theme=light`"
          width="100%"
          height="500"
          frameborder="0"/>
      </div>

      <div class="node-page__charts-item">
        <b-container>
          <h2 class="title">System Load</h2>
        </b-container>
        <iframe
          :src="`https://monitor-net.tezos.org.ua/d-solo/hb7fSE0Z22/monitor-giganode-io?orgId=1&panelId=13&from=${fromTimestamp}&to=${toTimestamp}&var-job=giganode_io_exporter&var-hostname=All&var-node=All&var-maxmount=&var-env=&var-name=&theme=light`"
          width="100%"
          height="500"
          frameborder="0"/>
      </div>
    </div>
  </div>
</template>

<script>
  import AppCircle from '../components/AppCircle';
  import NodesLinks from '../components/NodesLinks';
  import BalancerTable from '../components/BalancerTable';
  import graphanaFromTo from '../mixins/graphanaFromTo';

  export default {
    name: 'CarthageMainnet',
    components: {
      AppCircle,
      NodesLinks,
      BalancerTable
    },
    mixins: [graphanaFromTo],
  };
</script>

<style lang="scss" scoped>

  .node-page {
    &__top {
      padding: 58px 0;
      background-color: $white-grey;
      @include lg-down {
        padding: 40px 0;
      }
    }

    &__charts {
      background-color: $white;
    }

    &__charts-item {
      padding-top: 50px;
    }
  }

</style>
