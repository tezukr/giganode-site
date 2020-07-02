<template>
  <nav>
    <ul
      :class="{
        'nav-list': true,
        'nav-list--mobile': mobile
      }"
    >
      <li
        v-for="(navItem, index) in navItems"
        :key="index"
        :class="{
          'nav-list__item': true,
          'nav-list__item--mobile': mobile,
        }"
        @click="$emit('link-click', true)"
      >
        <a
          v-if="currRoute === 'index' && navItem.to.hash"
          :href="navItem.to.hash"
          class="navigation-link"
        >
          {{ navItem.text }}
        </a>
        <a
          v-else-if="!navItem.isInnerLink && !navItem.to.hash"
          :href="navItem.to"
          rel="noopener noreferrer"
          target="_blank"
          class="navigation-link"
        >
          {{ navItem.text }}
        </a>
        <n-link
          v-else
          :to="navItem.to"
          class="navigation-link"
        >
          {{ navItem.text }}
        </n-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
  props: {
    mobile: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      navItems: [
        { text: 'Home', to: { name: 'index' }, isInnerLink: true },
        { text: 'Usage', to: { name: 'index', hash: '#startUsing' }, isInnerLink: true },
        { text: 'Service', to: { name: 'index', hash: '#service' }, isInnerLink: true },
        { text: 'Features', to: { name: 'index', hash: '#features' }, isInnerLink: true },
        { text: 'About', to: { name: 'index', hash: '#about' }, isInnerLink: true },
        { text: 'Blog', to: 'https://medium.com/@giganode', isInnerLink: false },
      ]
    }
  },
  computed: {
    currRoute() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>

  .nav-list {
    margin-bottom: 0;
    list-style-type: none;
    padding-left: 0;
    display: flex;

    &--mobile {
      flex-direction: column;
    }

    &__item {
      margin-right: 36px;

      &:last-child {
        margin-right: 0;
      }

      &--mobile {
        text-align: center;
        margin-right: 0;
        margin-bottom: 40px;
      }
    }
  }

</style>
