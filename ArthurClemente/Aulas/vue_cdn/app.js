const meuAppVue = {
    data() {
        return {
            nome: "Arthur Clemente",
            idade: 19,
            inputText: ""
        };
    },
};

Vue.createApp(meuAppVue).mount("#app");