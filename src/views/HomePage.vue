<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Train List</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Inbox</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-list>
        <MessageListItem v-for="message in mappedTrainData" :key="message.id" :message="message" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonList, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/vue';
import MessageListItem from '@/components/MessageListItem.vue';
import { defineComponent } from 'vue';
import { getMessages } from '@/data/messages';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { getMappedTrainData } from '@/data/trainData'




export default defineComponent({
  name: 'HomePage',
  data() {
    return {
      messages: getMessages(),
      mappedTrainData: getMappedTrainData()
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
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    MessageListItem
  },
});
</script>
