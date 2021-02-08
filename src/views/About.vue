<template>
  <v-timeline>
    <v-timeline-item
      v-for="n in 4"
      :key="n"
      large
    >
      <template v-slot:icon>
        <v-avatar>
          <img src="/Anele.jpg">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Tus eu perfecto</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">
          Lorem ipsum
        </v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

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
