<template>
    <a-layout-content :style="{ padding: '40px 50px', marginTop: '64px' }">
        <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
            <div class="search-group">
                <input class="search-input" placeholder="搜尋裝置..." v-model="search" type="text">
                <select v-model="searchSelect">
                    <option value="" selected>請選擇</option>
                    <option value="username">用戶名</option>
                    <option value="gender">性別</option>
                    <option value="device">裝置</option>
                </select>
                <!-- <a-button @click="handleSearchFindBtn" class="mr-3" type="primary">搜尋</a-button> -->
                <!-- <a-button @click="handleSearchFindAllBtn" type="primary">搜尋全部</a-button> -->
            </div>
            <a-table bordered :dataSource="searchUsers.length>0?searchUsers:getUsers" :columns="columns">
                <template slot="operation" slot-scope="text,data,index">
                    <a-popconfirm
                        title="確定刪除?"
                        @confirm="handleRemoveuser(data.id)"
                    >
                        <a href="javascript:;">刪除</a>
                    </a-popconfirm>
                    <div class="edit-btn">
                        <a @click="edit(data.id)">更新</a>
                    </div>
                </template>
            </a-table>
        </div>
    </a-layout-content>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name:"container",
    data(){
        return {
            users:[],
            search:"",
            searchSelect:"",
            columns:[
            {
                title:"用戶名",
                dataIndex:"username",
                width:"20%",
                scopedSlots:{
                    customRender:'username'
                }
            },{
                title:"性別",
                dataIndex:"gender",
                width:"20%",
                scopedSlots:{
                    customRender:'gender'
                }
            },{
                title:"年齡",
                dataIndex:"age",
                width:"20%",
                scopedSlots:{
                    customRender:'age'
                }
            },{
                title:"裝置",
                dataIndex:"device",
                width:"20%",
                scopedSlots:{
                    customRender:'device'
                }
            },{
                title:"操作",
                dataIndex:"operation",
                width:"20%",
                scopedSlots:{
                    customRender:'operation'
                }
            }]
        }
    },
    computed:{
        ...mapGetters(['getUsers']),
        searchUsers(){
            let newState;
            switch(this.searchSelect){
                case "device":
                    newState=this.$store.state.users.filter(user=>{
                        var reg=new RegExp(`^${this.search}`,"gi")
                        if(user.device.match(reg)){
                            return user
                        }
                    })
                    return newState
                case "username":
                    newState=this.$store.state.users.filter(user=>{
                        var reg=new RegExp(`^${this.search}`,"gi")
                        if(user.username.match(reg)){
                            return user
                        }
                    })
                    return newState
                case "gender":
                    newState=this.$store.state.users.filter(user=>{
                        var reg=new RegExp(`^${this.search}`,"gi")
                        if(user.gender.match(reg)){
                            return user
                        }
                    })
                    return newState
                default:
                    return this.$store.state.users; 
            }
        }
    },
    mounted(){
        this.inituser()
    },
    methods:{
        ...mapActions(['inituser','removeuser','updateuser']),
        handleRemoveuser(id){
            this.removeuser(id)
        },
        handleUpdateuser(id){
            this.updateuser({id})
        },
        edit(id){
            this.$router.push({name:"edit",params:{id}})
        },
        handleSearchFindBtn(){
            if(this.search.length === 0){
                alert("請輸入搜尋裝置...")
                return false
            }
            let newState=this.$store.state.users.filter(user=>{
                var reg=new RegExp(`^${this.search}`,"gi")
                if(user.device.match(reg)){
                    return user
                }
            })
            this.users=newState
        },
        handleSearchFindAllBtn(){
            this.users=[]
        }
    }
}
</script>
<style lang="scss">
.mr-3{
    margin-right: 1rem;
}
.edit-btn{
    margin-left: 1rem;
    display: inline-block;
}
.search-group{
    margin-bottom: 1rem;
}
.search-input{
    box-sizing: border-box;
    list-style: none;
    position: relative;
    display: inline-block;
    padding: 4px 11px;
    height: 32px;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s;
    margin-right: 1rem;
}
</style>
