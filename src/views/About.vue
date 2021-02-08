<template>
  <v-container >
    <br>
    <br>
    <v-row no-gutters>
      <v-col>
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <div class="content">
            <h2 class="underline">Full Name</h2>
            <vue-typer  erase-style='select-back' text='Anele Joshua Sokwane'></vue-typer>

            <h2 class="underline">Date Of Birth</h2>
            <vue-typer  erase-style='clear' text='06/04/2002'></vue-typer>

            <h2 class="underline">Gender</h2>
            <vue-typer  erase-style='select-all' text='Male'></vue-typer>

            <h2 class="underline">Location</h2>
            <vue-typer  erase-style='backspace' text='Eersteriver, Cape Town'></vue-typer>

            <h2 class="underline">Nationality</h2>
            <vue-typer  erase-style='select-all' text='South African'></vue-typer>

            <h2 class="underline">Education</h2>
            <vue-typer  erase-style='clear' text='Tuscany Glen High School [Matric 2019]'></vue-typer>
            <h2 class="underline">Hobbies</h2>
            
            <vue-typer  erase-style='backspace' :text='["Basketball","Drawing","Rapping","Making Videos"]'></vue-typer>
            <h2 class="underline">Bio</h2>
            <vue-typer  erase-style='clear' text='I am very hard-working, passionate, committed and creative. I never give up no matter how hard things get because I believe that in order to succeed, you have to fail and learn from that failure to get better. I also believe that friends and family are important but make sure that the relationships are good.
            Ever sinceI was young, I always loved computers and working with them. Everyone would come to me whenever they had a problem with their computers. I got interested in coding once my cousin told me about it and I saw the world differently because I realised that most of the most successful websites and pages that we use on a daily basis are made with ...words. It has always been fascinating to me. I enjoy coding and I try to code something each and every day. I am very dedicated to getting better and developing my skills.'></vue-typer>
          
          </div>
         
        </v-card>
          
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About"
}
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center; 
}
.underline{
  text-decoration: underline;
  font-family: 'Big Shoulders Stencil Display', cursive;
}
.text{
  font-family: 'Big Shoulders Stencil Display', cursive;
  font-family: 'Xanh Mono', monospace;
  font-size: 17.8px;
}
</style>
