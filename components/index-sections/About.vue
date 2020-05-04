<template>
  <section
    id="about"
    class="grid"
  >
    <div class="grid__row">
      <div class="grid__tile grid__tile--left">
        <div class="grid__item">
          <h3 class="title">
            Who we are
          </h3>
      
          <p class="p--accent mb-4">
            In a joint effort, <a href="https://everstake.one" target="_blank">Everstake</a> and <a href="https://bakenrolls.com" target="_blank">Bake’n’Rolls</a> created the organization
            Tezos Ukraine which is deeply committed to supporting the Tezos network
            by developing a variety of useful analytics tools and extending public
            infrastructure that boosts Tezos technology mass adoption.
          </p>
      
          <p>
            We always try to implement the best industry practices in all things.
            Thereby, our customer support team and our experienced DevOps engineers
            work around the clock, ensuring that all systems are up and running smoothly.
          </p>
        </div>
      </div>
  
      <div class="grid__tile grid__tile--accent">
        <div class="grid__item">
          <h3 class="title">
            Technology
          </h3>
  
          <p class="p--accent mb-5">
            Our team uses only proven solutions and providers, that allowed us to
            create a cluster consisting of 4 Tezos Full Archive Nodes based on such
            technologies as Nginx, Haproxy, Graphana, Prometheus, and Munin.
          </p>
          
          <p>
            By leveraging backup power supplies, a fully redundant network,
            RAID disk towers and backups, monitoring and alerting systems,
            we deliver high uptime and complete reliability without a single point of failure.
          </p>
          
          <div class="mb-4">
            <img
              class="max-w-100"
              src="~assets/img/shapes/animation.svg"
              alt="Connection"
            >
          </div>
 
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
};
</script>

<style lang="scss" scoped>

</style>
