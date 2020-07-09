<template>
  <div class="about">
    <Topbar />
    <Navbar />
    <div class="about__header">
      <div class="container">
        <h2>About Al Maktoum Foundation</h2>
        <p>Learn more about us here</p>
      </div>
    </div>
    <div class="main__content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p>Mohamed Bin Rashid Al-Maktoum Humanitarian and Charity Establishment was founded in 1997 via a decree issued by HH Sheikh Maktoum Bin Rashid Al-Maktoum, Vice President of the UAE, Prime Minister and Ruler of Dubai. <br>

Its objective is to undertake humanitarian and charity work extending help to the needy, orphans and widows in the UAE and abroad.

Since its inception, the Establishment has managed to be one of the leading active charity organizations through its well-planned schemes to assist the needy, the sick, and disaster-stricken people in the UAE and abroad. <br>

The Establishment's endeavors focus on international relief work in areas stricken by wars and other disasters. It also provides health programs at home and abroad. Within the UAE it has covered the cost of surgical operations and other forms of medical treatment for the poor. It has also provided medical equipment for several medical departments at UAE hospitals. These included artificial respiration, kidney dialysis etc. <br>

Moreover, it provides artificial limbs and similar tools needed by those with special needs. It has also launched a cardiac treatment program.

Examples of the Establishment's endeavors abroad include relief work for victims of the 1999 earthquake in Turkey. Medical supplies, first aid material, and drugs were expeditiously dispatched. <br>

Moreover, the Establishment launched a major relief campaign for the Palestinian people as of the year 2000. Beside offering help to victims, the Establishment built a number of standing and mobile hospitals, offered medical assistance, and contributed to a project for the treatment of those wounded during the Intifada (Palestinian uprising) in UAE hospitals. <br>

During the Afghan crisis, the Establishment was the first to establish camps for the refugees, and supplied these with doctors and nurses to help treat the sick.

Additionally, the Establishment undertook relief works in South-East Asian and African countries, especially the Sudan when the Kasala region was stricken by a Nile flood. The relief works included the provision of medical teams to help with the treatment of diseases usually accompanying floods, such as malaria and bilharzias. Other relief works were also undertaken in quake-stricken regions in Algeria and Iran. <br>

During 2003-2004 the Establishment was active in Iraq, providing medical support for the Iraqi people who were badly affected by the war.

It has also supplied Al-Karama Hospital with equipment and drugs, and helped rehabilitate and operate other hospitals in Iraq. The Establishment's endeavors are not limited to the medical field; they also include the building of schools as well as social and charity organizations. <br>

It is for these achievements and the invaluable services rendered by the Mohammed Bin Rashid Al Maktoum Humanitarian & Charity Establishment deserves the Hamdan Award for Volunteers in Humanitarian Medical Services for the year 2003-2004.</p>
<h3>Ongoing infrastructure</h3>
<p>We have ongoing infrastructure in africa Nigeria, which worth the sum of $100,000,000 which  a lot of help and support is been made, to build a orphanage homes, schools,hospitality, and fund raising.</p>
<br>
<h3>Why we need to help the kids</h3>
<p>Because YOU CAN. <br>
If we look at, what a poor is : "Poor-lacking sufficient money to live at a standard considered comfortable or normal in a society"
We got all the opportunities and right circumstances to live a standard life, but somehow(whatever be the reason) they haven't got that, and that's why they are poor. If you believe in God. He has given you that money which can be put to many uses. You can use it wisely or waste it. <br>Many people throw away kilos of food daily, but why can't we use our money efficiently, don't cook that extra food which is being thrown, save that money, and give it to poor, they can also have a meal. They are also working hard to live a standard life, we can help them today in their bad days, maybe someday they will also catch up. <br>It sounds philosophical but...Why not help POOR people, or in a more general sense, why not help PEOPLE. Why not become more EFFICIENT?</p><br>
<h3>We don't help the poor kids alone</h3>
<p>We help the less privileged, like disable, support with finance to any pleasant businesses idea, setting up a charity organization in donor country if he/she calls for help</p><br><br>
<router-link to="/donations" class="about__btn">Donate Now</router-link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
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
.about{
  .about__header{
    padding: 5rem 0;
    background: linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url('../assets/images/welcome-bg.jpg');
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
    h3{
      font-weight: bold;
      color: #2b2b2b;
    }
    p{
      font-size: .9rem;
      line-height: 2.4;
      color: #627081;
    }
    .about__btn{
      background: $secondary-color;
      text-decoration: none;
      border-radius: 50px;
      padding: 1.3rem 3rem;
      color: #fff;
    }
  }
}
</style>