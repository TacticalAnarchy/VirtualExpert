<template>
<div>
  <Input />
  <router-link to="VirtualExpert">to virtual expert</router-link>
  <router-link to="Search">to Search</router-link>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is=" Component " />
      </keep-alive>
    </transition>
  </router-view>
</div>

</template>

<script>

  import Input from './components/Input'

  export default {
    name: 'App',
    components: {
      Input,
    },
  }
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  border: none;
  box-sizing: border-box;
}
body {
  background: #333333;
  color: white;
}

#app {
  position: absolute;
  border: 2px solid black;
  height: 90%;
  width: 60%;
  left: 20%;
  bottom: 5%;
  display: flex;
  flex-direction: column;
}

.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
