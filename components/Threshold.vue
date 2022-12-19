<template>
    <v-card min-width="500px">
        <v-card-title class="justify-center">残量警告閾値設定</v-card-title>
        <v-card-text >
            <v-row class="mx-10">
                <v-col>
                    <v-text-field maxlength="3" class="shrink mx-10" :value="threshold" @input="$emit('update:threshold', $event)"></v-text-field>
                </v-col>
                <v-col>
                    <v-btn color="primary" @click="save" class="ml-n5 d-flex align-center">保存</v-btn>
                </v-col>
            </v-row>
            <v-row justify="center" v-if="Invalid">

                <p>閾値が不正です</p>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<style scoped>
</style>
<script>
export default{
    props:{
        threshold : {
            type:Number,
            default:50,
            require:true,
        },
    },
    data(){
      return{
        Invalid:false,
      }  
    },
    methods:
    {
        save()
        {
            if (this.IsValid())
            {
                this.Invalid = false;
                this.$emit("savethreshold", this.threshold);
            }
            else
            {
                this.Invalid = true;
            }
        },

        IsValid()
        {
            if (this.threshold >= 0 && this.threshold < 100)
            {
                return true;
            }
            else{
                return false;
            }
        },

    }
}
</script>