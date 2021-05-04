<template>
  <div class="about">
    <h1>This is an details page</h1>
    <child :msg="msg" @sendMsg="sendMsg"></child>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Child from "../components/Child/Child.vue";

export default defineComponent({
  name: "Details",
  components: {
    Child,
  },
  setup() {
    let msg = ref("这是父组件的数据");
    let sendMsg = (val) => {
      console.log(val);
    };
    
    return {
      msg,
      sendMsg,
    };
  },
});
</script>

