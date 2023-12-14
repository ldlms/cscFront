<template>
    <div class="container">
        <img class="livreProfil" :src="image" alt="Image 1">
        <div class="icon">

            <span @click="$emit('toggleRoue')"><i class="fa-solid fa-pen"></i></span>
            <i class="fa-solid fa-list-ul"></i>
            <i class="fa-solid fa-heart"></i>

        </div>
        <div class="petiteNote"><h1>?</h1></div>
        <div class="titre">{{ titre }}</div>
    </div>
</template>

<script>
export default{
    props:{
        titre:{
            type:String,
        },
        image:{
            type:String,
            required:true
        }
    },
}

</script>

<style scoped>

.container{
    display: grid; 
    grid-template-columns: 0.2fr 1.8fr 0.6fr; 
    grid-template-rows: 0.2fr 2fr 0.3fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        ". . ."
        "icon livre note"
        ". lorem .";
    background-color: #336DBF;
    position: fixed;
    width: 100%;
    height: 40%;
    top: 8%;
    z-index: 998;
}
.icon{
    display: grid;
    grid-area: icon;
    justify-content: end;
    align-items: center;
    align-content: space-between;
}
.livreProfil{
    display: grid;
    grid-area: livre;
    margin-left: 10%;
    margin-top: 5%;
    width: 10rem;
    height: 12.5rem;
    box-shadow:2px 5px 16px 0px #0B325E;
}
.titre{
    display: grid;
    grid-area: livre;
    font-size: x-large;
    margin-top: 3%;
    justify-items: center;
    margin-right: 30%;
    color: white;
}
.fa-solid{
    line-height: 2;
    font-size: xx-large;
    color: white;
}
.petiteNote{
    display: grid;
    grid-area: livre;
    border-radius: 50%;
    background-color: #38BD36;
    text-align: center;
    align-content: center;
    box-shadow:2px 5px 16px 0px #0B325E;
    margin-top: 10%;
    margin-left: 100%;
    height: 5rem;
    width: 5rem;
}

@media screen and (max-width: 768px) {
.container{
    display: grid; 
    grid-template-columns: 0.6fr 1.8fr 0.6fr; 
    grid-template-rows: 0.2fr 2fr 0.3fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        ". . ."
        "icon livre ."
        ". lorem .";
    background-color: #336DBF;
    position: fixed;
    width: 100%;
    top: 0;
}
.titre{
    display: grid;
    grid-area: lorem;
    font-size: x-large;
    margin-bottom: 20%;
    justify-content: end;
}
.icon{
    display: grid;
    grid-area: icon;
    justify-content: end;
    align-items: center;
    align-content: space-between;
}
.livreProfil{
    display: grid;
    grid-area: livre;
    margin-left: 10%;
    margin-top: 5%;
    width: 80%;
    height: 90%;
    box-shadow:2px 5px 16px 0px #0B325E;
}
.petiteNote{
    display: grid;
    grid-area: livre;
    border-radius: 50%;
    background-color: #38BD36;
    text-align: center;
    width: 4rem;
    height: 4rem;
    align-content: center;
    box-shadow:2px 5px 16px 0px #0B325E;
    margin-top: 10%;
    margin-left: 100%;
}
.fa-solid{
    line-height: 2;
    font-size: xx-large;
    color: white;
}
.note{
  display: grid;
  align-content: center;
  grid-area: livre;
  border-radius: 50%;
  background-color: #38BD36;
  height: 70px;
  width: 70px;
  box-shadow:2px 5px 16px 0px #0B325E;
  text-align: center;
  grid-area: lorem;
  position: absolute;
  margin-left: 35%;
  margin-top: 15% ;
  z-index: 1;
}
}
</style>