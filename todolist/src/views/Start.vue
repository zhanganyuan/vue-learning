<template>
  <div>
    <button @click="startTask">开始任务</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Start",
  setup() {
    let router = useRouter();
    let name = ref("albert");
    let num = ref(32);
    let obj = ref({
      msg: "start",
    });
    let startTask = () => {
      // push里面还可以传入name name是路由的名字
      // query传参path和name都可以
      // params传参只能用name
      // push 如果穿的是对象的形式 就可以传递参数
      router.push({
        // path: "/home",
        name: "Home",
        query: {
          name: name.value,
          num: num.value,
          obj: JSON.stringify(obj.value),
        },
        params: {
          name: name.value,
          num: num.value,
          obj: JSON.stringify(obj.value),
        },
      });
    };
    onMounted(() => {
      // 组件挂在的过程
      // 数据 dom...
      //   发请求
      // 做一些数据初始化的操作 接受传递过来的参数
      console.log("onMounted");
    });
    onUnmounted(() => {
      // 组件卸载时的过程
      // 清除定时器
      // 清除闭包函数
      console.log("OnUnmounted");
    });
    console.log("setup");
    return {
      startTask,
    };
  },
});
</script>
