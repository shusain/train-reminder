<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :text="getBackButtonText()" default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true" v-if="location">
      <!-- AIzaSyBdjdsCuQpY4pxUzwYKLRaAIVchevRT42Q -->
      <iframe v-if="location && location.lat"
        onload="this.width=screen.width;this.height=screen.height;"
        width="450"
        height="250"
        frameborder="0" style="border:0"
        referrerpolicy="no-referrer-when-downgrade"
        :src="'https://www.google.com/maps/embed/v1/view?key=AIzaSyBdjdsCuQpY4pxUzwYKLRaAIVchevRT42Q&center=' + location?.lat + ',' + location?.lng + '&zoom=18'"
        allowfullscreen>
      </iframe>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/vue';
import { personCircle } from 'ionicons/icons';
import {getSingleMappedItem} from '../data/trainData';
import { defineComponent } from 'vue';
import { Geolocation } from '@capacitor/geolocation';
const origPosition:any = {}
export default defineComponent({
  name: 'ViewMessagePage',
  data() {
    return {
      personCircle,
      getBackButtonText: () => {
        const win = window as any;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Inbox' : '';
      },
      position: origPosition
    }
  },
  created: async function(){
      this.$data.position = (await Geolocation.getCurrentPosition()).coords.latitude
  },
  setup() {
    const route = useRoute();
    const location = getSingleMappedItem(route.params.id as string);
    return { location }
  },
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
  },
});
</script>

<style scoped>

.mapouter{position:relative;text-align:right;height:500px;width:600px;}
.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}
ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h2 {
  font-weight: 600;
}

ion-item .date {
  float: right;
  align-items: center;
  display: flex;
}

ion-item ion-icon {
  font-size: 42px;
  margin-right: 8px;
}

ion-item ion-note {
  font-size: 15px;
  margin-right: 12px;
  font-weight: normal;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
}

p {
  line-height: 22px;
}
</style>
