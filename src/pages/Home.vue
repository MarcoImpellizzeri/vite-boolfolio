<script>
import SectionProjectHome from '../components/SectionProjectHome.vue';

export default {
    components: {
        SectionProjectHome,
    }
}
</script>

<template>
    <div class="container pt-5">
        <div class="row intro">
            <div class="col-9 m-0">
                <h2>Ciao, sono</h2>
                <h1>Marco Impellizzeri</h1>
                <h2>Un appassionato Web Developer.</h2>
            </div>
            <div class="col-3 p-0 container-image rounded-circle">
                <img class="profile-image" src="../../public/images/foto-profilo.jpg" alt="">
            </div>
        </div>
        <div class="row">
            <div class="col-5">
                <div class="col-image">
                    <img class="duck" src="../../public/images/paperella-prog.png" alt="">
                </div>
            </div>
            <div class="col-7 col-text">
                <p>
                    Ho frequentato Boolean Careers, un'esperienza
                    formativa che ha plasmato la mia passione per la programmazione e mi ha fornito solide basi per
                    affrontare sfide
                    complesse nel mondo dello sviluppo web. Attualmente, mi trovo nella fase successiva del mio percorso
                    professionale, pronto ad applicare le conoscenze acquisite in nuovi progetti e sfide.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-7 col-text">
                <p>
                    Unire la mia passione per lo sviluppo web e il fascino del mondo nerd è ciò che rende il mio lavoro
                    entusiasmante. Benvenuto nel mio mondo digitale, dove la creatività incontra la tecnologia e la tua
                    visione
                    prende vita.
                </p>
            </div>
            <div class="col-5">
                <div class="col-image">
                    <img class="while" src="../../public/images/while.png" alt="">
                    <img class="play" src="../../public/images/Playstation.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <SectionProjectHome />
    </div>
</template>

<style lang="scss" scoped>
.container {
    .intro {
        margin-bottom: 100px;

        h1 {
            font-size: 6rem;
        }
    }

    .container-image {
        width: 300px;
        height: 300px;
        overflow: hidden;
        display: flex;
        align-items: center;
        position: relative;
        border: 5px solid white;
        // box-shadow: rgba(0, 0, 0, 0.4) 0px 5px, rgba(0, 0, 0, 0.3) 0px 10px, rgba(0, 0, 0, 0.2) 0px 15px, rgba(0, 0, 0, 0.1) 0px 20px, rgba(0, 0, 0, 0.05) 0px 25px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 18px 28px, rgba(0, 0, 0, 0.23) 0px 15px 15px;

        .profile-image {
            width: 100%;
            position: absolute;
            top: -20px;
        }
    }


    .row {
        margin-bottom: 40px;
        height: 300px;

        .col-text {
            font-size: 1.3rem;
            display: flex;
            align-items: center;

            p {
                margin: 0;
            }
        }

        .col-image {
            position: relative;

            .duck {
                height: 260px;
                position: absolute;
                top: 27px;
                right: 160px;
            }

            .play {
                height: 274px;
                position: absolute;
                top: -20px;
                right: -53px;
                rotate: 15deg;
            }

            .while {
                height: 328px;
                rotate: 350deg;
                position: absolute;
                top: -45px;
                right: 230px
            }
        }
    }
}
</style>