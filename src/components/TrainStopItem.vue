T<template>
  <ion-item v-if="trainStop" :routerLink="'/stopView/' + trainStop.id" :detail="false" class="list-item">
    <div slot="start"></div>
    <ion-label class="ion-text-wrap">
      <h2>
        {{ trainStop.stationName }}
      </h2>
      <h3>{{ trainStop.stopName }}</h3>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { IonItem, IonLabel } from '@ionic/vue';
import { chevronForward } from 'ionicons/icons';
import { defineComponent, PropType } from 'vue';
import { TrainStop } from '@/data/trainData'

export default defineComponent({
  name: 'MessageListItem',
  components: {
    IonItem,
    IonLabel,
  },
  props: {
    trainStop: { type: Object as PropType<TrainStop>, required:false }
  },
  methods: {
    isIos: () => {
      const win = window as any;
      return win && win.Ionic && win.Ionic.mode === 'ios';
    }
  },
  data() {
    return { chevronForward }
  }
});
</script>

<style scoped>
.list-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}

.list-item ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

.list-item  h2 {
  font-weight: 600;
  margin: 0;
}

.list-item p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 95%;
}

.list-item .date {
  float: right;
  align-items: center;
  display: flex;
}

.list-item ion-icon {
  color: #c9c9ca;
}

.list-item ion-note {
  font-size: 15px;
  margin-right: 8px;
  font-weight: normal;
}

.list-item ion-note.md {
  margin-right: 14px;
}

.list-item .dot {
  display: block;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  align-self: start;
  margin: 16px 10px 16px 16px;
}

.list-item .dot-unread {
  background: var(--ion-color-primary);
}
</style>