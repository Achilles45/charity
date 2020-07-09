<template>
  <div class="about">
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                  <h1>Welcome to Al Maktoum Foundation</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolor ullam a cum! Voluptatem dolores adipisci expedita, dolorem reiciendis exercitationem doloremque vero dicta? Eum culpa neque eius officia repellat consequatur dolores adipisci error asperiores labore sit, facilis incidunt non quo ducimus alias recusandae temporibus harum dolorum quam! Rem, nihil temporibus.</p>
                  <router-link to="/about" class="about__btn">Read more</router-link>
              </div>
              <div class="col-md-6">
                  <img src="../assets/images/welcome.jpg" class="img-fluid" alt="">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.about{
    padding: 7rem 0;
    background: linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url('../assets/images/welcome-bg.jpg');
    background-position: center;
    background-size: cover;
    color: #fff;
    h1{
        font-weight: bold;
    }
    p{
        font-size: .9rem;
        padding-top: 2rem;
        line-height: 2.2;
        opacity: .8;
        padding-bottom: 3rem;
    }
    .about__btn{
        background: $secondary-color;
        color: #fff;
        text-decoration: none;
        border-radius: 50px;
        padding: 1.4rem 3rem;
    }
}
</style>