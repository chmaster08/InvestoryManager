<template>
    <v-card min-width="500px">
        <v-card-title class="justify-center">Debug</v-card-title>
        <v-card-text >
            <v-row justify="center" class="my-5">
                <v-btn color="primary" @click="resetZero" >ゼロ点補正</v-btn>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script>
export default{
    methods:{

        resetZero: async function(){

            var tokenString = "token="+this.$store.getters["auth/dispToken"];
            var apiURL = this.$config.apiURL + "reset_base_gram" +tokenString;
            await this.$axios.get(apiURL, {
                headers: { "content-type": "application/x-www-form-urlencoded" }
            })
                .then((response) => {
                })
                .catch((error) => {
                    if (error.response) {
                        if (error.response.status == 403) {
                            this.$router.push('/login');
                        }
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.statusText);
                        console.log(error.response.headers);
                    }
                });
        },
        }
    }

</script>