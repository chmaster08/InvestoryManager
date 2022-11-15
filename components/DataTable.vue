<template>
    <v-data-table :headers="headers" :items="items" :items-per-page="10" class="elevation-1">

    </v-data-table>
</template>

<script>
export default {

    props:{
        items : Array,
    },
    data (){
        return {
            headers : [
                {
                    text : "日時",
                    value : "date",
                },
                {
                    text : "社員ID",
                    value : "UserID",
                },
                {
                    text : "本数",
                    value : "diff",
                },
            ],
        }
    }
}
</script>