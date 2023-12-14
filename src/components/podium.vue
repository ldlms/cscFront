<template>
  <div class="podium">
  <div class="top" :style="[isMobile ? Toggle ? {'display':gridDisplay} : {'display':notDisplay} : {'display':gridDisplay}]">
  <img class="livre" src="src\assets\L-Etranger.jpg" alt="bouquin">
  <p class="annonce">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis leo nunc. Etiam sagittis erat at turpis venenatis, eget porttitor massa convallis....</p>
  <div class="Bnote"><h1>10</h1></div>
  </div>
  </div>

  <div class="podium">
  <div class="flop" :style="[isMobile ? Toggle ? {'display':notDisplay} : {'display':gridDisplay} : {'display':gridDisplay}]">
  <img class="livre" src="src\assets\book-covers-big-2019101610.jpg-1300.jpg" alt="bouquin">
  <p class="annonce">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis leo nunc. Etiam sagittis erat at turpis venenatis, eget porttitor massa convallis....</p>
  <div class="Mnote"><h1>0</h1></div>
  </div>
  </div>

  <button @click="switchDiv" class="button-18" role="button">Voir les moins bonnes notes</button>

</template>

<script>
export default{
  data(){
    return{
      notDisplay:'none',
      gridDisplay:'grid',
      isMobile:false,
      Toggle:true,
      windowWidth:window.innerWidth
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth;
      if (this.windowWidth < 768) {
      this.isMobile = true;
      }else{
      this.isMobile = false;
      }
    window.addEventListener('resize', this.handleResize)
  },
  methods:{
    switchDiv(){
      this.Toggle = !this.Toggle;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 768) {
      this.isMobile = true;
      }else{
      this.isMobile = false;
      }
    },
  }
}
</script>

<style scoped>
.top{ 
  grid-template-columns: 1.3fr 0.9fr 0.8fr; 
  grid-template-rows: 0.1fr 1fr 0.5fr; 
  gap: 0px 0px; 
  grid-template-areas:
    ". . ." 
    "livre textetop textetop"
    "livre note ." 
}
.flop{
  grid-template-columns: 1.3fr 0.9fr 0.8fr; 
  grid-template-rows: 0.1fr 1fr 0.5fr; 
  gap: 0px 0px; 
  grid-template-areas:
    ". . ." 
    "livre textetop textetop"
    "livre note ." 
}
.livre{
  grid-area: livre;
  margin-left: 13px;
  margin-top: 45px;
}

.annonce{
  grid-area: textetop;
  margin-left: 10px;
  margin-top: 45px;
}
.Bnote{
  border-radius: 50%;
  background-color: #38BD36;
  grid-area:note;
  height: 70px;
  width: 70px;
  text-align: center;
  margin:13px;
  box-shadow:2px 5px 16px 0px #0B325E;
}
.Mnote{
  border-radius: 50%;
  background-color: #d71717;
  grid-area:note;
  height: 70px;
  width: 70px;
  text-align: center;
  margin:13px;
  box-shadow:2px 5px 16px 0px #0B325E;
}
  .button-18 {
  grid-area: nav;
  align-items: center;
  background-color: #336DBF;
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 20%;
  margin-right: 15%;
  margin-top: 10%;
  margin-bottom: 10%;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
}

.button-18:hover,
.button-18:focus { 
  background-color: #16437E;
  color: #ffffff;
}

.button-18:active {
  background: #09223b;
  color: rgb(255, 255, 255, .7);
}

.button-18:disabled { 
  cursor: not-allowed;
  background: rgba(0, 0, 0, .08);
  color: rgba(0, 0, 0, .3);
}
@media screen and (min-width: 767px) {
        .podium{
          display: inline-block;
          width: 40%;
          margin-left: 8%;
          margin-top: 3%;
        }
        .button-18{
          display: none;
        }
        .top{
          grid-template-columns: 1.3fr 0.9fr 0.8fr; 
          grid-template-rows: 0.1fr 1fr 0.5fr; 
          gap: 0px 0px; 
          grid-template-areas:
          ". . ." 
          "livre textetop textetop"
          "livre note ." 
        }
        .flop{
          grid-template-columns: 1.3fr 0.9fr 0.8fr; 
          grid-template-rows: 0.1fr 1fr 0.5fr; 
          gap: 0px 0px; 
          grid-template-areas:
          ". . ." 
          "livre textetop textetop"
          "livre note ." 
      }
    }
</style>