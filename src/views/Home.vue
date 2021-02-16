<template>
      <div class="home page">
          <vue-typer
  id="hello"
  :text='["My name is Anele Sokwane","I am a Junior Developer"]'
  :repeat='Infinity'
  :shuffle='false'
  initial-action='erasing'
  :pre-type-delay='90'
  :type-delay='90'
  :pre-erase-delay='1000'
  :erase-delay='320'
  erase-style='backspace'
  :erase-on-complete='false'
  caret-animation='blink'
        ></vue-typer>
         
        <vue-particles
        color="#dedede"
        :particleOpacity="0.9"
        :particlesNumber="860"
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
#hello {
  position:absolute;
  left:0;
  z-index: 1;
  font-size: 20px;
  font-family: 'Amatic SC', cursive;
  text-align:center;
  align-items: center;
 
}
@media screen and (max-width: 320px){
  #hello {
    top: 40px;
    left: 0;
    font-size: 22px;
  }
}
.vue-typer .custom.char.typed {
  color: #fff !important;
}
.vue-typer{
  font-size: 60px !important;
  font-weight: bold;
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
@media screen and (max-width: 2561px){
  #hello {
    top: 180px;
    left: 7%;
    font-size: 72px;
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
