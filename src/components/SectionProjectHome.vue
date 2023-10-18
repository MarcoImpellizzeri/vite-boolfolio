<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    components: {
        ProjectCard,
    },
    data() {
        return {
            projects: [],
            pagination: {}
        }
    },
    methods: {
        fetchData() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then((response) => {
                    // salviamo la lista dei progetti
                    this.projects = response.data.data.slice(0, 3);

                    // cancello il data da response.data.data
                    delete response.data.data;

                    // salvo la paginazione dei miei progetti
                    this.pagination = response.data;
                    console.log(response);
                })
        }
    },
    mounted() {
        this.fetchData();
    }
}
</script>

<template>
    <div class="container">
        <div class="container py-5">
            <h2 class="text-center pb-5">I miei progetti</h2>
            <div class="row row-cols-3 gy-5">
                <div class="col" v-for="project in projects" :key="project.id">
                    <ProjectCard :project="project" />
                </div>
            </div>
            <div class="d-flex justify-content-center my-button">
                <RouterLink class="btn btn-primary" :to="{ name: 'projects' }">Vedi tutti i progetti</RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h2 {
    font-size: 3.2rem
}

.my-button {
    margin: 100px 0;
    
    a {
        font-size: 1.2rem;
    }
}
</style>