<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="backHome">回到上个页面</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "About",
  setup() {
    let router = useRouter()
    let backHome = () => {
      router.go(-1)
    }
    return{
      backHome
    }
  },
});
</script>
