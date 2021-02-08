<template>
     
       <div
      class="container col-lg-8 col-md-12 col-sm-8 col-xs-9 "
      style="text-align:center">
      <v-flex class="mt-2">
      <v-avatar size="220">
      <img src="/Anele.jpg" alt="Anele">
      </v-avatar>
      </v-flex>
      <br>
    <h2>My name is  <h2 class='lineUp'>Anele Sokwane</h2> I am a Junior Web Developer and a <span class="txt"></span></h2>
    <br>
    <br>
    <div class='line'>
      <a href="https://www.youtube.com/channel/UC1Wr5ovgllU0JZXdx8YXhiQ" target="_blank">
    <i class="youtube huge square icon btnColor"></i>
      </a>
  </div>
  <hr>
  <hr>
  <hr>
  <mdb-container class="mt-5">
    <mdb-card>
      <mdb-card-title class="mt-4 h2">Contact us</mdb-card-title>
      <mdb-card-body>
        <mdb-card-text
          class="pr-5 pl-5"
          mr-4
          ml-4
        >Do you have any questions? Please do not hesitate to contact me directly.<mdb-icon icon="thumbs-up" /></mdb-card-text>
        <form class="needs-validation" novalidate @submit.prevent="submitForm">
          <mdb-row>
            <mdb-col md="8">
              <mdb-row>
                <mdb-col>
                  <mdb-input label="Name" v-model="fields.subject" required />
                  <mdb-input label="Surname" v-model="fields.subject" required />
                  <mdb-input label="Email" v-model="fields.subject" required />
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col>
                  <mdb-input
                    type="textarea"
                    label="Your message"
                    v-model="fields.message"
                    required
                  />
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col md="4">
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="map-marker-alt" size="2x" />
                  <p>San Francisco, CA 94126, USA</p>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="phone" size="2x" />
                  <p>+ 01 234 567 89</p>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="envelope" size="2x" />
                  <p>contact@mdbootstrap.com</p>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
          <center>
          <mdb-btn color="primary" type="submit" class="align-middle">Send</mdb-btn>
          </center>
        </form>
      </mdb-card-body>
    </mdb-card>
  </mdb-container>
  </div>
  <!-- export default{
  name: "Home",
  
} -->
</template>

<script>
  import {
    mdbContainer,
    mdbInput,
    mdbCard,
    //mdbCardHeader,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
    mdbIcon,
    mdbBtn,
    mdbRow,
    mdbCol
  } from "mdbvue";

  export default {
    components: {
      mdbContainer,
      mdbInput,
      mdbCard,
      //mdbCardHeader,
      mdbCardTitle,
      mdbCardBody,
      mdbCardText,
      mdbIcon,
      mdbBtn,
      mdbRow,
      mdbCol
    },
    data() {
      return {
        fields: {
          name: "",
          email: "",
          subject: "",
          message: ""
        }
      };
    },
    methods: {
      submitForm(event) {
        event.target.classList.add("was-validated");
        // submit form
      }
    }
  };
</script>
<style scoped>
.container {
    text-align: center;
}
.btnColor{
  color: red;
}
.line {
  width: 100%;
  height: 9rem;
  overflow: hidden;
  padding: 0;
  margin-bottom: 16px;
}
.lineUp {
  color: red;
  font-style: italic;
  font-weight: 200;
  animation: 2s anim-lineUp ease-out infinite;
}
@keyframes anim-lineUp {
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
h2 .txt::before{
  content: '';
  color: #2BABFF;
  animation: profile 15s infinite;
}
@keyframes profile {
  0% { content: 'Content Creator'}
  25% { content: 'Anime Fan'}
  50% { content: 'Rapper'}
  75% { content: 'Artist'}
  100% { content: 'Basketball Player'}
}
.underline{
  text-decoration: underline;
  color: #FF0000;
}

</style>
