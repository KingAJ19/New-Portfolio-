<template>
    <nav>
        <v-toolbar flat app dark>
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title class="grey--text">
            <span class="font-weight-bold">Anele Sokwane</span>
        </v-toolbar-title>
        <v-spacer/>
        
        </v-toolbar>
         <v-navigation-drawer app v-model="drawer" class="black">
           <v-layout column align-center>
             <v-flex class="mt-5">
               <v-avatar size="150">
                 <img src="/Sokwane.png" alt="Anele">
               </v-avatar>
               <!-- <p class="white--text font-weight-bold subheading mt-1">
                 Anele Sokwane
               </p> -->
             </v-flex>
           </v-layout>
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
                { text: 'Skills', icon: 'mdi-web', route: '/skills' },
                { text: 'Projects', icon: 'mdi-folder', route: '/projects' },
                { text: 'Languages', icon: 'mdi-devices', route: '/languages'},
                { text: 'Testimonials', icon: 'mdi-chat', route: '/testimonials'},
                { text: 'Contact', icon: 'mdi-account-box', route: '/contact' }
        ],
            }
        }
}
</script>