<template>
    <Header />
    <Sidebar />
   
      <main id="main" class="main">
        <RouterView />
      </main>
    
    <Footer />
  
</template>


<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Sidebar from './Sidebar.vue'
import About from '../../views/About.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
    Sidebar,
    About
  }
}
</script>