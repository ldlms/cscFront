<template>
<div class="scrollable-container" ref="container">
    <div class="scrollable">
      <div class="content">
        <div class="container" @click="$emit('toggleEmbranchement')"><div class="note z" @click="zero"><h1>0</h1></div></div>
        <div class="container" @click="$emit('toggleEmbranchement')"><div class="note M" @click="un"><h1>1</h1></div></div>
        <div class="container" @click="$emit('toggleEmbranchement')"><div class="note M" @click="deux"><h1>2</h1></div></div>
        <div class="container" @click="$emit('toggleEmbranchement')"><div class="note M" @click="trois"><h1>3</h1></div></div>
        <div class="container" @click="$emit('toggleEmbranchement')"><div class="note M" @click="quatre"><h1>4</h1></div></div>
        <div class="container" @click="$emit('toggleEmbranchement')"><div class="note mid" ref="mid" @click="cinq"><h1>5</h1></div></div>
        <div class="container" @click="$emit('toggleEmbranchement')"><div class="note B" @click="six"><h1>6</h1></div></div>
        <div class="container" @click="$emit('toggleEmbranchement')"><div class="note B" @click="sept"><h1>7</h1></div></div>
        <div class="container" @click="$emit('toggleEmbranchement')"><div class="note B" @click="huit"><h1>8</h1></div></div>
        <div class="container" @click="$emit('toggleEmbranchement')"><div class="note B" @click="neuf"><h1>9</h1></div></div>
        <div class="container" @click="$emit('toggleEmbranchement')"><div class="note B" @click="dix"><h1>10</h1></div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      note: 0
    }

  },
  methods:{
    zero(){
      this.note = 0
      this.$emit('note',this.note);
    },
    un(){
      this.note = 1
      this.$emit('note',this.note);
    },
    deux(){
      this.note = 2
      this.$emit('note',this.note);
    },
    trois(){
      this.note = 3
      this.$emit('note',this.note);
    },
    quatre(){
      this.note = 4
      this.$emit('note',this.note);
    },
    cinq(){
      this.note = 5
      this.$emit('note',this.note);
    },
    six(){
      this.note = 6
      this.$emit('note',this.note);
    },
    sept(){
      this.note = 7
      this.$emit('note',this.note);
    },
    huit(){
      this.note = 8
      this.$emit('note',this.note);
    },
    neuf(){
      this.note = 9
      this.$emit('note',this.note);
    },
    dix(){
      this.note = 10
      this.$emit('note',this.note);
    },
  },
    updated() {
    const container = this.$refs.container;
    const mid = container.querySelector('.mid');
    const distance = mid.offsetLeft - container.offsetWidth / 2 + mid.offsetWidth / 2;
    container.scrollLeft = distance;
  },
};
</script>

<style scoped>
.scrollable-container {
  white-space: nowrap;
  position: relative;
  overflow: scroll;
  margin-top: 37%;
}
.scrollable {
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  height: auto;
  padding: 10px;
}
.container{
    margin:0 10%;
    font-size: large;
}
.content {
  display: flex;
  flex-wrap: nowrap;
  scroll-snap-align: center;
  padding-bottom: 5%;
}
.note.M{
  border-radius: 50%;
  background-color: #d71717;
  height: 70px;
  width: 70px;
  box-shadow:2px 5px 16px 0px #0B325E;
  text-align: center;
}
.note.B{
  border-radius: 50%;
  background-color: #38BD36;
  height: 70px;
  width: 70px;
  box-shadow:2px 5px 16px 0px #0B325E;
  text-align: center;
}
.note.mid{
  scroll-snap-align: center;
  border-radius: 50%;
  background-color: #525a52;
  height: 70px;
  width: 70px;
  box-shadow:2px 5px 16px 0px #0B325E;
  text-align: center;
}
.note.zero{
  border-radius: 50%;
  background-color: #525a52;
  height: 70px;
  width: 70px;
  box-shadow:2px 5px 16px 0px #0B325E;
  text-align: center;
}
.note.z{
  border-radius: 50%;
  background-color: #000000;
  color: white;
  height: 70px;
  width: 70px;
  box-shadow:2px 5px 16px 0px #0B325E;
  text-align: center;
}
.note{
    display: grid;
    align-content: center;
}
@media screen and (max-width: 768px) {
  .scrollable-container {
  white-space: nowrap;
  position: relative;
  overflow: scroll;
  margin-top: 120%;
}
.scrollable {
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  height: auto;
  padding: 10px;
}
.container{
    margin:0 5%;
    font-size: large;
}
.content {
  display: flex;
  flex-wrap: nowrap;
  scroll-snap-align: center;
  padding-bottom: 5%;
}
.note.M{
  border-radius: 50%;
  background-color: #d71717;
  height: 70px;
  width: 70px;
  box-shadow:2px 5px 16px 0px #0B325E;
  text-align: center;
}
.note.B{
  border-radius: 50%;
  background-color: #38BD36;
  height: 70px;
  width: 70px;
  box-shadow:2px 5px 16px 0px #0B325E;
  text-align: center;
}
.note.mid{
  scroll-snap-align: center;
  border-radius: 50%;
  background-color: #525a52;
  height: 70px;
  width: 70px;
  box-shadow:2px 5px 16px 0px #0B325E;
  text-align: center;
}
.note.zero{
  border-radius: 50%;
  background-color: #525a52;
  height: 70px;
  width: 70px;
  box-shadow:2px 5px 16px 0px #0B325E;
  text-align: center;
}
.note.z{
  border-radius: 50%;
  background-color: #000000;
  color: white;
  height: 70px;
  width: 70px;
  box-shadow:2px 5px 16px 0px #0B325E;
  text-align: center;
}
.note{
    display: grid;
    align-content: center;
}
}
</style>