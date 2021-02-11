<template lang="html">
  <mdb-container class="mt-5">
    <mdb-card>
      <mdb-card-title class="mt-4 h2">Contact Me</mdb-card-title>
      <mdb-card-body>
        <mdb-card-text
          class="pr-5 pl-5"
          mr-6
          ml-6
        >Please do not hesitate to contact me directly.</mdb-card-text>
        <form class="needs-validation" novalidate @submit.prevent="submitForm">
          <mdb-row>
            <mdb-col md="8">
              <mdb-row>
                <mdb-col>
                  <mdb-input label="Name" v-model="fields.name" required />
                  <mdb-input label="Surname" v-model="fields.surname" required />
                  <mdb-input label="Email" v-model="fields.email" required />
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
                  <p>Cape Town, Western Cape</p>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="phone" size="2x" />
                  <p>081 553 9120</p>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="envelope" size="2x" />
                  <p>anelesokwane@gmail.com</p>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
          <br>
          <center>
          <mdb-btn color="primary" @click="sendEmail" type="submit" class="align-middle">Send</mdb-btn>
          </center>
        </form>
        <hr class="hr-light my-4"/>
              <ul class="list-inline text-center list-unstyled">
                <li class="list-inline-item">
                  <a class="p-2 fa-lg w-ic" href="https://twitter.com/anelesokwane19" target="_blank">
                    <i class="fab fa-twitter fa-2x"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="p-2 fa-lg w-ic" href="https://www.youtube.com/channel/UC1Wr5ovgllU0JZXdx8YXhiQ" target="_blank">
                   <i class="fab fa-youtube fa-2x"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="p-2 fa-lg w-ic" href="https://www.instagram.com/anele_sokwane/?hl=en" target="_blank">
                    <i class="fab fa-instagram fa-2x"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="p-2 fa-lg w-ic" href="https://github.com/KingAJ19" target="_blank">
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                </li>
              </ul>
      </mdb-card-body>
    </mdb-card>
  </mdb-container>
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
          surname: "",
          message: ""
        }
      };
    },
    methods: {
      submitForm(event) {
        event.target.classList.add("was-validated")
        // window.location.href = "mailto:anelesokwane@gmail.com";
        // window.open('mailto:anelesokwane@gmail.com?subject=subject&body=body');
      },
      sendEmail(){
        if (this.fields.length === 0){
         window.location.href = "mailto:anelesokwane@gmail.com";
        } else {
          alert('Please fill in all the fields!')
        }
      }
    }
  };
</script>
<style>
.container {
    text-align: center;
    /* outline: none !important; */
}
</style>
