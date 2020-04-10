<template>
  <section
    id="about"
    class="about"
  >
    <div class="about__row">
      <div class="about__tile about__tile--left">
        <div class="about__item">
          <h3 class="title">
            Who we are
          </h3>
      
          <p class="p--accent mb-4">
            In a joint effort, Everstake and Bake’n’Rolls created the organization
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
  
      <div class="about__tile about__tile--accent">
        <div class="about__item">
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
              class="connection"
              src="~assets/img/shapes/animation.svg"
              alt="Connection"
            >
          </div>
  
          <a
            href="#"
            target="_blank"
            class="fw-bold"
          >
            Resources
          </a>
        </div>
      </div>
    </div>
  
    <div class="about__row">
      <div class="about__tile about__tile--left">
        <div class="about__item">
          <h3 class="title">
            Giga Node for all
          </h3>
      
          <p class="p--accent mb-4">
            We built a reliable, secure, fault-tolerant, robust and geographically
            distributed infrastructure that capable of processing most of the day-to-day
            operations on the Tezos network including the peak times at the beginning of each cycle.
          </p>
      
          <p>
            Moreover, this will simplify the onboarding process for all new dApps and services
            that are planned to be migrated or built on Tezos.
          </p>
          
          <p>
            In essence, the idea that we have in mind is to turn the GigaNode
            into a fully decentralized solution, which will be given back to
            the community once it is finished, while completely removing
            Tezos Ukraine as a single point of failure.
          </p>
        </div>
      </div>
  
      <div class="about__tile">
        <div class="text-center text-xl-left w-100">
          <img
            class="connection"
            src="~assets/img/shapes/animation-2.svg"
            alt="Animation"
          >
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

  .about {
    padding-top: 60px;
    margin-bottom: 100px;
    @include xl-down {
      margin-bottom: 60px;
    }
    @include md-down {
      padding-top: 0px;
      margin-bottom: 30px;
    }
    
    &__row {
      display: flex;
      
      &:first-child {
        margin-bottom: 70px;
      }
    }
    
    &__tile {
      display: flex;
      flex: 1 0 50%;
      max-width: 50%;
      padding: 40px 58px;
      @include md-down {
        padding: 40px 20px;
      }
      
      &--left {
        justify-content: flex-end;
        @include xl-down {
          justify-content: flex-start;
        }
      }
      
      &--accent {
        background-color: $white-grey;
      }
    }
    
    &__item {
      max-width: 486px;
    }
  }
  
  .connection {
    max-width: 100%;
  }
  
  @media (max-width: $xl) {
    .about {
      &__row {
        flex-direction: column;
        
        &:first-child {
          margin-bottom: 0;
        }
      }
      
      &__tile {
        flex: 1 0 100%;
        max-width: initial;
      }
    }
  }
  
</style>
