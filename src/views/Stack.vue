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
          <p class="display-1" id="vue">
            Vue
          </p>
          <h3>I've been using Vue for the past 5 months. It has become one of my favourite Javascript frameworks to use and it was easy to learn. The two-way binding is one of my favourite features of Vue.</h3>
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
          <p class="display-1" id="python">
            Python
          </p>
          <h3>Python is the first programming language that I've learnt. I did a lot of Python projects in order to understand it better. The syntax is English-like, so that made it easier to read and write code.</h3>
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
          <p class="display-1" id="html">
            HTML
          </p>
          <h3>HTML is the first language I learnt. It was extremely easy to learn because it's just plain text. I got much better at understanding how to structure webpages and layouts after practicing it for so long.</h3>
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
          <p class="display-1" id="css">
            CSS
          </p>
          <h3>I had to learn CSS at the same time that I learnt HTML. At first I was always confused about classes, id's and media queries but now it's like second nature to me.</h3>
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
          <p class="display-1" id="js">
            Javascript
          </p>
          <h3>It took me a really long time to understand the syntax and how to create functions. I mostly use frameworks so the Javascript is already done for me but I'm able to write and understand Javascript code.</h3>
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
          <h3>React was the first framework that I used. The fact that it uses JSX made it that much easier to learn. React is very flexible and easily maintainable. I hardly use React anymore ever since I discovered Vue.</h3>
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
          <p class="display-1" id="node">
            Node
          </p>
          <h3>I rarely use Node since I prefer the frontend but when I do - I use it for it's package management and whenever I need to set up and express server or make HTTP requests.</h3>
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
#vue{
  color: teal;
}
#python{
  color: #FFE873;
}
#html{
  color: #fb8c00;
}
#css{
  color: #2196f3;
}
#node{
  color: #3c873a;
}
</style>