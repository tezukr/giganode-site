<template>
  <main>
    <Intro />
    <GigaNodeForAll />
    <!--    <NodeUsers />-->
    <About />
    <NodeService />
    <Features />
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
import Features from '../components/index-sections/Features'
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
    Features,
    About,
    // Testimonials,
    Partners,
    StartUsing
  },
}
</script>

<style lang="scss" scoped>

</style>

