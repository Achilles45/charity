<template>
  <div class="footer">
      <div class="container">
          <div class="row">
              <div class="col-md-4">
                  <h4>Al Maktoum Foundation</h4>
                  <p>The Establishment's endeavors focus on international relief work in areas stricken by wars and other disasters. It also provides health programs at home and abroad. Within the UAE it has covered the cost of surgical operations and other forms of medical treatment for the poor... </p>
              </div>
              <div class="col-md-4">
                  <h4>Useful Links</h4>
                  <ul>
                      <li><router-link to="/">Home</router-link></li>
                      <li><router-link to="/">About Us</router-link></li>
                      <li><router-link to="/">Contact Us</router-link></li>
                      <li><router-link to="/">Donate</router-link></li>
                  </ul>
              </div>
              <div class="col-md-4">
                  <h4>Contact</h4>
                  <h6><i class="fa fa-phone"></i>+45 677 8993000 223</h6>
                  <h6><i class="fa fa-envelope-open"></i>office@example.com</h6>
                  <h6><i class="fa fa-map-marker"></i>Dubia</h6>
                  <form>
                      <div class="form-group">
                          <input type="text" class="form-control" placeholder="Your email">
                      </div>
                      <button type="submit" class="footer__btn">Send</button>
                  </form>
              </div>
          </div>
      </div>
      <div class="footer__bottom">
          <div class="container">
              <div class="row">
                  <div class="col-12 text-center">
                      <small>Al Maktoum Foundation. Copyright &copy; All rights reserved. 2020</small>
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
.footer{
    padding-top: 6rem;
    background: linear-gradient(rgba(0,0,0,.85), rgba(0,0,0,.85)), url('../assets/images/foot-bg.jpg');
    background-position: center;
    background-size: cover;
    color: #fff;
    p{
        font-size: .9rem;
        opacity: .6;
        line-height: 2;
        padding-top: .5rem;
    }
    h4{
        padding-bottom: 2rem;
    }
    h6{
        font-size: .9rem;
        opacity: .6;
        line-height: 2;
    }
    .fa-phone, .fa-envelope-open, .fa-map-marker{
        color: $secondary-color;
        margin-right: 1rem;
    }
    a{
        color: #fff;
        font-size: .9rem;
        opacity: .6;
        line-height: 3;
    }
    form{
        padding-top: 1rem;
        input{
            // flex: 8;
            height: 3rem;
            box-shadow: none;
            border: none;
            border-radius: 0;
        }
        .footer__btn{
            flex: 2;
            border: none;
            padding: 1rem .5rem;
            height: 3rem;
            outline: none;
            background: $secondary-color;
            color: #fff;
            width: 100%;
        }
    }
    .footer__bottom{
        background: #131212;
        color: #fff;
        padding: 1.5rem 0;
        margin-top: 4rem;
        small{
            opacity: .7;
        }
    }
}
</style>