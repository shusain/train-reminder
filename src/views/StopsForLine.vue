<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>
            <ion-icon :icon="ellipse" size="small" :style="{color:lineColor}"></ion-icon> <span>{{line}} Line Stops</span>
          </ion-title>
          <ion-buttons slot="start">
            <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      
      <ion-content :fullscreen="true">
        
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Stops</ion-title>
          </ion-toolbar>
        </ion-header>
        
        <ion-list>
          <TrainStopItem v-for="stop in trainStops" :key="stop.stopName" :train-stop="stop" />
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, IonIcon} from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { Haptics } from '@capacitor/haptics';
  import { trainLines, TrainStop } from '@/data/trainData'
  import { useRoute } from 'vue-router';
  import TrainStopItem from '@/components/TrainStopItem.vue';
  import { ellipse } from 'ionicons/icons';

  
  
  export default defineComponent({
    name: 'HomePage',
    data() {
      return {
      }
    },
    
    setup():{trainStops:Array<TrainStop>, line:string, ellipse:any, lineColor: string} {
        const route = useRoute();
        const foundTrainLine = trainLines.filter((trainLine)=>trainLine.id == route.params.id as string).pop()
        if(foundTrainLine){
          foundTrainLine.trainStops.sort((a,b)=>a.stationName.localeCompare(b.stationName))
          return { trainStops: foundTrainLine?.trainStops.filter((e,i)=>i%2==0), line:foundTrainLine.friendlyName, lineColor: foundTrainLine.color, ellipse }
        }
        else
        return { trainStops: [], line: 'Not found', ellipse, lineColor:'#000000'}
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
    TrainStopItem,
    IonBackButton,
    IonButtons,
    IonIcon
},
  });
  </script>
  <style>
  ion-title {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>