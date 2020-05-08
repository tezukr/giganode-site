<template>
  <section class="partners">
    <div class="partners__top">
      <h2 class="title">
        Our Partners
      </h2>
      <h6 class="subtitle">
        Already trusting us
      </h6>
    </div>
    
    <div class="partners__items">
      <div
        v-for="(partner, index) in partners"
        :key="index"
        class="partners__item"
      >
        <a
          :href="partner.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :src="partner.imgPath"
            :alt="partner.alt"
            class="s"
          >
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import trd from '../../assets/img/partners/trd.png';
import tezosNotif from '../../assets/img/partners/tezos-notif.png';
import tc from '../../assets/img/partners/tc.png'
import tq from '../../assets/img/partners/tq-tezos.png'
import trust from '../../assets/img/partners/trust.png'
import taquito from '../../assets/img/partners/taquito.png'
import kukai from '../../assets/img/partners/kukai.png'
import bakingbad from '../../assets/img/partners/bakingbad.png'
import stove from '../../assets/img/partners/stove.png'
import bcd from '../../assets/img/partners/bcd.png'
import tzkt from '../../assets/img/partners/tzkt.png'
import tulip from '../../assets/img/partners/tulip.png'
import madfish from '../../assets/img/partners/madfish.png'
import thanosWallet from '../../assets/img/partners/thanos-wallet.png'
import galleon from '../../assets/img/partners/galleon.png'

export default {
  name: 'Partners',
  data() {
    return {
      partners: [
        {
          href: 'https://github.com/habanoz/tezos-reward-distributor',
          imgPath: trd,
          alt: "Tezos Reward Distributor"
        },
        {
          href: 'https://tzsnt.fr',
          imgPath: tezosNotif,
          alt: "Tezos Notifier"
        },
        {
          href: 'https://tezoscommons.org',
          imgPath: tc,
          alt: "Tezos Commons"
        },
        {
          href: 'https://tqtezos.com',
          imgPath: tq,
          alt: "TQ Tezos"
        },
        {
          href: 'https://trustwallet.com',
          imgPath: trust,
          alt: "Trust Wallet"
        },
        {
          href: 'https://tezostaquito.io',
          imgPath: taquito,
          alt: "Tezos Taquito"
        },
        {
          href: 'https://kukai.app',
          imgPath: kukai,
          alt: "Kukai"
        },
        {
          href: 'https://baking-bad.org',
          imgPath: bakingbad,
          alt: "Baking Bad"
        },
        {
          href: 'https://stove-labs.com',
          imgPath: stove,
          alt: "Stove labs"
        },
        {
          href: 'https://better-call.dev',
          imgPath: bcd,
          alt: "Better Call Dev"
        },
        {
          href: 'https://tzkt.io',
          imgPath: tzkt,
          alt: "TzKT Explorer"
        },
        {
          href: 'https://tulip.tools',
          imgPath: tulip,
          alt: "Tulip Tools"
        },
        {
          href: 'https://www.madfish.solutions',
          imgPath: madfish,
          alt: "Madfish Solutions"
        },
        {
          href: 'https://thanoswallet.com',
          imgPath: thanosWallet,
          alt: "Thanos Wallet"
        },
        {
          href: 'http://cryptonomic.tech/galleon.html',
          imgPath: galleon,
          alt: "Galleon"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  
  .partners {
    background-color: $white;
    padding: 120px 0;
    text-align: center;
    @include xl-down {
      padding-bottom: 70px;
    }
    @include md-down {
      padding-top: 40px;
      padding-bottom: 30px;
    }
    
    &__top {
      margin-bottom: 100px;
      @include md-down {
        margin-bottom: 50px;
      }
    }
    
    &__items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      max-width: 1400px;
      grid-row-gap: 30px;
      margin: 0 auto;
      align-items: center;
    }
  }
  
  .s {
    max-height: 50px;
    max-width: 220px;
  }
  
</style>
