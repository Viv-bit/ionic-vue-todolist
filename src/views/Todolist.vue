<template>
    <ion-page>
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
            
                <ion-button router-link='/addtodo'>
                    Add new todo
                </ion-button>
            
        </ion-list>

        

            <ion-button router-link="/home" expand="block">Back to Home</ion-button>
        
    </ion-page>
</template>

<script>
import { IonList, IonItem, IonButton } from '@ionic/vue'
export default {
    props: ["todo"],
    components: {
        IonList,
        IonItem,
        IonButton
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