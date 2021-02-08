<template>
  <div class="projects">
    <v-container class="my-6">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="project in projects" :key="project.name" link :to="project.github + project.link">
          <v-card height="96%" width="auto" text class="text-center ma-3">
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
                <v-btn text color="blue">
                <i class="fas fa-globe-africa"></i>
                <a :href="project.link" target="_blank">Demo</a>
              </v-btn>
              </mdb-col>
              <mdb-col sm="4">
                <v-btn text color="blue">
               <i class="fab fa-github"></i>
                <a :href="project.github" target="_blank">GitHub</a>
              </v-btn>
              </mdb-col>
             </mdb-row>`
              <!-- <v-card-actions>
               <v-btn text color="blue">
                <v-icon small left>mdi-folder</v-icon>
                <a :href="project.link" target="_blank">Demo</a>
              </v-btn>
              <v-btn text color="blue">
                <v-icon small left>mdi-folder</v-icon>
                <a :href="project.github" target="_blank">GitHub</a>
              </v-btn>
            </v-card-actions> -->
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
        { name: 'Calculator', description: 'A simple, fully functional calculator using HTML & CSS', avatar: './calculator.png', link: 'https://aneles-calculator.herokuapp.com', github: 'https://github.com/KingAJ19/Calculator' },
        { name: '3D Soccer Player Slides', description: 'A slideshow of my favorite soccer players using JS, HTML & CSS', avatar: '/slides.png', link: 'https://soccer-player-slide.herokuapp.com', github: 'https://github.com/KingAJ19/3D-Soccer-Player-Slides' },
        { name: 'Javascript Todo List', description: 'A simple todo list using JavaScript', avatar: '/todo.png', link: 'https://javascript-todo-list-11.herokuapp.com', github: 'https://github.com/KingAJ19/Javascript-Todo-List' },
        { name: 'My Anime Site', description: 'A website with my anime lists and rankings', avatar: '/anime.jpg', link: 'https://aneles-anime-webpage.herokuapp.com', github: 'https://github.com/KingAJ19/My-Anime-Site' },
        { name: 'Anime Typing Game', description: 'A charcater typing game made with Bootstrap and JS', avatar: './typing.jpg', link: 'https://anime-typing-game.herokuapp.com', github: 'https://github.com/KingAJ19/Anime-Character-Typing-Game' },
        { name: 'Nike Product Card', description: 'A simple Nike AirMax product card using HTML & CSS', avatar: './shoes.jpg', link: 'https://nike-product-card.herokuapp.com', github: 'https://github.com/KingAJ19/Nike-Product-Card' },
        { name: 'Pokemon Api', description: 'Getting Pokemon data from the PokeAPI using JS, HTML & CSS', avatar: './pikachu.png', link: 'https://pokemon-api-app-1.herokuapp.com', github: 'https://github.com/KingAJ19/Pokemon-API' },
        { name: 'Lineage Media', description: 'A website for Lineage Media made with Bootstrap, HTML & CSS', avatar: './lineage.jpg', link: 'https://lineage-media.herokuapp.com', github: 'https://github.com/KingAJ19/Lineage-Media' },
        { name: 'Punching Bag', description: 'A simple punch bag game using VueJS', avatar: './bag.png', link: 'https://punching-bag-game.herokuapp.com', github: 'https://github.com/KingAJ19/VueJS-PunchingBag'}
        
      ]
    }
  }
    }
</script>

<style scoped>

</style>
