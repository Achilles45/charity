<template>
  <div class="about">
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                  <h1>Welcome to Al Maktoum Foundation</h1>
                  <p>Mohamed Bin Rashid Al-Maktoum Humanitarian and Charity Establishment was founded in 1997 via a decree issued by HH Sheikh Maktoum Bin Rashid Al-Maktoum, Vice President of the UAE, Prime Minister and Ruler of Dubai. <br>
                    Its objective is to undertake humanitarian and charity work extending help to the needy, orphans and widows in the UAE and abroad.
</p>
                  <router-link to="/about" class="about__btn">Read more</router-link><br><br><br>
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
        font-size: .85rem;
        padding-top: 2rem;
        line-height: 2.4;
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