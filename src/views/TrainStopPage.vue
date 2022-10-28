<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button> {{location?.stopName}}
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true" v-if="location">
      Distance: {{distance * 0.621371}} mi
      <GoogleMap api-key="AIzaSyBdjdsCuQpY4pxUzwYKLRaAIVchevRT42Q" style="width: 100%; height: 100%" :center="location" :zoom="15">
        <Marker :options="{ position: location }" />
        <Marker :options="{ position: position }" />
      </GoogleMap>
      
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
import { GoogleMap, Marker } from "vue3-google-map";
import { Haptics } from '@capacitor/haptics';


function distance(lat1:number, lon1:number, lat2:number, lon2:number) {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
          c(lat1 * p) * c(lat2 * p) * 
          (1 - c((lon2 - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

const origPosition:any = {lat:0,lng:0}
export default defineComponent({
  name: 'ViewMessagePage',
  data() {
    return {
      personCircle,
      position: origPosition,
      distance: 0
    }
  },
  methods: {
    async checkPosition() {
      let userCoords =  (await Geolocation.getCurrentPosition()).coords
      const loc2 = this.$data.position = {lat: userCoords.latitude, lng: userCoords.longitude}
      const loc1 = getSingleMappedItem(this.$route.params.id as string);
      if(loc1){
        // acos(sin(lat1)*sin(lat2)+cos(lat1)*cos(lat2)*cos(lon2-lon1))*6371
        // const distance = Math.acos(Math.sin(loc1.lat)*Math.sin(loc2.lat)+Math.cos(loc1.lat)*Math.cos(loc2.lat)*Math.cos(loc2.lng-loc1.lng))*6371
        this.$data.distance = distance(loc1.lat, loc1.lng, loc2.lat, loc2.lng)
        if(this.$data.distance < 1.5) {
          Haptics.vibrate()
        }
      }
    }
  },
  created: function(){
    this.checkPosition()
    this.polling = setInterval(this.checkPosition, 10000);
  },
  beforeUnmount() {
    clearInterval(this.polling)
  },
  setup():any {
    const route = useRoute();
    const location = getSingleMappedItem(route.params.id as string);
    if(location) {
      return { location: {lat:location.lat, lng: location.lng, stopName: location.stopName} }
    }
    else {
      return { location: {lat:0, lng:0, stopName: 'Unknown'} }
    }
  },
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    GoogleMap,
    Marker
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
