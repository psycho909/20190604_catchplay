<template>
    <a-layout-content :style="{ padding: '40px 50px', marginTop: '64px' }">
        <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
            <form @submit="handleAdduser">
                <div class="input-group">
                    <label for="username">用戶名稱</label>
                    <input type="text" name="username" v-model.trim="username">
                </div>
                <div class="input-group">
                    <label for="male">男</label>
                    <input type="radio" id="male" value="male" name="gender" v-model="gender">
                    <label for="female">女</label>
                    <input type="radio" id="female" value="female" name="gender" v-model="gender">
                </div>
                <div class="input-group">
                    <label for="age">用戶年齡</label>
                    <input type="number" name="age" v-model.number="age">
                </div>
                <div class="input-group">
                    <label for="device">用戶裝置</label>
                    <select name="device" id="device" v-model="device">
                        <option selected disabled value="">請選擇裝置</option>
                        <option value="IOS">IOS</option>
                        <option value="Android">Android</option>
                    </select>
                </div>
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
                    device:_this.device
                })
                alert("新增成功")
                this.$router.push("/")
            }
        }
    }
</script>
