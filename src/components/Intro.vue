<template>
  <div class="intro">
      <div class="container">
          <div class="card__wrapper">
              <div class="card__content">
                  <div class="card__img">
                      <img src="../assets/images/cause-1.jpg" class="img-fluid" alt="">
                  </div>
                  <div class="card__body">
                      <h4>Bring water to children</h4>
                      <p>Having access to regular and clean water is important and it should be accessible to everyone in every part of the world. Help us bring clean water to humanity.</p>
                      <input type="range" class="form-control" min="50%" max="100%">
                      <div class="card__bottom d-flex justify-content-between">
                          <div class="amount">
                              <p>Raised $10,000</p>
                          </div>
                           <div class="target">
                              <p>Goal $50,000</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="card__content">
                  <div class="card__img">
                      <img src="../assets/images/cause-2.jpg" class="img-fluid" alt="">
                  </div>
                  <div class="card__body">
                      <h4>Education for all</h4>
                      <p>Education should be right of everyone irrespective of religion, location, race and color. Let's bring quality education to everyone.</p>
                      <input type="range" class="form-control" min="50%" max="100%">
                      <div class="card__bottom d-flex justify-content-between">
                          <div class="amount">
                              <p>Raised $100,000</p>
                          </div>
                           <div class="target">
                              <p>Goal $500,000</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="card__content">
                  <div class="card__img">
                      <img src="../assets/images/cause-3.jpg" class="img-fluid" alt="">
                  </div>
                  <div class="card__body">
                      <h4>Good health to children</h4>
                      <p>There is food shortage in many parts of the world and we want to alleviate the situation by supporting the vulnerable ones. Your donations go a long way!</p>
                      <input type="range" class="form-control" min="50%" max="100%">
                      <div class="card__bottom d-flex justify-content-between">
                          <div class="amount">
                              <p>Raised $60,000</p>
                          </div>
                           <div class="target">
                              <p>Goal $120,000</p>
                          </div>
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
@import '../assets/styles/colors';
.intro{
    padding: 4rem 0;
    .card__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        // grid-gap: 10px;
        .card__content{
            padding: 2rem;
            border-radius: 4px;
            .card__body{
                padding: 2rem 2rem;
                box-shadow: rgba(71,72,121,0.15) 1px 5px 20px 0px;
                h4{
                    font-size: 1rem;
                    font-weight: bold;
                    color: #333;
                    padding-top: .2rem;
                }
                p{
                    font-size: .9rem;
                    padding-top: .5rem;
                    line-height: 1.9;
                    color: #627081;
                }
            }
        }
    }
}
</style>