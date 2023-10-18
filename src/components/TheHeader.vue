<script>
export default {

}
</script>

<template>
    <header>
        <div class="container-fluid">
            <nav class="container py-3 d-flex justify-content-between">

                <div class="d-flex">
                    <div class="p-0 container-image rounded-circle me-4">
                        <RouterLink :to="{ name: 'home' }">
                            <img class="profile-image" src="../../public/images/foto-profilo.jpg" alt="">
                        </RouterLink>
                    </div>
                    <ul class="d-flex list-unstyled mb-0 align-items-center">
                        <li class="me-4">
                            <RouterLink :to="{ name: 'home' }">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'projects' }">Progetti</RouterLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="d-flex list-unstyled mb-0 align-items-center">
                        <li class="me-4">
                            <a href="http://127.0.0.1:8000/login" target="_blank">Login</a>
                        </li>
                        <li>
                            <a class="github" href="https://github.com/MarcoImpellizzeri" target="_blank"><i
                                class="fa-brands fa-github"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.container-fluid {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);

    .container-image {
        width: 60px;
        height: 60px;
        overflow: hidden;
        display: flex;
        align-items: center;
        position: relative;

        .profile-image {
            width: 100%;
            position: absolute;
            top: -5px;
        }
    }

    a {
        font-size: 1.1rem;
        text-decoration: none;
        color: black;
    }

    .github {
        font-size: 2.5rem;
    }
}
</style>




