<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    methods: {
        getImageUrl(project) {
            return `http://127.0.0.1:8000/storage/${project.image}`
        }
    }
}
</script>

<template>
    <div class="card">
        <router-link :to="{ name: 'project.show', params: { slug: project.slug } }">
            <img :src="getImageUrl(project)" class="card-img-top" alt="image not found">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <small class="card-text fw-bold">
                    {{ project.type.name }}
                </small>
                <h6>Linguaggi utilizzati:</h6>
                <div>
                    <div v-for="technology in project.technologies" :key="technology.id" class="badge me-2"
                        :style="`background-color: ${technology.color}`">
                        {{ technology.name }}
                    </div>
                </div>
                <h6>Descrizione:</h6>
                <p class="card-text">{{ project.description }}</p>
            </div>
        </router-link>

        <div class="d-flex justify-content-end">
            <a class="github" :href="project.github_url" target="_blank"><i class="fa-brands fa-github"></i></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    height: 100%;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

    a {
        text-decoration: none;
        color: black;

        img {
            min-height: 208.5px;
            object-fit: cover;
            object-position: top left;
        }

        h6 {
            margin-top: 10px;
        }
    }
}

.github {
    padding: 0 1rem;
    font-size: 1.9rem;
}
</style>