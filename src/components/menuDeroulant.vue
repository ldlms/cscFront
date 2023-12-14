<template>
  <div class="scrollable-container" ref="scrollableContainer">
    <div class="scrollable" ref="scrollable">
      <div class="content">
        <div class="container" ref="container">
        <img class="pfp" src="src\assets\blank-profile-picture-973460_960_720-1.png">
        <div class="extrait">Lorem Ipsum...</div>
        <div class="resume">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Aliquam iaculis leo nunc. Etiam sagittis erat at turpis venenatis,<br> eget porttitor massa convallis....</div>
        <img class="imageLivre" src="src\assets\9780593099322-e1571220892158.jpeg" alt="Image 1">
        <div class="Bnote"><h1>10</h1></div>
        </div>
        <div class="container">
        <img class="pfp" src="src\assets\blank-profile-picture-973460_960_720-1.png">
        <div class="extrait">Lorem Ipsum...</div>
        <div class="resume">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Aliquam iaculis leo nunc. Etiam sagittis erat at turpis venenatis,<br> eget porttitor massa convallis....</div>
        <img class="imageLivre" src="src\assets\couverture-de-livre-9.jpg" alt="Image 1">
        <div class="Mnote"><h1>2</h1></div>
        </div>
        <div class="container">
        <img class="pfp" src="src\assets\blank-profile-picture-973460_960_720-1.png">
        <div class="extrait">Lorem Ipsum...</div>
        <div class="resume">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Aliquam iaculis leo nunc. Etiam sagittis erat at turpis venenatis,<br> eget porttitor massa convallis....</div>
        <img class="imageLivre" src="src\assets\couverture-de-livre-16.jpg" alt="Image 1">
        <div class="Vnote"><h1>5</h1></div>
        </div>
        <div class="container">
        <img class="pfp" src="src\assets\blank-profile-picture-973460_960_720-1.png">
        <div class="extrait">Lorem Ipsum...</div>
        <div class="resume">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Aliquam iaculis leo nunc. Etiam sagittis erat at turpis venenatis,<br> eget porttitor massa convallis....</div>
        <img class="imageLivre" src="src\assets\images.jpg" alt="Image 1">
        <div class="Bnote"><h1>8</h1></div>
        </div>
        <div class="container">
        <img class="pfp" src="src\assets\blank-profile-picture-973460_960_720-1.png">
        <div class="extrait">Lorem Ipsum...</div>
        <div class="resume">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Aliquam iaculis leo nunc. Etiam sagittis erat at turpis venenatis,<br> eget porttitor massa convallis....</div>
        <img class="imageLivre" src="src\assets\9780593099322-e1571220892158.jpeg" alt="Image 1">
        <div class="Mnote"><h1>1</h1></div>
        </div>
        <div class="container">
        <img class="pfp" src="src\assets\blank-profile-picture-973460_960_720-1.png">
        <div class="extrait">Lorem Ipsum...</div>
        <div class="resume">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Aliquam iaculis leo nunc. Etiam sagittis erat at turpis venenatis,<br> eget porttitor massa convallis....</div>
        <img class="imageLivre" src="src\assets\9780593099322-e1571220892158.jpeg" alt="Image 1">
        <div class="Bnote"><h1>10</h1></div>
        </div>
      </div>
      <button class="scroll-btn prev-btn" @click="scrollToLeft"><span>&lt;</span></button>
      <button class="scroll-btn next-btn" @click="scrollToRight"><span>&gt;</span></button>
    </div>
  </div>
</template>





<script>
export default{
  data(){
    return{
      largeur:0,
    }
  },
methods: {
  scrollToLeft() {
    const computedStyle = getComputedStyle(this.$refs.container);
    const borderLeftWidth = parseInt(computedStyle.borderLeftWidth, 10);
    const borderRightWidth = parseInt(computedStyle.borderRightWidth, 10);
    const marginLeft = parseInt(computedStyle.marginLeft, 10);
    const marginRight = parseInt(computedStyle.marginRight, 10);
    this.largeur = this.$refs.container.offsetWidth + borderLeftWidth + borderRightWidth + marginLeft + marginRight;;
      this.$refs.scrollableContainer.scrollBy({
        left: -this.largeur, 
        behavior: "smooth" 
      });
    },
    scrollToRight(){
      const computedStyle = getComputedStyle(this.$refs.container);
      const borderLeftWidth = parseInt(computedStyle.borderLeftWidth, 10);
      const borderRightWidth = parseInt(computedStyle.borderRightWidth, 10);
      const marginLeft = parseInt(computedStyle.marginLeft, 10);
      const marginRight = parseInt(computedStyle.marginRight, 10);
      this.largeur = this.$refs.container.offsetWidth + borderLeftWidth + borderRightWidth + marginLeft + marginRight;;
      this.$refs.scrollableContainer.scrollBy({
        left: this.largeur, 
        behavior: "smooth" 
      });
    }
},
mounted() {
  const computedStyle = getComputedStyle(this.$refs.container);
  const borderLeftWidth = parseInt(computedStyle.borderLeftWidth, 10);
  const borderRightWidth = parseInt(computedStyle.borderRightWidth, 10);
  const marginLeft = parseInt(computedStyle.marginLeft, 10);
  const marginRight = parseInt(computedStyle.marginRight, 10);
  this.largeur = this.$refs.container.offsetWidth + borderLeftWidth + borderRightWidth + marginLeft + marginRight;;
  }
}
</script>


<style scoped>
.container {
  display: grid; 
  margin-top: 2%;
  margin-bottom: 5%;
  margin-right: 1%;
  width: 150%;
  grid-template-columns: 1.3fr; 
  grid-template-rows: 0.7fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "pfp "
    "extrait"
    "livre"; 
}
.pfp{
  height: 55px;
  width: 55px;
  border-radius: 50%;
  grid-area: pfp;
}
.extrait{
  grid-area: extrait;
  font-size: 1.3em;
}
.imageLivre{
  box-shadow:2px 5px 16px 0px #0B325E;
  grid-area: livre;
}
.Vnote{
  grid-area: livre;
  border-radius: 50%;
  background-color: #525a52;
  height: 70px;
  width: 70px;
  margin-left: 40%;
  margin-top: 60%;
  box-shadow:2px 5px 16px 0px #0B325E;
  text-align: center;
}
.Bnote{
  grid-area: livre;
  border-radius: 50%;
  background-color: #38BD36;
  height: 70px;
  width: 70px;
  margin-left: 40%;
  margin-top: 60%;
  box-shadow:2px 5px 16px 0px #0B325E;
  text-align: center;
}
.Mnote{
  grid-area: livre;
  border-radius: 50%;
  background-color: #d71717;
  height: 70px;
  width: 70px;
  margin-left: 40%;
  margin-top: 60%;
  box-shadow:2px 5px 16px 0px #0B325E;
  text-align: center;
}
.resume{
  display: none;
}
.scrollable-container {
  white-space: nowrap;
  position: relative;
  overflow-y: scroll;
}

.scrollable {
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  height: auto;
  padding: 10px;
  margin-right: 70px;
}

.content {
  display: flex;
  flex-wrap: nowrap;
}

.scrollable img {
  margin-right: 20px;
}

.scroll-btn {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.scroll-btn span {
  display: inline-block;
  font-size: 30px;
  line-height: 1;
}

.scroll-btn:hover {
  opacity: 1;
}

.prev-btn {
  left: 0;
}

.next-btn {
  right: 0;
}
@media screen and (min-width: 767px) {
.container {
display: grid; 
gap: 0px 0px; 
grid-template-areas: 
  "pfp extrait ."
  ". resume ."
  "livre note ."; 
}
.pfp{
  height: 55px;
  width: 55px;
  border-radius: 50%;
  grid-area: pfp;
}
.extrait{
  grid-area: extrait;
  font-size: 1.3em;
}
.imageLivre{
  box-shadow:2px 5px 16px 0px #0B325E;
  grid-area: livre;
}
.Vnote{
  grid-area: livre;
  border-radius: 50%;
  background-color: #525a52;
  height: 70px;
  width: 70px;
  margin-left: 90%;
  margin-top: 60%;
  box-shadow:2px 5px 16px 0px #0B325E;
  text-align: center;
}
.Bnote{
  grid-area: livre;
  border-radius: 50%;
  background-color: #38BD36;
  height: 70px;
  width: 70px;
  margin-left: 90%;
  margin-top: 60%;
  box-shadow:2px 5px 16px 0px #0B325E;
  text-align: center;
}
.Mnote{
  grid-area: livre;
  border-radius: 50%;
  background-color: #d71717;
  height: 70px;
  width: 70px;
  margin-left: 90%;
  margin-top: 60%;
  box-shadow:2px 5px 16px 0px #0B325E;
  text-align: center;
}
.resume{
  display: block;
  grid-area: resume;
}
}
</style>