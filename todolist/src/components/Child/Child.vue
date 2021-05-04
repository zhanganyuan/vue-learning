<template>
  <div>
    <h1>This is an child page</h1>
    <button @click="sendMsg">传值给父组件</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Child",
  // 接收来自父组件传递过来的数据
  // props接收的数据不能直接该
  props: {
    msg: {
      // 数据类型校验
      type: String,
      required: true,
      // default: "这是子组件的值",
    },
  },
  setup(props, ctx) {
    let childMsg = ref("我是子组件的数据");
    let childNum = ref(10);
    let sendMsg = () => {
      // 通过ctx.emit分发事件
      // emit是一个方法, 低于个参数是事件名称, 第二个参数是传递的参数
      ctx.emit("sendMsg", [childMsg.value, childNum.value]);
    };
    onMounted(() => {
      ctx.emit("sendMsg", {
        msg: childMsg.value,
        num: childNum.value,
      });
    });
    console.log(props.msg);
    return {
      childMsg,
      childNum,
      sendMsg,
    };
  },
});
</script>
