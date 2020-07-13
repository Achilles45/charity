<template>
  <div class="numbers">
      <div class="container">
          <div class="row">
              <div class="col-md-6 text">
                  <h2>We love to help all the children that have problems in the world. After 15 years we have many goals achieved.</h2>
                  <p>It is our mandate and collective responsibility to make the world a better day than we met it. Supporting the less privilege is a core at what we do and we anticipate your donations from any part of the world</p>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-5">
                  <div class="card__wrapper">
                      <div class="card__content">
                          <img src="../assets/images/teamwork.png" class="img-fluid" alt="">
                          <h3>120K+</h3>
                          <p>Children Helped</p>
                      </div>
                       <div class="card__content">
                          <img src="../assets/images/donation.png" class="img-fluid" alt="">
                          <h3>120K+</h3>
                          <p>Children Helped</p>
                      </div>
                       <div class="card__content">
                          <img src="../assets/images/dove.png" class="img-fluid" alt="">
                          <h3>120K+</h3>
                          <p>Children Helped</p>
                      </div>
                  </div>
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
.numbers{
    padding: 5rem 0;
    position: relative;
    .text{
        h2{
            line-height: 1.5;
            font-size: 2.4rem;
            color: #333;
        }
        p{
            color: #627081;
            padding-top: 1rem;
            line-height: 2;
        }
    }
    .card__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-gap: 20px;
        // position: absolute;
        // width: 100%;
        // bottom: 0;
        .card__content{
            h3{
                padding-top: 2rem;
                font-weight: bold;
                font-size: 2rem;
                color: #333;
            }
            p{
                color: #627081;
                padding-top: 1rem;
            }
        }
    }
}
</style>