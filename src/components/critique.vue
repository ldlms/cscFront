<template>
    <div class="container">
    <div class="resume">
        <p class="textResume">{{ resume }}</p>
    </div>
    <div class="breadcrumbs">
        <p>{{ autheur }} | {{ genre }} | {{ date }}</p>
    </div>
    <hr>
    <div class="critiques">
        <div v-if="!data"><p>Aucune critique ici pour le moment !</p></div>
        <div v-else class="critique" v-for="datas in data">
            <div class="topCrit">
            <img class="pfp" src="/src/assets/blank-profile-picture-973460_960_720-1.png">
            <div class="titreCritique">{{ datas.results.titreCritique }}</div>
            <div class="noteCritique">{{ datas.results.note }}</div>
            </div>
            <div class="midCrit">
                <p class="texteCritique">{{ datas.results.critique }}</p>
            </div>
            <div class="botCrit">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-comment-dots"></i>
            <i class="fa-solid fa-flag"></i>
            </div>
            <hr>
        </div>
    </div>
    </div>
</template>


<script>
export default {
    props:{
        resume:{
            type:String
        },
        autheur:{
            type:String
        },
        date:{
            type:String
        },
        genre:{
            type:String
        },
        data:{
            type:Object
        }
    },
Data(){
}
};
</script>

<style scoped>
.container{
    overflow-y: scroll;
    position: absolute;
    height: 50%;
    width: 80%;
    margin: 0 10%;
    transform: translateY(93%);
    text-align: center;
    
}
.resume{
    grid-area: resume;
    margin-left: 5%;
    overflow: scroll;
}
.topCrit{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-areas: 
        "pfp titreCritique noteCritique";
    align-items:center ;
    justify-items:center ;
}
.botCrit{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    justify-items: center;
    font-size:x-large;
}
.pfp{
    grid-area: pfp;
    height: 55px;
    width: 55px;
    border-radius: 50%;
}
.titreCritique{
    grid-area: titreCritique;
}
.noteCritique{
    display: grid;
    grid-area: noteCritique;
    border-radius: 50%;
    background-color: #38BD36;
    text-align: center;
    align-content: center;
    box-shadow:2px 5px 12px 0px #0B325E;
    width: 35%;
    height: 70%;
}
.texteCritique{
    margin-left: 3%;
    margin-right: 3%;
}
.breadcrumbs{
    margin-left: 3%;
}
@media screen and (max-width: 768px) {
.container{
    overflow-y: scroll;
    position: absolute;
    height: 50%;
    margin: auto 0;
    margin-top: 7%;
    transform: translateY(74%);
    width: 100%;
    
}
.resume{
    grid-area: resume;
    margin-left: 5%;
    overflow: scroll;
}
.topCrit{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-areas: 
        "pfp titreCritique noteCritique";
    align-items:center ;
    justify-items:center ;
}
.botCrit{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    justify-items: center;
    font-size:x-large;
}
.pfp{
    grid-area: pfp;
    height: 55px;
    width: 55px;
    border-radius: 50%;
}
.titreCritique{
    grid-area: titreCritique;
}
.noteCritique{
    display: grid;
    grid-area: noteCritique;
    border-radius: 50%;
    background-color: #38BD36;
    text-align: center;
    align-content: center;
    box-shadow:2px 5px 12px 0px #0B325E;
    width: 35%;
    height: 70%;
}
.texteCritique{
    margin-left: 3%;
    margin-right: 3%;
}
.breadcrumbs{
    margin-left: 3%;
}
}
</style>