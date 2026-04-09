<template>
    <div>
        <img 
        v-show="isImgVisivel"
        width="300"
        src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Chevrolet_Monza.JPG" alt=""
        />
        <button @click="apareceEsconde(), alterarNomeBotao()">{{ nomeBotao }}</button>
    </div>
</template>

<script>
export default {
    name: "ImagemComponent",
    data() {
        return {
            isImgVisivel: true,
            nomeBotao: "Esconder"
        }
    },
    methods: {
        apareceEsconde() {
            this.isImgVisivel = !this.isImgVisivel;

            if (this.isImgVisivel) {
                this.nomeBotao = "Esconder";
            } else {
                this.nomeBotao = "Aparecer";
            }
        },
    },
    props:{
        urlImagem: String,
        larguraImg: int
    },
};
</script>

<style scoped></style> 