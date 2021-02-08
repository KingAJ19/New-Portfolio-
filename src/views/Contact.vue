<template lang="html">
  <div>
  <mdb-container class="mt-5">
    <mdb-card>
      <mdb-card-title class="mt-4 h2">Contact Me!</mdb-card-title>
      <mdb-card-body>
        <mdb-card-text
          class="pr-5 pl-5"
          mr-4
          ml-4
        >Do you have any questions? Please do not hesitate to contact me directly.</mdb-card-text>
        <form class="needs-validation" novalidate @submit.prevent="submitForm">
          <mdb-row>
            <mdb-col md="8">
              <mdb-row>
                <mdb-col>
                  <mdb-input label="Name" v-model="fields.name" required />
                  <mdb-input label="Surname" v-model="fields.surname" required />
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
          <center>
          <mdb-btn color="primary" type="submit" class="align-middle">Send</mdb-btn>
          </center>
        </form>
      </mdb-card-body>
    </mdb-card>
  </mdb-container>
  </div>
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
        event.target.classList.add("was-validated");
        window.location.href = "mailto:anelesokwane@gmail.com";
      }
    }
  };
</script>
<style>
.container {
    text-align: center;
}
</style>
