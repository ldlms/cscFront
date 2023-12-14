<template>
    <div class="search-results" v-if="this.searchQuery.length !=0">
        <ul>
            <li v-for="(result,index) in searchResults">
                <router-link :to="'/pageLivre/' + result.id" @click="this.searchQuery=''"> index:{{index}} item:{{ result.volumeInfo.title }}</router-link>
            </li>
        </ul>
        </div>
        <transition name="slide">
        <div v-if="search" class="divinput">
        <input placeholder="Recherche un livre" @input="searchAPI" class="input" v-model="searchQuery">
        </div>
        </transition>
    <div class="menuMobile">
        <router-link to="/" class="fa-solid fa-house"></router-link>
        <i class="fa-solid fa-magnifying-glass"  @click="token"></i>
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-bell"></i>
    </div>
</template>

<script>
export default{
    data(){
        return{
            searchQuery:'',
            searchResults:[],
            search:false
        }
    },
    methods:{
        token(){
            this.search = !this.search
            console.log(this.search)
        },
        searchAPI(){
            fetch("https://www.googleapis.com/books/v1/volumes?q="+ encodeURIComponent(this.searchQuery))
            .then(async response => {
                const data = await response.json();
                console.log(data);
            this.searchResults = data.items;
        })
        .catch(error => {
        console.error("There was an error!", error);
        })
}}}
</script>

<style scoped>
.menuMobile{
        background-color: #336DBF;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-areas: 
        ". . . .";
        position: fixed;
        width: 100%;
        height: 80px;
        bottom: 0;
}
.divinput{
    background-color: #0B325E;
    top: 83%;
    position: absolute;
    width: 100%;
    height: 8%;
}
.input {
  background: none;
  border: none;
  outline: none;
  position: absolute;
  max-width: 190px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 9999px;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  margin-left: 20%;
  margin-top: 3%;
  color:black;
  background-color: #fff;
}
.fa-solid{
    color: white;
    text-align: center;
    line-height: 2;
    font-size: xx-large;
    margin: 5% 0;
}
.search-results {
  top: 40%; /* Positionner en dessous de la barre de recherche */
  left: 0;
  right: 0;
  background-color:white;
  position: absolute;
  z-index: 3;
}
.slide-enter-active {
  animation: slide-in 0.3s ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 0.3s ease-out backwards;
}
@keyframes slide-in {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}
    @media screen and (min-width: 767px) {
        .menuMobile{
            display:none;
        }
    }
</style>