<template>
  <div class="topbar d-none d-lg-block">
      <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
              <div class="col-md-4 d-none d-lg-block">
                  <p>Contact mail: <a href="mailto:example@gmail.com">almaktoum_foundation@yahoo.com</a></p>
              </div>
               <div class="col-md-4 d-none d-lg-block">
                  <p>Whatsapp Only: <a href="tel:08103515205">+44 7451285918</a></p>
              </div>
              <div class="col-md-4 text-right">
                  <router-link to="/donations" class="topbar__btn">Donate Now</router-link>
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
.topbar{
    background: $secondary-color;
    color: #fff;
   p{
       padding-top: 1rem;
       font-size: .85rem;
       opacity: .95;
   }
   .fa-envelope-open, .fa-phone{
       margin-right: .3rem;
   }
   a{
       color: #fff;
       text-decoration: none;
   }
   .topbar__btn{
       background: #000;
       color: #fff;
       display: inline-block;
       padding: 1rem 2.5rem;
   }
}
</style>