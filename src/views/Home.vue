<template>
      <div class="home page">
        <h2 id="hello">Hi, My name is Anele Sokwane</h2>
        <!-- Find a typing animation for the home page -->
        <vue-particles
        color="#dedede"
        :particleOpacity="0.9"
        :particlesNumber="800"
        shapeType="circle"
        :particleSize="2"
        linesColor="#dedede"
        :linesWidth="0"
        :lineLinked="true"
        :lineOpacity="0"
        :linesDistance="550"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="particles-js"
      >
      <canvas class="particles-js-canvas-el" width="935" height="833" style="width: 100%; height: 100%;">
        
      </canvas>
      </vue-particles>
      </div>
       <!-- <div
      class="container col-lg-8 col-md-12 col-sm-8 col-xs-9 "
      style="text-align:center"> -->
      <!-- <v-flex class="mt-2">
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
  </div> -->
  <!-- </div> -->
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
#hello {
  position:absolute;
  top: 0;
  left:0;
  color: #fff;
  z-index: 1;
  font-family: 'Amatic SC', cursive;
  font-size: 20px;
  text-align:center;
}
/* .btnColor{
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
} */
.particles-js {
    background-image: url('/background-image.jpg') ;
    position: fixed;
    top: 40;
    left: 0;
    width: 100%;
    height: 100%;
}

</style>
