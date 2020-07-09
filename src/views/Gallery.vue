<template>
  <div class="gallery">
      <Topbar />
      <Navbar />
      <div class="gallery__header">
      <div class="container">
        <h2>Portfolio</h2>
      </div>
    </div>
    <div class="main__content">
        <div class="container">
            <div class="card__wrapper">
                <div class="card__content">
                    <img src="../assets/images/cause-3.jpg" class="img-fluid" alt="">
                    <h3>Toys for Children Campaign</h3>
                    <p>2018 Causes</p>
                </div>
                 <div class="card__content">
                    <img src="../assets/images/cause-2.jpg" class="img-fluid" alt="">
                    <h3>Education for all</h3>
                    <p>2018 Causes</p>
                </div>
                 <div class="card__content">
                    <img src="../assets/images/cause-1.jpg" class="img-fluid" alt="">
                    <h3>Water for Children AID</h3>
                    <p>2020 Causes</p>
                </div>
                 <div class="card__content">
                    <img src="../assets/images/featured-causes.jpg" class="img-fluid" alt="">
                    <h3>Water for Children AID</h3>
                    <p>2020 Causes</p>
                </div>
                 <div class="card__content">
                    <img src="../assets/images/eye-for.jpg" class="img-fluid" alt="">
                    <h3>Toys for Children Campaign</h3>
                    <p>2018 Causes</p>
                </div>
            </div>
        </div>
    </div>
      <Footer />
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
export default {
    components:{
        Topbar,
        Navbar,
        Footer
    }
}
</script>

<style lang="scss" scoped>
.gallery{
    .gallery__header{
    padding: 5rem 0;
    background: linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url('../assets/images/portfolio-bg.jpg');
    background-position: center;
    background-size: cover;
    color: #fff;
    h2{
      font-weight: bold;
    }
    p{
      font-size: .9rem;
      opacity: .8;
      padding-top: .5rem;
    }
  }
  .main__content{
      padding: 4rem 0;
      .card__wrapper{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 50px;
      }
      h3{
          color: #333;
          font-size: 1.1rem;
          font-weight: bold;
          opacity: .8;
          padding-top: 1rem;
      }
      p{
          color: #627081;
      }
  }
}
</style>