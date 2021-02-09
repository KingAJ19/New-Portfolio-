<template>
  <div class="testimonials">
    <v-container class="my-6">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="testimonial in testimonials" :key="testimonial.name">
          <v-card height="95%" text class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="140"> 
                <img :src="testimonial.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <h2 class="heading font-weight-bold">{{ testimonial.name }}</h2>
              <div class="black--text">{{ testimonial.message }}</div>
            </v-card-text>
            <v-card-actions>
               <v-btn text color="purple">
                <v-icon small left>mdi-instagram</v-icon>
               <a :href="testimonial.link" target="_blank">Instagram</a>
              </v-btn> 
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
    export default {
        name: "Testimonials",
        data(){
    return{
      testimonials: [
        { name: 'Jason Wandrag', message: 'Anele is an extremely creative and motivated person, who enjoys creating well scripted Youtube content. Anele has shown to bring this level of quality and creativity to his work, and never fails to bring a team together. He would be great for any marketing or development role.', avatar: './Jason.jpg', link: 'https://www.instagram.com/pixie_pandah' },
        { name: 'Oslin', message: 'Meeting Anele has added value to my life by listening to him and hearing what he have to say. He is such a creative person turning out quality content all the time, this makes him an even better developer because of his thought process.', avatar: '/Oslin.jpg', link: 'https://www.instagram.com/ossiekc' },
        { name: 'Kayleen Watkins', message: 'Anele is a very kind person  and is  a pleasure to be around.  He has proven through the course that he is a very dedicated person and is always improving his coding skills.', avatar: '/Kayleen.jpg', link: 'https://www.instagram.com/kayleenswatkins' },
        { name: 'Asaph Franks', message: 'Anele is one word..."Driven". If he really wants to do something he will push himself to do it. He is also a super fun person to be around.', avatar: './Asaph.jpg', link: 'https://www.instagram.com/aj_the_pianist' },
        { name: 'Navan Basson', message: 'Anele has many amazing qualities. He is creative, hardworking, passionate, works well under pressure and very reliable.', avatar: '/Navan.jpg', link: 'https://www.instagram.com/navan_jean_basson'}
        
      ]
    }
  }
    }
</script>

<style scoped>

</style>