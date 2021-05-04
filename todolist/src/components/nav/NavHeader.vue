<template>
  <div>
    <input
      type="text"
      placeholder="请输入任务名称"
      v-model="taskName"
      @keydown.enter="enter"
    />
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "navHeader",
  setup(props, ctx) {
    let taskName = ref("");
    // 按回车事件
    let enter = () => {
      ctx.emit("addTask", taskName.value);
      // 清空输入框
      taskName.value = "";
    };
    return {
      taskName,
      enter,
    };
  },
});
</script>

<style scoped lang='scss'>
input {
  margin-bottom: 10px;
}
</style>