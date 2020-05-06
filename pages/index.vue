<template>
  <main>
    <Intro />
    <GigaNodeForAll />
    <!--    <NodeUsers />-->
    <About />
    <NodeService />
    <!--    <Testimonials />-->
    <StartUsing />
    <Partners />
  </main>
</template>

<script>
import Intro from '../components/index-sections/Intro'
import GigaNodeForAll from '../components/index-sections/GigaNodeForAll'
// import NodeUsers from '../components/index-sections/NodeUsers'
import NodeService from '../components/index-sections/NodeService'
import About from '../components/index-sections/About'
// import Testimonials from '../components/index-sections/Testimonials'
import Partners from '../components/index-sections/Partners'
import StartUsing from '../components/index-sections/StartUsing'

export default {
  name: 'Index',
  components: {
    Intro,
    GigaNodeForAll,
    // NodeUsers,
    NodeService,
    About,
    // Testimonials,
    Partners,
    StartUsing
  },
}
</script>

<style lang="scss" scoped>

</style>

