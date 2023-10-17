<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: [],
        }
    },
    methods: {
        fetchData() {
            axios.get('http://127.0.0.1:8000/api/projects/' + this.$route.params.slug)
                .then((response) => {
                    this.projects = response.data;
                })
        },
        getImageUrl(project) {
            return `http://127.0.0.1:8000/storage/${project.image}`
        }
    },
    mounted() {
        this.fetchData();
    }
}
</script>

<template>
    <div class="container my-show-container pb-5 px-0 my-5">
        <img v-if="projects.image" :src="getImageUrl(projects)" class="card-img-top" alt="image not found">
        <h1 class="fw-bold text-uppercase m-0">{{ projects.title }}</h1>
        <div class="p-5 d-flex">
            <div class="container-left">
                <h5>Descrizione:</h5>
                <p class="card-text">{{ projects.description }}</p>
            </div>
            <div class="container-right">
                <h5 v-if="projects.type">
                    {{ projects.type.name }}
                </h5>
                <h6>Linguaggi utilizzati:</h6>
                <div v-for="technology in projects.technologies" :key="technology.id" class="badge me-2"
                    :style="`background-color: ${technology.color}`">
                    {{ technology.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my-show-container {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    .container-left,
    .container-right {
        padding: 15px;
        width: 50%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    .container-right {
        margin-left: 10px;
    }
}
</style>