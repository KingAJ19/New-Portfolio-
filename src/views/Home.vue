<template>
      <div class="home page">
        <h2 id="hello" class="lineUp">Hi, My name is Anele Sokwane</h2>
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
        :moveSpeed="7"
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
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
#hello {
  position:absolute;
  top: 90px;
  left:0;
  color: #fff;
  z-index: 1;
  font-family: 'Amatic SC', cursive;
  font-size: 20px;
  text-align:center;
  align-items: center;
}
.lineUp {
  color: #FF9900;
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
@media screen and (max-width: 320px){
  #hello {
    top: 120px;
    left: 0;
    font-size: 50px;
  }
}
@media screen and (max-width: 376px){
  #hello {
    top: 150px;
    left: 0;
    font-size: 53px;
  }
}
@media screen and (max-width: 426px){
  #hello {
    top: 150px;
    left: 0;
    font-size: 56px;
  }
}
@media screen and (max-width: 769px){
  #hello {
    top: 170px;
    left: 7%;
    font-size: 60px;
  }
}
@media screen and (max-width: 1025px){
  #hello {
    top: 190px;
    left: 7%;
    font-size: 80px;
  }
}
@media screen and (max-width: 1441px){
  #hello {
    top: 190px;
    left: 7%;
    font-size: 66px;
  }
}
.particles-js {
    background-image: url('/background-image.jpg') ;
    position: fixed;
    top: 40;
    left: 0;
    width: 100%;
    height: 100%;
}

</style>
