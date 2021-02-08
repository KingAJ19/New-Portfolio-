<template>
     
       <div
      class="container col-lg-8 col-md-12 col-sm-8 col-xs-9 "
      style="text-align:center">
      <v-flex class="mt-2">
      <v-avatar size="220">
      <img src="/Anele.jpg" alt="Anele">
      </v-avatar>
      </v-flex>
      <br>
    <h2>My name is  <h2 class='lineUp'>Anele Sokwane</h2> I am a Junior Web Developer and a <span class="txt"></span></h2>
    <br>
    <br>
    <div class='line'>
      <a href="https://www.youtube.com/channel/UC1Wr5ovgllU0JZXdx8YXhiQ" target="_blank">
    <i class="youtube huge square icon btnColor"></i>
      </a>
  </div>
  </div>
  <!-- export default{
  name: "Home",
  
} -->
</template>


<style scoped>
.btnColor{
  color: red;
}
.line {
  width: 100%;
  height: 9rem;
  overflow: hidden;
  padding: 0;
  margin-bottom: 16px;
}
.lineUp {
  color: red;
  font-style: italic;
  font-weight: 200;
  animation: 2s anim-lineUp ease-out infinite;
}
@keyframes anim-lineUp {
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
h2 .txt::before{
  content: '';
  color: #2BABFF;
  animation: profile 15s infinite;
}
@keyframes profile {
  0% { content: 'Content Creator'}
  25% { content: 'Anime Fan'}
  50% { content: 'Rapper'}
  75% { content: 'Artist'}
  100% { content: 'Basketball Player'}
}
.underline{
  text-decoration: underline;
  color: #FF0000;
}

</style>
