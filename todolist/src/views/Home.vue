<template>
  <div>
    <nav-header @addTask="addTask"></nav-header>
    <nav-main :taskList="taskList" @deleteItem="deleteItem"></nav-main>
    <nav-footer
      :taskList="taskList"
      @clearComplete="clearComplete"
    ></nav-footer>
    <div @click="clickNum(num)">{{ num }}</div>
    <div @click="clickNum1(num1)">{{ num1 }}</div>
    <button @click="accumulateNum">accumulate</button>
    <div>{{ num }} -- {{ num1 }} 两个数的和: {{ addNum }}</div>
    <div>{{ name }}</div>
    <div>{{ obj }}</div>
    <div>{{ arr.slice(0, 2) }}</div>
    <div>{{ taskList }}</div>
    <button @click="gotoStart">goto start</button>
  </div>
</template>

<script>
import NavHeader from "@/components/nav/NavHeader.vue";
import NavMain from "@/components/nav/NavMain.vue";
import NavFooter from "@/components/nav/NavFooter.vue";
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  computed,
  onMounted,
} from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "Home",
  props: {},
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },
  setup(props, ctx) {
    // let num = ref(10);
    // let name = ref("jack");
    // let arr = ref(["a", "b", "c", "d"]);
    // let obj = ref({
    //   age: 20,
    // });
    let num1 = ref(20);
    let data = reactive({
      num: 10,
      name: "jack",
      arr: ["a", "b", "c", "d"],
      obj: {
        age: 20,
      },
    });
    let clickNum = (num) => {
      // 访问ref定义的数据 要访问数据名.value
      console.log("click num. " + num);
      console.log("click num. " + num1);
      console.log("click num. " + data.num);
    };
    let clickNum1 = (num) => {
      console.log("click num1.");
    };
    // computed经典用法 购物车总价
    let addNum = computed(() => {
      // 必须返回一个值
      return data.num + num1.value;
    });
    let accumulateNum = () => {
      data.num++;
      num1.value++;
    };
    let store = useStore();
    // router是全局路由对象
    let router = useRouter();
    // 当前路由对象
    let route = useRoute();
    let taskList = computed(() => {
      return store.state.taskList;
    });
    let gotoStart = () => {
      // go: 正数前进, 负数后退
      // forwar: 去到下一页
      // back: 回退到上一个页面
      // push函数可以直接传入跳转的路径
      router.push("/");
    };
    console.log(route.query);
    console.log(route.params);
    onMounted(() => {
      data.num = Number(route.query.num);
      data.name = route.query.name;
      data.obj = JSON.parse(route.query.obj);
    });
    let taskName = ref("");
    let addTask = (val) => {
      console.log(val);
      taskName.value = val;
      let flag = true;
      taskList.value.map((item) => {
        if (item.title === val) {
          // 有重复的任务
          flag = false;
          alert("任务已存在");
        }
      });
      // 没有重复的
      if (flag) {
        store.commit("addTask", {
          title: taskName.value,
          complete: false,
        });
      }
    };
    // 删除任务
    let deleteItem = (val) => {
      store.commit("deleteTask", val);
    };
    // 清除已完成的
    let clearComplete = () => {
      store.commit("clearComplete");
    };
    return {
      // num,
      // name,
      // arr,
      // obj,
      ...toRefs(data),
      num1,
      addNum,
      accumulateNum,
      clickNum,
      clickNum1,
      taskList,
      gotoStart,
      taskName,
      addTask,
      deleteItem,
      clearComplete,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>