<template>
    <a-layout-content :style="{ padding: '40px 50px', marginTop: '64px' }">
        <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
            <ul>
                <li v-for="user in getUsers">
                    {{user}}
                </li>
            </ul>
        </div>
    </a-layout-content>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name:"container",
    data(){
        return {
            users:[]
        }
    },
    computed:{
        ...mapGetters(['getUsers'])
    },
    mounted(){
        this.inituser()
    },
    methods:{
        ...mapActions(['inituser']),
    }
}
</script>
