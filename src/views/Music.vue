<template>
    <v-container>
         <v-list subheader>
            <v-subheader>All music</v-subheader>

            <v-list-item
                v-for="item in items"
                :key="item.title"
            >
                <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-icon @click="openMusic">
                    <v-icon :color="item.active ? 'deep-purple accent-4' : 'grey'">mdi-play</v-icon>
                </v-list-item-icon>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script>
export default {
    props: {
        openMusic: {
            type: Function,
            default: () => {}
        }
    },
    data () {
        return {
            items: [
                { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
                { title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
            ]
        }
    }
}
</script>