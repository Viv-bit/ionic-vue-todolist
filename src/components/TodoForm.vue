<template>
    <form @submit.prevent="submitForm" >
    <ion-item >
      <ion-label position="floating"> Add Task Title: </ion-label>
      <ion-input type="text" required v-model="enteredTitle" />
    </ion-item>

    <ion-item >
      <ion-label position="floating"> Add Task Detail: </ion-label>
      <ion-textarea type="text" required v-model="enteredDetail" />
    </ion-item>
    <ion-button type="submit">Add</ion-button>
  </form>
</template>

<script>
import { IonInput, IonLabel, IonItem, IonButton, IonTextarea } from '@ionic/vue'
export default {
  emits: ["save-todo"],
    components: {
        IonInput,
        IonLabel,
        IonItem,
        IonButton,
        IonTextarea
    },
    data() {
    return{
      enteredTitle: '',
      enteredDetail: ''
    };
  },
  methods: {
    submitForm() {
      const todoData = {
        title: this.enteredTitle,
        detail: this.enteredDetail
      };
      console.log('submitForm',todoData);
      this.$emit('save-todo', todoData);
  }
  }
  
}
</script>