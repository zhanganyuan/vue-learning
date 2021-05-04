<template>
  <div class="container">
    <div>已完成：{{ compeletes }} | 全部：{{ taskList.length }}</div>
    <div v-if="compeletes > 0" class="btn">
      <button @click="clearComplete">清除已完成</button>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "navFooter",
  props: {
    taskList: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    let compeletes = computed(() => {
      // 过滤已完成的
      let arr = props.taskList.filter((item) => {
        return item.complete;
      });
      return arr.length;
    });
    let all = ref(3);
    // 清除已完成
    let clearComplete = () => {
      console.log("clear");
      ctx.emit("clearComplete");
    };
    return {
      compeletes,
      all,
      clearComplete,
    };
  },
});
</script>

<style scoped lang='scss'>
.container {
  display: flex;
  align-items: center;
  .btn {
    margin-left: 10px;
  }
}
</style>