<template>
    <a-layout-content :style="{ padding: '40px 50px', marginTop: '64px' }">
        <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
            <form @submit="handleAdduser">
                <input type="text" name="username" v-model="username">
                <input type="text" name="gender" v-model="gender">
                <input type="text" name="age" v-model="age">
                <input type="text" name="device" v-model="device">
                <button>送出</button>
            </form>
        </div>
    </a-layout-content>
</template>
<script>
    import uuid from 'uuid';
    import {mapActions} from 'vuex';
    export default {
        name: "advanced",
        data(){
            return {
                username:"",
                gender:"",
                age:"",
                device:""
            }
        },
        methods:{
            ...mapActions(['adduser']),
            handleAdduser(e){
                e.preventDefault();
                var _this=this;
                this.adduser({
                    id:uuid(),
                    username:_this.username,
                    gender:_this.gender,
                    age:_this.age,
                    device:_this.age
                })
            }
        }
    }
</script>
