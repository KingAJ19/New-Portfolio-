<template>
  <div class="languages">
    <v-container class="my-6">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="language in languages" :key="language.name">
          <v-card text class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100"> 
                <img :src="language.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="heading font-weight-bold">{{ language.name }}</div>
              <div class="black--text">{{ language.description }}</div>
            </v-card-text>
            <v-card-actions>
              <!-- <v-btn text color="orange">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn> -->
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
    export default {
        name: "Languages",
        data(){
    return{
      languages: [
        { name: 'CSS', description: 'CSS or Cascading Style Sheets goes hand in hand with HTML. If HTML is the bread and butter of a website, then CSS is the package that they come in. CSS takes the text-based website that you’ve made and applies things like color, images, videos, and other media to it. CSS makes websites look more appealing to viewers.', avatar: './css.jpg' },
        { name: 'HTML', description: 'HTML code formats the text, images, and other media that make up a webpage. The language communicates with the computer using a series of attributes and elements. HTML has evolved greatly over time. The language now enables web pages to host videos, sound, and more.', avatar: './html.jpg' },
        { name: 'Javascript', description: 'JavaScript is the knife that actually spreads the butter onto the bread. JavaScript is all about functionality. JavaScript is one of the most popular languages in the coding universe right now. JavaScript is also a highly diverse language that can be used to code anything from video games to websites. It can also be used for both mobile and desktop apps.', avatar: '/js.jpg' },
        { name: 'Python', description: 'Python is a general-use programming language meaning that it can be used for almost anything. Python is one of the most popular programming languages among big tech giants and startups. The language is perfect for beginners because it rejects complexity and is very simple to learn. Coders who know Python would be eligible for jobs in back end development, server coding, and more.', avatar: '/python.jpg'},
        { name: 'ReactJS', description: 'React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native.', avatar: '/react.jpg'},
        { name: 'VueJS', description: 'VueJS is an open source progressive JavaScript framework used to develop interactive web interfaces. It is one of the famous frameworks used to simplify web development. VueJS focusses on the view layer. It can be easily integrated into big projects for front-end development without any issues. Components are one of the important features of VueJS that helps create custom elements, which can be reused in HTML.', avatar: '/vue.png'},
        { name: 'NodeJS', description: 'Node. js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.', avatar: '/node.jpg' }
      ]
    }
  }
    }
</script>

<style scoped>

</style>