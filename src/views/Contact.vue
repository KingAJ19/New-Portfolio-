<template lang="html">
   <div class="flex-center">
     <br>
      <h3 is="sui-header" text-align="left" attached="top">
      Get In Touch With Me!
      </h3>
     <br>
     <br>
    <a href="https://www.facebook.com/anelesokwane" target="_blank">
      <sui-button social="facebook" content="Facebook" icon="facebook" />
    </a>
    <br>
    <a href="https://twitter.com/anelesokwane19" target="_blank">
      <sui-button social="twitter" content="Twitter" icon="twitter" />
    </a>
    <br>
    <a href="https://www.linkedin.com/in/anele-sokwane-49baa919a/" target="_blank">
      <sui-button social="linkedin" content="LinkedIn" icon="linkedin" />
    </a>
    <br>
    <a href="https://www.instagram.com/anele_sokwane/" target="_blank">
      <sui-button social="instagram" content="Instagram" icon="instagram" />
    </a>
    <br>
    <a href="https://www.youtube.com/channel/UC1Wr5ovgllU0JZXdx8YXhiQ" target="_blank">
      <sui-button social="youtube" content="Youtube" icon="youtube" />
    </a>
    <br>
    <sui-button icon> Email:
      <a href="mailto: aneleuchiha000@gmail.com?">
      <sui-icon name="mail" />
      aneleuchiha000@gmail.com
      </a>
    </sui-button>
     <br>
    <sui-button icon> 
      <sui-icon name="phone" />
      Phone: 081 553 9120
    </sui-button>
  </div> 
</template>
<script>
export default {
    name: "Contact"
}
</script>

<style>
.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center; 
}
</style>
