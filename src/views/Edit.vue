<template>
    <a-layout-content :style="{ padding: '40px 50px', marginTop: '64px' }">
        <form name="form" @submit="e=>handleUpdateUser(e)">
            <div class="input-group">
                <label for="username">用戶名稱:</label>
                <input id="username" type="text" :value="getUser.username">
            </div>
            <div class="input-group">
                <label for="male">男</label>
                <input type="radio" id="male" name="gender" value="male" :checked="getUser.gender === 'male'?true:false">
                <label for="female">女</label>
                <input type="radio" id="female" name="gender" value="female" :checked="getUser.gender === 'female'?true:false">
            </div>
            <div class="input-group">
                <label for="age">用戶年齡:</label>
                <input id="age" name="age" type="number" :value.number="getUser.age">
            </div>
            <div class="input-group">
                <label for="device">用戶裝置:</label>
                <select name="device" id="device">
                    <option value="IOS"  :selected="getUser.gdeviceender === 'IOS'?true:false">IOS</option>
                    <option value="Android"  :selected="getUser.gendeviceder === 'Android'?true:false">Android</option>
                </select>
            </div>
            <button>更新</button>
        </form>
    </a-layout-content>
    
    <!-- <a-form>

    </a-form> -->
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['getUser'])
    },
    mounted(){
        this.findOneUser(this.$route.params.id)
    },
    methods:{
        ...mapActions(['findOneUser','updateuser']),
        handleUpdateUser(e){
            e.preventDefault()
            let form=document.forms['form']
            let data={};
            data['id']=this.$route.params.id;
            data['username']=form.elements['username'].value;
            data['age']=form.elements['age'].value;
            data['gender']=form.elements['gender'].value;
            data['device']=form.elements['device'].value;
            this.updateuser(data)
            alert("用戶更新成功...")
            this.$router.push('/')
        }
    }
}
</script>
