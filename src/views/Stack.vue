<template>
<div class="stack page">
  <br>
  <br>
  <v-row>
    <v-col cols="12" md="6" sm="6" xs="9">
      <v-card
    class="mx-auto"
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
          color="primary"
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

  <v-card
    class="mx-auto"
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
          color="primary"
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
    </v-col>
    <v-col cols="12" md="6" sm="6" xs="9">
      <v-card
    class="mx-auto"
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
          color="primary"
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
  
  <v-card
    class="mx-auto"
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
          color="primary"
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
    </v-col>
  </v-row>
<!--        
        <v-card
    class="mx-auto"
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
          color="primary"
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
  </v-card> -->
  <!-- </v-col> -->
</div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
  // <v-card
  //   class="mx-auto"
  //   max-width="344"
  // >
  //   <v-card-text>
  //     <div>Word of the Day</div>
  //     <p class="display-1 text--primary">
  //       el·ee·mos·y·nar·y
  //     </p>
  //     <p>adjective</p>
  //     <div class="text--primary">
  //       relating to or dependent on charity; charitable.<br>
  //       "an eleemosynary educational institution."
  //     </div>
  //   </v-card-text>
  //   <v-card-actions>
  //     <v-btn
  //       text
  //       color="teal accent-4"
  //       @click="reveal = true"
  //     >
  //       Learn More
  //     </v-btn>
  //   </v-card-actions>

  //   <v-expand-transition>
  //     <v-card
  //       v-if="reveal"
  //       class="transition-fast-in-fast-out v-card--reveal"
  //       style="height: 100%;"
  //     >
  //       <v-card-text class="pb-0">
  //         <p class="display-1 text--primary">
  //           Origin
  //         </p>
  //         <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
  //       </v-card-text>
  //       <v-card-actions class="pt-0">
  //         <v-btn
  //           text
  //           color="teal accent-4"
  //           @click="reveal = false"
  //         >
  //           Close
  //         </v-btn>
  //       </v-card-actions>
  //     </v-card>
  //   </v-expand-transition>
  // </v-card>
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>