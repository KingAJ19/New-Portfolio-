<template>
<div class="stack page">
  <br>
  <v-row>
    <v-col cols="12" md="4" sm="6" xs="9">
      <v-card
    class="mx-auto animate__animated animate__backInUp"
    max-width="344"
  >
    <v-card-text>
      <v-img src="/vue.png"
              height="225"
              class="grey darken-4">
      </v-img>
    </v-card-text>
    <v-card-actions>
        <v-btn
          color="teal"
          dark
          @click="dialog = true"
        >
          Learn More
        </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="dialog === true"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="display-1 text--primary">
            VueJS
          </p>
          <h3>I've been using Vue for the past 5 months. </h3>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
<br>
  <v-card
    class="mx-auto animate__animated animate__backInUp"
    max-width="344"
  >
    <v-card-text>
      <v-img src="/python.jpg"
              height="225"
              class="grey darken-4">
      </v-img>
    </v-card-text>
    <v-card-actions>
        <v-btn
          color="#FFE873"
          dark
          @click="dialog2 = true"
        >
          Learn More
        </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="dialog2 === true"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="display-1 text--primary">
            Python
          </p>
          <h3>I've been using Python for the past 5 months. </h3>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="#FFE873"
            @click="dialog2 = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
    </v-col>
    <v-col cols="12" md="4" sm="6" xs="9">
      <v-card
    class="mx-auto animate__animated animate__backInUp"
    max-width="344"
  >
    <v-card-text>
      <v-img src="/html.jpg"
              height="225"
              class="grey darken-4">
      </v-img>
    </v-card-text>
    <v-card-actions>
        <v-btn
          color="warning"
          dark
          @click="dialog3 = true"
        >
          Learn More
        </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="dialog3 === true"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="display-1 text--primary">
            HTML
          </p>
          <h3>I've been using HTML for the past 5 months. </h3>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="warning"
            @click="dialog3 = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
  <br>
  <v-card
    class="mx-auto animate__animated animate__backInUp"
    max-width="344"
  >
    <v-card-text>
      <v-img src="/css.jpg"
              height="225"
              class="grey darken-4">
      </v-img>
    </v-card-text>
    <v-card-actions>
        <v-btn
          color="primary accent-4"
          dark
          @click="dialog4 = true"
        >
          Learn More
        </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="dialog4 === true"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="display-1 text--primary">
            CSS
          </p>
          <h3>I've been using CSS for the past 5 months. </h3>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="primary accent-4"
            @click="dialog4 = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
    </v-col>
    <v-col cols="12" md="4" sm="6" xs="9">
      <v-card
    class="mx-auto animate__animated animate__backInUp"
    max-width="344"
  >
    <v-card-text>
      <v-img src="/js.jpg"
              height="225"
              class="grey darken-4">
      </v-img>
    </v-card-text>
    <v-card-actions>
        <v-btn
          color="yellow"
          class="white--text text--darken-5"
          dark
          @click="dialog5 = true"
        >
          Learn More
        </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="dialog5 === true"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="display-1 text--primary">
            Javascript
          </p>
          <h3>I've been using Javascript for the past 5 months. </h3>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="yellow"
            @click="dialog5 = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
  <br>
  <v-card
    class="mx-auto animate__animated animate__backInUp"
    max-width="344"
  >
    <v-card-text>
      <v-img src="/react.jpg"
              height="225"
              class="grey darken-4">
      </v-img>
    </v-card-text>
    <v-card-actions>
        <v-btn
          color="black"
          dark
          @click="dialog6 = true"
        >
          Learn More
        </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="dialog6 === true"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="display-1 text--primary">
            React
          </p>
          <h3>I've been using React for the past 5 months. </h3>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn 
            text
            color="black"
            @click="dialog6 = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
    </v-col>
    <v-col cols="12" md="4" sm="6" xs="9">
  
  <br>
  <v-card
    class="mx-auto animate__animated animate__backInUp"
    max-width="344"
  >
    <v-card-text>
      <v-img src="/node.jpg"
              height="203"
              class="grey darken-4">
      </v-img>
    </v-card-text>
    <v-card-actions>
        <v-btn
          color="green"
          dark
          @click="dialog8 = true"
        >
          Learn More
        </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="dialog8 === true"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="display-1 text--primary">
            Node
          </p>
          <h3>I've been using Node for the past 5 months. </h3>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn 
            text
            color="green"
            @click="dialog8 = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
    </v-col>
  </v-row>

</div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
        dialog5: false,
        dialog6: false,
        dialog8: false
      }
    },
  }
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>