<template>
  <div class="donate">
      <Topbar />
      <Navbar />
       <div class="donate__header">
      <div class="container">
        <h2>Make Donations</h2>
        <p>Kindly support our causes today!</p>
      </div>
    </div>
    <div class="main__content">
        <div class="container">
            <h1>We accept donations in any form</h1>
            <div class="card__wrapper">
                <div class="card__content">
                    <img src="../assets/images/cards.png" class="img-fluid" alt="">
                </div>
                 <!-- <div class="card__content">
                    <img src="../assets/images/paypal.jpg" class="img-fluid paypal" alt="">
                </div>
                 <div class="card__content">
                    <img src="../assets/images/bitcoin.png" class="img-fluid bitcoin" alt="">
                </div> -->
            </div>
            <hr>
            <div class="row">
                <div class="col-md-12">
                    <form @submit.prevent="donate()">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Full Name" v-model="name">
                        </div>
                         <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email Address" v-model="email">
                        </div>
                        <div class="form-group">
                            <select id="country" name="country" v-model="country" class="form-control">
                                <option value="Afganistan">Afghanistan</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bonaire">Bonaire</option>
                                <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                <option value="Brunei">Brunei</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Canary Islands">Canary Islands</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Channel Islands">Channel Islands</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Cocos Island">Cocos Island</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cote DIvoire">Cote DIvoire</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Curaco">Curacao</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="East Timor">East Timor</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands">Falkland Islands</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="French Southern Ter">French Southern Ter</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Great Britain">Great Britain</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="India">India</option>
                                <option value="Iran">Iran</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Korea North">Korea North</option>
                                <option value="Korea Sout">Korea South</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Laos">Laos</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libya">Libya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macau">Macau</option>
                                <option value="Macedonia">Macedonia</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Midway Islands">Midway Islands</option>
                                <option value="Moldova">Moldova</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Nambia">Nambia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherland Antilles">Netherland Antilles</option>
                                <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                <option value="Nevis">Nevis</option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau Island">Palau Island</option>
                                <option value="Palestine">Palestine</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Phillipines">Philippines</option>
                                <option value="Pitcairn Island">Pitcairn Island</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Republic of Montenegro">Republic of Montenegro</option>
                                <option value="Republic of Serbia">Republic of Serbia</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russia">Russia</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="St Barthelemy">St Barthelemy</option>
                                <option value="St Eustatius">St Eustatius</option>
                                <option value="St Helena">St Helena</option>
                                <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                <option value="St Lucia">St Lucia</option>
                                <option value="St Maarten">St Maarten</option>
                                <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                <option value="Saipan">Saipan</option>
                                <option value="Samoa">Samoa</option>
                                <option value="Samoa American">Samoa American</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syria">Syria</option>
                                <option value="Tahiti">Tahiti</option>
                                <option value="Taiwan">Taiwan</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania">Tanzania</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Erimates">United Arab Emirates</option>
                                <option value="United States of America">United States of America</option>
                                <option value="Uraguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Vatican City State">Vatican City State</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                <option value="Wake Island">Wake Island</option>
                                <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zaire">Zaire</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                            </select>
                            <small id="passwordHelpBlock" class="form-text text-muted">
                                Please select your current country of residence
                            </small>
                        </div>
                        <div class="form-group">
                            <select name="" id="" v-model="payment" class="form-control">
                                <option value="Bank-transfer">Direct Bank Transfer</option>
                                <option value="Western-union">Western Union</option>
                                <option value="Money-gram">Money Gram</option>
                                <option value="Bitcoin">Bitcoin</option>
                            </select>
                            <small id="passwordHelpBlock" class="form-text text-muted">
                                Please select your preferred method of payment
                            </small>
                        </div>
                        <div class="form-group">
                            <input type="number" class="form-control" placeholder="Amount in USD" v-model="amount">
                        </div>
                         <small id="passwordHelpBlock" class="form-text text-muted">
                                Kindly note that we don't process payments so you can be sure that your details are safely encrypted.
                            </small> <br>
                        <div v-if="err" class="alert alert-danger">
                            {{err}}
                        </div>
                         <div v-if="success" class="alert alert-success">
                            {{success}}
                        </div><br><br>
                        <button type="submit" class="donate__btn">Donate Now</button>
                    </form>
                    <!-- <div >
                        <p>Upload Your Proof of Payment:</p>
                        <input type="file" @change="previewImage" accept="image/*" >
                        </div>
                        <div>
                        <p>Progress: {{uploadValue.toFixed()+"%"}}
                        <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
                        </div>
                        <div v-if="imageData!=null">
                            <img class="preview" :src="picture">
                            <br>
                        <button @click="onUpload" class="upload__btn">Upload Proof</button>
                        </div> -->
                </div>
            </div>
        </div>
    </div>
      <Footer />
  </div>
</template>

<script>
import firebase from 'firebase'
import db from "@/firebase/init"
import Topbar from '@/components/Topbar.vue'
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
export default {
    components:{
        Topbar,
        Navbar,
        Footer
    },
    data(){
        return{
            name: null,
            email: null,
            country: null,
            payment: null,
            amount: null,
            err: null,
            success: null,
            imageData:null,
            picture:null,
            uploadValue: 0
        }
    },
    methods:{
        donate(){
            //Check if the user has filled out his details
            if(!this.name || !this.email || !this.country || !this.payment || !this.amount){
                this.err = "Oops! Please completely fill out the form and try again"
                this.clearAlerts()
            }else{
                db.collection('donors').add({
                    name: this.name,
                    email: this.email,
                    country: this.country,
                    payment: this.payment,
                    amount: this.amount
                }).then(()=>{
                    this.success = "Thank you for showing interest in helping the poor. You will receive payment details soon. Kindly upload your proof of payment afterwards."
                })
            }
        },
         previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },
          onUpload(){
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
        //   this.picture =url;
        });
      }
      );
    },
        clearAlerts(){
            setTimeout(() => {
                document.querySelector('.alert').remove()
            }, 4000);
        }
    },
     mounted(){
        //Get current user that just logged in
        let user = firebase.auth().currentUser

        //Now check the database to fetch the details
        db.collection('donors').where("donor_id", "==", donor.uid).get().then(snapshot =>{
            snapshot.forEach((doc) =>{
                this.name = doc.data().name,
                this.email = doc.data().email,
                this.id = doc.data().user_id
            })
        })
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.donate{
    background: #f6f6f6;
    .upload__btn{
    background: #000;
    border:none;
    color: #fff;
    padding: 1rem 3rem;
    border-radius: 3px;
    font-size: .8rem;
}
    .donate__header{
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
      margin-bottom: 3rem;
      h1{
          font-weight: bold;
          color: #333;
          padding-bottom: 1rem;
          text-transform: capitalize;
      }
      .card__wrapper{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        //   grid-gap: 20px;
          .card__content{
              .paypal{
                  max-width: 200px;
                  height: auto;
              }
              .bitcoin{
                  max-width: 150px;
                  height: auto;
              }
          }
      }
      form{
            background: #fff;
            box-shadow: rgba(71,72,121,0.15) 1px 5px 20px 0px;
            padding: 4rem 3rem;
            border-radius: 10px;
            margin-top: 2rem;
            input, select{
                height: 3.2rem;
                box-shadow: none;
                color: #627081;
                &::placeholder{
                    color: #627081;
                    font-size: .9rem;
                }
            }
            small{
                color: #627081;
                font-weight: bold;
                opacity: .8;
            }
            .donate__btn{
                background: $secondary-color;
                border: none;
                padding: 1.2rem 3rem;
                text-decoration: none;
                color: #fff;
                border-radius: 50px;
                outline: none;
            }
      }
  }
}
</style>