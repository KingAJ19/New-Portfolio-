<template>
    <nav>
        <v-toolbar flat app id="app">
        <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title class="white--text">
            <span class="font-weight-bold">Anele Sokwane</span>
        </v-toolbar-title>
        <v-spacer/>
        
        </v-toolbar>
         <v-navigation-drawer app v-model="drawer" class="black">
           <br>
           <br>
           <br>
           <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
        </v-navigation-drawer>
    </nav>
</template>
<script>
export default {
        data(){
            return{
                drawer: false,
                links: [
                { text: 'Home', icon: 'mdi-home-city', route: '/' },
                { text: 'About', icon: 'mdi-account', route: '/about' },
                { text: 'Stack', icon: 'mdi-web', route: '/stack' },
                { text: 'Projects', icon: 'mdi-folder', route: '/projects' },
                { text: 'Testimonials', icon: 'mdi-chat', route: '/testimonials'},
                { text: 'Contact', icon: 'mdi-account-box', route: '/contact' }
        ],
            }
        }
}
</script>
<style scoped>
#app{
  background-color: #919191;
}
</style>