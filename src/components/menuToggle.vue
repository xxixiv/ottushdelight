<template>
    <div class="toggle" 
    @click="toggleclass" 
    :class="{ 'act': sidebar }">
      <span></span>
      <span></span>
      <span></span>
</div>
</template>

<script>
export default {
    data(){
    return {
      sidebar: false,
    }
  },
  methods: {
    toggleclass() {
      this.sidebar = !this.sidebar;
    },
  }
}

</script>

<style>
.toggle{
  position: relative;
  width: 40px;
  height: 37px;
  background: transparent;
   box-shadow: 0 10px 20px rgba(92, 92, 92, 0.08);
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  z-index: 101;
}

.toggle span{
transform: scale(70%);
position: absolute;
width: 20px;
height: 4px;
background: v-bind("theme.global.current.value.dark ? 'white' : 'black'");
transition: color 0.5s;
border-radius: 4px;
transition: 0.5s;
}

.toggle span:nth-child(1){
transform: translateY(-15px) scale(80%);
width: 20px;

}

.toggle.act span:nth-child(1){
width: 30px;
transform: translateY(0px) scale(80%) rotate(45deg);
transition-delay: 0.125s;
}


.toggle span:nth-child(2){
transform: translateY(15px);
width: 10px;

}

.toggle.act span:nth-child(2){
width: 30px;
transform: translateY(0px) scale(80%) rotate(315deg);
transition-delay: 0.25s;
}

.toggle.act span:nth-child(3){
transform: translateX(60px) scale(50%);
}
</style>