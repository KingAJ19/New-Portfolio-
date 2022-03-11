<template>
  <div class="projects">
    <v-container class="my-6">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="project in projects" :key="project.name" link :to="project.github + project.link">
          <v-card height="96%" width="auto" text class="text-center ma-3 animate__animated animate__rollIn">
            <v-responsive class="pt-4">
              <v-avatar size="130"> 
                <img :src="project.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <h1 class="heading font-weight-bold">{{ project.name }}</h1>
              <div class="black--text">{{ project.description }}</div>
            </v-card-text>
            <mdb-container>
              <mdb-row>
              <mdb-col sm="4">
                <v-btn text color="green">
                <i class="fas fa-globe-africa"></i>
                <a :href="project.link" target="_blank">Demo</a>
              </v-btn>
              </mdb-col>
              <mdb-col sm="4">
                <v-btn text color="black">
               <i class="fab fa-github"></i>
                <a :href="project.github" target="_blank">GitHub</a>
              </v-btn>
              </mdb-col>
             </mdb-row>
            </mdb-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import {mdbContainer, mdbRow, mdbCol} from 'mdbvue';
    export default {
        name: "Projects",
        components: {mdbContainer, mdbRow, mdbCol},
        data(){
    return{
      projects: [
        { name: 'Calculator', description: 'A simple, fully functional calculator using HTML & CSS', avatar: './calculator.gif', link: 'https://aneles-calculator.herokuapp.com', github: 'https://github.com/KingAJ19/Calculator' },
        { name: '3D Soccer Player Slides', description: 'A slideshow of my favorite soccer players using JS, HTML & CSS', avatar: '/soccer.gif', link: 'https://soccer-player-slide.herokuapp.com', github: 'https://github.com/KingAJ19/-3D-Soccer-Player-Slides' },
        { name: 'Javascript Todo List', description: 'A simple todo list using JavaScript', avatar: '/todo.gif', link: 'https://javascript-todo-list-11.herokuapp.com', github: 'https://github.com/KingAJ19/Javascript-Todo-List' },
        { name: 'My Anime Site', description: 'A website with my anime lists and rankings', avatar: '/ryuuk.gif', link: 'https://aneles-anime-webpage.herokuapp.com', github: 'https://github.com/KingAJ19/Anime-Site' },
        { name: 'Codex Site', description: 'A coding company site made with HTML, CSS & JQuery', avatar: './coding.gif', link: 'https://codex-company.netlify.app', github: 'https://github.com/KingAJ19/Flexbox-Website' },
        { name: 'Anime Typing Game', description: 'A charcater typing game made with Bootstrap and JS', avatar: './typing.gif', link: 'https://anime-typing-game.herokuapp.com', github: 'https://github.com/KingAJ19/Anime-Character-Typing-Game' },
        { name: 'Nike Product Card', description: 'A simple Nike AirMax product card using HTML & CSS', avatar: './shoe.gif', link: 'https://nike-product-card.herokuapp.com', github: 'https://github.com/KingAJ19/Nike-Product-Card' },
        { name: 'Pokemon Api', description: 'Getting Pokemon data from the PokeAPI using JS, HTML & CSS', avatar: './pokemon.gif', link: 'https://pokemon-api-app-1.herokuapp.com', github: 'https://github.com/KingAJ19/-Pokemon-API' },
        { name: 'Music List App', description: 'A music list app made with HTML, CSS and Owl Carousel', avatar: './music.gif', link: 'https://music-list-app.netlify.app', github: 'https://github.com/KingAJ19/Music-App' },
        { name: 'Muller Berry Site', description: 'An E-commerce site for Muller Berry clothing brand', avatar: './mb.gif', link: 'https://muller-berry-site.netlify.app', github: 'https://github.com/KingAJ19/Muller-Berrry' },
        { name: 'E-Commerce Store', description: 'An E-Commerce store made with ReactJS and CommerceJS', avatar: './shopping-cart.gif', link: 'https://aneles-store.netlify.app', github: 'https://github.com/KingAJ19/Aneles-Store'},
        { name: 'Web Agency Project', description: 'A web agency template site made with HTML and CSS', avatar: './web.gif', link: 'https://web-agencies-project.netlify.app', github: 'https://github.com/KingAJ19/Web-Agency-Project' },
        { name: 'New Anime Site', description: 'A new anime website made using HTML, CSS & Javascript', avatar: './naruto.gif', link: 'https://aneles-anime-website.netlify.app', github: 'https://github.com/KingAJ19/New-Anime-Site' },
        { name: 'Lineage Media', description: 'A website for Lineage Media made with Bootstrap, HTML & CSS', avatar: './lineage.gif', link: 'https://lineage-media.herokuapp.com', github: 'https://github.com/KingAJ19/Lineage-Media-' },
        { name: 'Todo List', description: 'A todo list made with React', avatar: './todo-list.gif', link: 'https://aneles-react-todo-list.netlify.app/', github: 'https://github.com/KingAJ19/React-Todo-List' },
        { name: 'Punching Bag', description: 'A simple punch bag game using VueJS', avatar: './punch.gif', link: 'https://punching-bag-game.herokuapp.com', github: 'https://github.com/KingAJ19/VueJS-PunchingBag'}
        
      ]
    }
  }
    }
</script>

<style scoped>

</style>
