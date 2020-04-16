<template>
  <main>
    <Intro />
    <GigaNodeForAll />
    <NodeUsers />
    <About />
    <NodeService />
    <!--    <Testimonials />-->
    <Partners />
  </main>
</template>

<script>
import Intro from '../components/index-sections/Intro'
import GigaNodeForAll from '../components/index-sections/GigaNodeForAll'
import NodeUsers from '../components/index-sections/NodeUsers'
import NodeService from '../components/index-sections/NodeService'
import About from '../components/index-sections/About'
// import Testimonials from '../components/index-sections/Testimonials'
import Partners from '../components/index-sections/Partners'

export default {
  name: 'Index',
  components: {
    Intro,
    GigaNodeForAll,
    NodeUsers,
    NodeService,
    About,
    // Testimonials,
    Partners
  },
}
</script>

<style lang="scss" scoped>

</style>

