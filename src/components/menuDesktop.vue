

<template>
    <div class="menuDesktop">
        <input placeholder="Recherche un livre" @input="searchAPI" class="input" v-model="searchQuery">
        <div class="search-results" v-if="this.searchQuery.length !=0">
        <ul>
            <li v-for="(result,index) in searchResults">
                <router-link :to="'/pageLivre/' + result.id" @click="this.searchQuery=''"> index:{{index}} item:{{ result.volumeInfo.title }}</router-link>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return{
            searchQuery:'',
            searchResults:[],
        }
    },
    methods:{
        searchAPI(){
            fetch("https://www.googleapis.com/books/v1/volumes?q="+ encodeURIComponent(this.searchQuery))
            .then(async response => {
                const data = await response.json();
                this.searchResults = data.items;
                console.log(this.searchResults[0].id)

        })
        .catch(error => {
        console.error("There was an error!", error);
        })
}}}



</script>

<style scoped>
    .menuDesktop{
        background-color: #336DBF;
        text-align: center;
        box-shadow:2px 5px 16px 0px #0B325E;
        position: fixed;
        width: 100%;
        height: 8%;
        left: 0;
        top: 10;
        z-index: 999;
    }
    .input {
  background: none;
  border: none;
  outline: none;
  max-width: 190px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 9999px;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  margin: 1em auto;
  color:black;
  background-color: #fff;
}
.search-results {
  top: 40%; /* Positionner en dessous de la barre de recherche */
  left: 0;
  right: 0;
  background-color:white;
  position: absolute;
  color: #fff;
  width:50vh;
  margin:10% 35%;
  z-index: 3;
}
.image{
    height: 2rem;
    width: 2rem;
}
    @media screen and (max-width: 768px) {
        .menuDesktop{
            display:none;
        }
    }
</style>