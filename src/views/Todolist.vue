<template>
    <ion-page>
        <Addtodo />

        <ion-list>
            <ion-item
                v-for="todo in todos"
                :router-link="`/todos/${todo.id}`"
                :key="todo.id"
            >
            <div>
                <strong>
                    {{ todo.title }}
                </strong>

                <p>
                    {{ todo.detail }}
                </p>
            </div>
          
            </ion-item>
        </ion-list>

        

            <ion-button href="/" expand="block">Back to Home</ion-button>
        
    </ion-page>
</template>

<script>
import { IonList, IonItem } from '@ionic/vue'
import Addtodo from '../components/Addtodo'
export default {
    props: ["todo"],
    components: {
        IonList,
        IonItem,
        Addtodo
    },

    computed: {
        todos() {
            return this.$store.getters.todos;
        }
    }

}
</script>

<style>

</style>