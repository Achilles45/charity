<template>
  <div class="home">
    <Topbar />
    <Navbar />
    <Banner />
    <Intro />
    <About />
    <Numbers />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Topbar from '@/components/Topbar.vue'
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import Intro from '@/components/Intro.vue'
import About from '@/components/About.vue'
import Numbers from '@/components/Numbers.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Index',
  components:{
    Topbar,
    Navbar,
    Banner,
    Intro,
    About,
    Numbers,
    Footer
  }
}
</script>
