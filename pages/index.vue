<template>
  <main>
    <Intro />
    <NodeUsers />
    <NodeService />
    <About />
    <Testimonials />
    <Partners />
  </main>
</template>

<script>
import Intro from '../components/index-sections/Intro'
import NodeUsers from '../components/index-sections/NodeUsers'
import NodeService from '../components/index-sections/NodeService'
import About from '../components/index-sections/About'
import Testimonials from '../components/index-sections/Testimonials'
import Partners from '../components/index-sections/Partners'

export default {
  name: 'Index',
  components: {
    Intro,
    NodeUsers,
    NodeService,
    About,
    Testimonials,
    Partners
  },
}
</script>

<style lang="scss" scoped>

</style>

