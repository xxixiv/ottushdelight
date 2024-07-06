<template>
    <input type="checkbox" @click="toggleTheme" id="darkmode-toggle"/>
    <label for="darkmode-toggle">
      <v-icon class="sun pt-1 pl-4" style="z-index:1001" icon="fa-regular fa-sun" size="x-small"></v-icon>
      <v-icon class="moon  pl-9" style="z-index:1001"  icon="fa-regular fa-moon" size="x-small" ></v-icon>
    </label>
</template>

<script>
import { useTheme } from 'vuetify'
export default {
setup() {
    const theme = useTheme()
    return { theme }
  },
  methods: {
    toggleTheme() {
      this.theme.global.name.value = this.theme.global.current.value.dark ? 'light' : 'dark'
    }
},
}
</script>

<style scoped>
.sun{
  color: v-bind("theme.global.current.value.dark ? '#d88603' : 'white'");
}

label {
  width: 70px;
  height: 29px;
  position: relative;
  display: block!important;
  background: #ebebeb;
  border-radius: 15px;
  box-shadow: inset 0px 5px 10px rgba(0,0,0,0.4), inset 0px -5px 10px rgba(255,255,255,0.4)!important;
  transition: 0.3s;
  cursor: pointer!important;
}

label:after {
 content: "";
  width: 23px;
  height: 23px;
  position: absolute!important;
  top: 3px;
  left: 5px;
  background: linear-gradient(180deg, #ffcc89,#d88603);
  border-radius: 15px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
  transition: 0.3s;

}
input:checked + label {
  background: #242424!important;
}

input:checked + label:after {
  transform: translate(160%)!important;
  background: linear-gradient(180deg, #777, #3a3a3a)!important;
}

input:checked,
input {
  visibility: hidden!important;
}
</style>