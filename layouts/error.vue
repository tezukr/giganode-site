<template>
  <b-container>
    <div class="error-wrap">
      <h1
        v-if="error.statusCode === 404"
        class="title title--large"
      >
        Oops! Page not found
      </h1>
      <h1 v-else>An error occurred</h1>
      <n-link to="/">Home page</n-link>
    </div>
  </b-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  layout: 'default' // you can set a custom layout for the error page
};
</script>

<style lang="scss" scoped>
  .error-wrap {
    text-align: center;
    padding: 100px 0;
  }
</style>
