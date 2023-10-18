<script>
export default {
    data() {
        return {
            languages: [
                {
                    name: 'HTML',
                    color: '#E44D26',
                    icon: '<i class="fa-brands fa-html5"></i>',
                },
                {
                    name: 'CSS',
                    color: '#2965F1',
                    icon: '<i class="fa-brands fa-css3-alt"></i>',
                },
                {
                    name: 'JS',
                    color: '#F0DB4F',
                    icon: '<i class="fa-brands fa-js"></i>',
                },
                {
                    name: 'PHP',
                    color: '#787CB5',
                    icon: '<i class="fa-brands fa-php"></i>',
                },
                {
                    name: 'Vue.js',
                    color: '#4FC08D',
                    icon: '<i class="fa-brands fa-vuejs"></i>',
                },
                {
                    name: 'SCSS',
                    color: '#CC6699',
                    icon: '<i class="fa-brands fa-sass"></i>',
                },
                {
                    name: 'Bootstrap',
                    color: '#563D7C',
                    icon: '<i class="fa-brands fa-bootstrap"></i>',
                },
                {
                    name: 'Laravel',
                    color: '#FF2D20',
                    icon: '<i class="fa-brands fa-laravel"></i>',
                },
            ]
        }
    }
}
</script>

<template>
    <div class="container-fluid py-5">
        <div class="container">
            <h2 class="text-center pb-5">Linguaggi e FrameWork che utilizzo</h2>
            <div class="row row-cols-4 pb-5 gy-5">
                <div class="col d-flex justify-content-center" v-for="(language, i) in languages" :key="`${language} + i`">
                    <div class="card">
                        <div class="card-body text-center lenguage">
                            <span v-html="language.icon" :style="{ color: language.color }"></span>
                            <h5 class="card-title">{{ language.name }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-fluid {
    background-color: #368df0;

    h2 {
        font-size: 3.2rem
    }

    .card {
        width: 200px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        transition: transform 0.3s ease-out;
        
        &:hover {
            transform: scale(1.1);
        }
        
        span {
            font-size: 3rem;
        }
    }
}
</style>