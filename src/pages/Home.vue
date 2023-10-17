<script>
export default {

}
</script>

<template>
    <div class="container pt-5">
        <div class="row mb-5">
            <div class="col-9 intro m-0">
                <h2>Ciao, sono</h2>
                <h1>Marco Impellizzeri</h1>
                <h2>Un appassionato Web Developer.</h2>
            </div>
            <div class="col-3 p-0 container-image rounded-circle">
                <img class="profile-image" src="../../public/images/spider-logo.jpg" alt="">
            </div>
        </div>
        <div class="row">
            <div class="col-5 col-image">

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
                    Oltre al codice, amo immergermi nel mondo nerd, esplorando mondi fantastici e avventurandomi tra le
                    linee di
                    codice. Trovo ispirazione sia nelle complesse strutture dei videogiochi che nei paesaggi mozzafiato
                    delle
                    montagne, dove la natura stessa è una forma di arte.
                </p>
            </div>
            <div class="col-5 col-image">

            </div>
        </div>
        <div class="row">
            <div class="col-5 col-image">

            </div>
            <div class="col-7 col-text">
                <p>
                    Unire la mia passione per lo sviluppo web e il fascino del mondo nerd è ciò che rende il mio lavoro
                    entusiasmante. Benvenuto nel mio mondo digitale, dove la creatività incontra la tecnologia e la tua
                    visione
                    prende vita.
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    h1 {
        font-size: 6rem;
    }


    .container-image {
        width: 200px;
        height: 200px;
        overflow: hidden;
        display: flex;
        align-items: center;

        .profile-image {
            width: 100%;
        }
    }


    .row {
        margin-bottom: 30px;

        .col-text {
            height: 200px;
            font-size: 1.2rem;
        }
    }

}
</style>