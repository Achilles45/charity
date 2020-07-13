<template>
  <div class="causes">
      <Topbar />
      <Navbar />
       <div class="causes__header">
      <div class="container">
        <h2>Our Causes</h2>
      </div>
    </div>
    <div class="main__content">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Featured Causes</h2>
                </div>
            </div>
            <div class="featured__wrapper">
                <div class="featured__card">
                    <div class="row">
                        <div class="col-md-6 img__holder">
                            <img src="../assets/images/featured-causes.jpg" class="img-fluid" alt="">
                        </div>
                        <div class="col-md-6">
                            <h5>Fundraiser for Kids</h5>
                            <small>June, 2020</small>
                            <p>Children suffer most during wars and natural crises and they are the leaders of tomorrow. Give them hope again with your donations.</p>
                            <router-link to="/donations" class="donate__btn">Donate Now</router-link><br><br><br>
                        </div>
                    </div>
                    <input type="range" class="form-control" min="50%" max="100%">
                    <div class="card__bottom d-flex justify-content-between">
                          <div class="amount">
                              <p>Raised $40,000</p>
                          </div>
                           <div class="target">
                              <p>Goal $100,000</p>
                          </div>
                      </div>
                </div>
                <div class="featured__card">
                    <div class="row">
                        <div class="col-md-6 img__holder">
                            <img src="../assets/images/eye-for.jpg" class="img-fluid" alt="">
                        </div>
                        <div class="col-md-6">
                            <h5>Supporting The Girl Child</h5>
                            <small>June, 2020</small>
                            <p>The importance of the girl child in the society cannot be over emphasized. We want to raise a generation of women that can lead from around the globe.</p>
                            <router-link to="/donations" class="donate__btn">Donate Now</router-link><br><br><br>
                        </div>
                    </div>
                    <input type="range" class="form-control" min="50%" max="100%">
                    <div class="card__bottom d-flex justify-content-between">
                          <div class="amount">
                              <p>Raised $20,000</p>
                          </div>
                           <div class="target">
                              <p>Goal $200,000</p>
                          </div>
                      </div>
                </div>
            </div>
            <div class="card__wrapper2">
            <div class="card">
                <img class="card-img-top" src="../assets/images/cause-1.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Bring water to children</h5>
                    <p class="card-text">Support and help provide access to running, clean and affordable water for millions of children all over the word.</p>
                    <router-link to="/donations" class="card__btn">Donate Now</router-link><br><br>
                </div>
                </div>
                 <div class="card">
                <img class="card-img-top" src="../assets/images/cause-2.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Education for all</h5>
                    <p class="card-text">The best gift we can give to mankind is the opportunity of having a quality education and everyone deserves this.</p>
                    <router-link to="/donations" class="card__btn">Donate Now</router-link><br><br>
                </div>
                </div>
                 <div class="card">
                <img class="card-img-top" src="../assets/images/cause-3.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Help children stay healthy</h5>
                    <p class="card-text">Millions of children all over the world are suffering from malnutrition and we want to remedy the situation.</p>
                   <router-link to="/donations" class="card__btn">Donate Now</router-link><br><br>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="intro__wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1>We love to help all the children that have problems in the world. After 15 years we have many goals achieved.</h1>
                    <p>Our vision is to have a world where opportunities are evenly distributed and accessible irrespective of your age, color, race and religion. Join us today!</p>
                    <input type="range" class="form-control" min="10%" max="10%">
                    <div class="card__bottom d-flex justify-content-between mb-5">
                          <div class="amount">
                              <p>Raised $3,000,000</p>
                          </div>
                           <div class="target">
                              <p>Goal $10,000,000</p>
                          </div>
                      </div>
                      <router-link to="/donations" class="donate__btn">Donate Now</router-link><br><br>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-5">
                    <img src="../assets/images/oshomah.jpg" class="img-fluid" alt="">
                </div>
            </div>
        </div>
    </div>
     <div class="last__cards mb-5">
         <div class="container">
             <div class="card__wrapper2 ">
            <div class="card">
                <img class="card-img-top" src="../assets/images/cause-1.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Support victims of war</h5>
                    <p class="card-text">War and tribal conflicts is causing lots of damage to so many places in the world expecially in Africa. Put smiles in people faces with any donations.</p>
                    <router-link to="/donations" class="card__btn">Donate Now</router-link><br><br>
                </div>
                </div>
                 <div class="card">
                <img class="card-img-top" src="../assets/images/cause-2.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Good accomodation for all</h5>
                    <p class="card-text">Having a good and safe place to lay your head at night is so important to thrive. Help bring good accomodation to all.</p>
                    <router-link to="/donations" class="card__btn">Donate Now</router-link><br><br>
                </div>
                </div>
                 <div class="card">
                <img class="card-img-top" src="../assets/images/cause-3.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Bring hope to all</h5>
                    <p class="card-text">Support other initiatives of ours that is tragetted at making the world a better place by helping people of all ages, race and religion.</p>
                   <router-link to="/donations" class="card__btn">Donate Now</router-link><br><br>
                </div>
                </div>
            </div>
         </div>
     </div><br>
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
@import '../assets/styles/_colors';
.causes{
    .causes__header{
    padding: 5rem 0;
    background: linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url('../assets/images/banner2.jpg');
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
      h2{
          font-weight: bold;
          color: #2b2b2b;
      }
      .featured__wrapper{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 30px;
          margin-top: 2rem;
          .featured__card{
              background: #EDF3F5;
              padding: 3rem;
              border-radius: 4px;
              h5{
                  font-weight: bold;
                  color: #333;
                  font-size: 1rem;
              }
              p{
                  padding-top: 1rem;
                  color: #627081;
                  font-size: .9rem;
                  line-height: 1.8;
                  padding-bottom: 1.4rem;
              }
              .donate__btn{
                  background: $secondary-color;
                  color: #fff;
                  text-decoration: none;
                  padding: 1rem 2rem;
                  border-radius: 50px;
              }
          }
      }
      .card__wrapper2{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 30px;
          margin-top: 5rem;
          .card{
              .card-title{
                  color: #2b2b2b;
                  font-weight: bold;
                  font-size: 1rem;
                  padding-top: .8rem;
              }
              .card-text{
                  color: #627081;
                  line-height: 1.8;
                  font-size: .9rem;
                  padding-top: .4rem;
                  padding-bottom: 1.5rem;
              }
              .card__btn{
                background: $secondary-color;
                color: #fff;
                text-decoration: none;
                padding: 1rem 2.5rem;
                border-radius: 50px;
              }
          }
      }
  }

  .intro__wrapper{
      background: #262626;
      color: #fff;
      padding: 5rem 0;
      h1{
          font-weight: bold;
          font-size: 2rem;
          line-height: 2;
      }
      p{
          opacity: .8;
          font-size: .9rem;
          padding-top: 2rem;
          line-height: 2;
      }
       .donate__btn{
        background: $secondary-color;
        color: #fff;
        text-decoration: none;
        padding: 1.25rem 2.5rem;
        border-radius: 50px;
    }
  }
    .card__wrapper2{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 30px;
          margin-top: 5rem;
          .card{
              .card-title{
                  color: #2b2b2b;
                  font-weight: bold;
                  font-size: 1rem;
                  padding-top: .8rem;
              }
              .card-text{
                  color: #627081;
                  line-height: 1.8;
                  font-size: .9rem;
                  padding-top: .4rem;
                  padding-bottom: 1.5rem;
              }
              .card__btn{
                background: $secondary-color;
                color: #fff;
                text-decoration: none;
                padding: 1rem 2.5rem;
                border-radius: 50px;
              }
          }
      }
}
</style>