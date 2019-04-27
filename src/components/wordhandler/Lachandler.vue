<style>

</style>

<template>
    <div class="container-fluid  row current">
        <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 8}"
            placeholder="请输入内容"
            v-model="wordInput">
        </el-input>
        <el-button @click="requestLac">提交</el-button>
        <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 8}"
            placeholder="请输入内容"
            v-model="wordOutput">
        </el-input>
    </div>


</template>

<script>
    export default {
        data() {
            return {
                wordInput:"",
                wordOutput:"",
            };
        },
        methods:{
            requestLac(){
                let self = this;
                self.wordOutput="";
                self.$axios.post(
                    "http://106.14.192.176:8888/lac/v1/tag",
                    {
                        text:self.wordInput
                    }
                ).then((res)=>{
                    let words = res.data.words;
                    for (let i in words) {
                        let element=words[i]
                        self.wordOutput += element.name+'['+element.type+']'
                    };
                })
            }
        }
    };
</script>
