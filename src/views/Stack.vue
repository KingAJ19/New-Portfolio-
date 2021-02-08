<template>
  <v-container fluid grid-list-lg>
    <br>
    <v-layout row wrap>
      <v-flex xs12>
        <v-subheader class="pl-0">React</v-subheader>
        <v-slider
          readonly
          thumb-color="black"
          v-model="slider2"
          thumb-label="always"
        ></v-slider>
      </v-flex>
      <v-flex xs12>
        <v-subheader class="pl-0">VueJS</v-subheader>
        <v-slider
          readonly
          v-model="slider"
          thumb-color="green"
          thumb-label="always"
        ></v-slider>
      </v-flex>

      <v-flex xs12>
        <v-subheader class="pl-0">CSS</v-subheader>
        <v-slider
          readonly
          v-model="slider4"
          thumb-color="blue"
          thumb-label="always"
        ></v-slider>
      </v-flex>

      <v-flex xs12>
        <v-subheader class="pl-0">HTML</v-subheader>
        <v-slider
          readonly
          v-model="slider3"
          thumb-color="orange"
          thumb-label="always"
        ></v-slider>
      </v-flex>

      <v-flex xs12>
        <v-subheader class="pl-0">Python</v-subheader>
        <v-slider
          readonly
          v-model="slider6"
          thumb-color="#0F5298"
          thumb-label="always"
        ></v-slider>
      </v-flex>

      <v-flex xs12>
        <v-subheader class="pl-0">Javascript</v-subheader>
        <v-slider
          readonly
          v-model="slider5"
          thumb-color="#F8EA27"
          thumb-label="always"
        ></v-slider>
      </v-flex>

      <v-flex xs12>
        <v-subheader class="pl-0">NodeJS</v-subheader>
        <v-slider
          readonly
          v-model="slider7"
          thumb-color="#3C873A"
          thumb-label="always"
        ></v-slider>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Stack",
  data () {
      return {
        slider: 81,
        slider2: 74,
        slider3: 93,
        slider4: 89,
        slider5: 76,
        slider6: 69,
        slider7: 47
      }
    },
}
</script>

<style>

</style>