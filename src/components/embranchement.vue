<template>
    <div class="container">
        <div class="buttons">
            <button><span class="boutton" @click="$emit('critique')">Publier une critique</span></button>
            <br>
            <button><span class="boutton">Noter sans critiquer</span></button>
        </div>
    </div>
</template>

<script>
export default{}
</script>

<style scoped>
.container{
    margin-top: 30%;
    margin-left: 28%;
}
.buttons{
    margin: auto;
}
button {
  /* Variables */
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  font-size: 17px;
  font-weight: bold;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  margin: 5% 20%;
}
.boutton{
    display: block;
    box-sizing: border-box;
    border: 2px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.75em 1.5em;
    background: var(--button_color);
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
    background-color: #336DBF;
    color: white;
    margin: auto;
    box-shadow:2px 5px 16px 0px #0B325E;
}
button:hover .boutton{
    transform: translateY(-0.33em);
} 
button:active .boutton{
    transform: translateY(0);
}
@media screen and (max-width: 768px) {
    .container{
    margin-top: 120%;
    margin-left: 0%;
}
.buttons{
    margin: auto;
}
button {
  /* Variables */
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  font-size: 17px;
  font-weight: bold;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  margin: 5% 20%;
}
.boutton{
    display: block;
    box-sizing: border-box;
    border: 2px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.75em 1.5em;
    background: var(--button_color);
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
    background-color: #336DBF;
    color: white;
    margin: auto;
    box-shadow:2px 5px 16px 0px #0B325E;
}
button:hover .boutton{
    transform: translateY(-0.33em);
} 
button:active .boutton{
    transform: translateY(0);
}
}
</style>