<template>
  <div class="carousel__wrapper">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/banner3.jpg" alt="First slide" />
          <div class="carousel-caption">
            <h1 class="animate__animated animate__bounceIn">Donate</h1>
            <h2>4 a better world</h2>
            <p>We at Al maktoum foundation beleive that collectively, we can have a better world when we show kindness and empathy to people irrespective of color, race and nationality  .</p>
            <router-link to="/donations" class="carousel-btn animated zoomIn animate3d">Donate Now <i class="fas fa-long-arrow-alt-right"></i> </router-link>
            <!-- <router-link to="/about" class="carousel-btn about__btn animated zoomIn animate3d">Read more <i class="fas fa-long-arrow-alt-right"></i> </router-link> -->
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/banner2.jpg" alt="Second slide" />
           <div class="carousel-caption">
            <h1 class="animate__animated animate__bounceIn">Al Maktoum Foundation</h1>
            <h2>4 a better world</h2>
            <p>We can all make a difference in the world today by touching the lives of the less privilege people. All donations of any amount will keep our vision alive.</p>
            <router-link to="/donations" class="carousel-btn animated zoomIn animate3d">Donate Now <i class="fas fa-long-arrow-alt-right"></i> </router-link>
            <!-- <router-link to="/about" class="carousel-btn about__btn animated zoomIn animate3d">Read more <i class="fas fa-long-arrow-alt-right"></i> </router-link> -->
          </div>
        </div>
        <!-- <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/hero1.jpg" alt="Third slide" />
         <div class="carousel-caption">
            <h1 class="animate__animated animate__bounceIn">Donate</h1>
            <h2>4 a better world</h2>
            <p>Be the reason why millions of people all over the world should be smilling. It does'nt cost that much and you will be glad you did.</p>
            <router-link to="/donations" class="carousel-btn animated zoomIn animate3d">Donate Now <i class="fas fa-long-arrow-alt-right"></i> </router-link>
            <router-link to="/about" class="carousel-btn about__btn animated zoomIn animate3d">Read more <i class="fas fa-long-arrow-alt-right"></i> </router-link>
          </div>
        </div> -->
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon d-none d-md-block" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon d-none d-md-block" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel"
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/_colors';
.carousel__wrapper {
  .carousel-inner {
    position: relative;
  }
  .carousel-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
  }
  .carousel-img {
    width: auto;
    height: 90vh;
    display: block !important;
    width: 100vw;
  }
   .animate3d {
    animation-duration: 5s;
  }
  .carousel-caption {
    position: absolute;
    top: 20%;
    transform: translateX(-50%, -50%);
    width: 50%;
    text-align: left;
    color:#fff;
    h1 {
      font-weight: 900;
      font-size: 4.5rem;
      letter-spacing: 0.4px;
      text-transform: uppercase;
      // text-shadow: 0.01em 0.01em 0.05em;
      line-height: 1.3;
      border-color: rgba(0, 0, 0, 0.26);
      color: rgb(255, 255, 255);
      transform: perspective(600px);
    }
    .text-color{
      color: $primary-color;
      text-shadow: 0.02em 0.02em 0.03em $primary-color;
    }
    p {
      // letter-spacing: 1px;
      font-size: .95rem;
      padding-bottom: 3rem;
      opacity: 0.85;
      line-height: 1.8;
      padding-top: 1rem;
    }
    h2{
      font-weight: bolder;
    }
    .orange{
      color: $secondary-color;
    }
    .fa-long-arrow-alt-right{
      margin-left: 0rem;
      animation-name: animate;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    .carousel-btn {
      color: #fff;
      background: $secondary-color;
      padding: 1.3rem 2.5rem;
      text-align: center;
      font-size: .9rem;
      font-weight: normal;
      text-decoration: none;
      border-radius: 50px;
      border: none;
      text-transform: capitalize;
    }
    .about__btn{
      border: 1px solid $secondary-color !important;
      background: transparent !important;
      border-radius: 50px !important;
      margin-left: 1.5rem;
    }
  }
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 50px;
    width: 50px;
    background-color: $secondary-color !important;
    background-size: 40%, 40%;
    border-radius: 50%;
    border: 1px solid $secondary-color;
  }
}

@media only screen and (max-width: 600px){
  .carousel-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: rgba(4,9,30,.85) !important;
  }
    .carousel-caption{
      position: absolute;
      top: 10%;
      transform: translateX(-50%, -50%);
      width: 70% !important;
      text-align: center !important;
      h1{
        text-align: center !important;
        font-weight: 700;
        font-size: 1.5rem !important;
        padding-bottom: 1rem;
        letter-spacing: 0.4px;
        text-transform: uppercase;
        text-shadow: 0.03em 0.03em 0.05em #fff;
        line-height: 1.3;
      }
      p{
        font-size: .8rem !important;
        padding-bottom: 2rem !important;
      }
    }
     .carousel-img {
    width: auto;
    height: 65vh !important;
    display: block !important;
    width: 100vw;
  }
}
//Animation for button arrow
@keyframes animate {
    from{
        opacity: 0;
    }
    to{
        transform: translateX(20px);
        opacity: 1;
    }
}
</style>