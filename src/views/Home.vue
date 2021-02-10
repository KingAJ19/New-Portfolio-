<template>
      <div class="home page">
        <h3 id="hello" class="animate__animated animate__zoomInUp">Hi, My name is Anele Sokwane</h3>
        
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
  /* top: 20px; */
  left:0;
  color: #fff;
  z-index: 1;
  font-family: 'Amatic SC', cursive;
  text-align:center;
  align-items: center;
}
/* #hello:hover{
  color: black;
} */

@media screen and (max-width: 320px){
  #hello {
    top: 40px;
    left: 0;
    font-size: 30px;
  }
}
@media screen and (max-width: 376px){
  #hello {
    top: 60px;
    left: 0;
    font-size: 33px;
  }
}
@media screen and (max-width: 426px){
  #hello {
    top: 80px;
    left: 0;
    font-size: 56px;
  }
}
@media screen and (max-width: 769px){
  #hello {
    top: 100px;
    left: 7%;
    font-size: 60px;
  }
}
@media screen and (max-width: 1025px){
  #hello {
    top: 140px;
    left: 7%;
    font-size: 98px;
  }
}
@media screen and (max-width: 1441px){
  #hello {
    top: 180px;
    left: 7%;
    font-size: 69px;
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
