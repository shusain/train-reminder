<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Train Lines</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Train Lines</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-list>
        <TrainLineItem v-for="trainLine in trainLines" :key="trainLine.id" :trainLine="trainLine" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import TrainLineItem from '@/components/TrainLineItem.vue'
import { defineComponent } from 'vue';
import { Haptics } from '@capacitor/haptics';
import { trainLines } from '@/data/trainData'


export default defineComponent({
  name: 'HomePage',
  data() {
    return {
      trainLines: trainLines
    }
  },
  methods: {
    refresh: (ev: CustomEvent) => {
      setTimeout(() => {
        ev.detail.complete();
        Haptics.vibrate()
      }, 3000);
    }
  },
  components: {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
    TrainLineItem
  },
});
</script>
