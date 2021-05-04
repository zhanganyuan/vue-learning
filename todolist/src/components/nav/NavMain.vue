<template>
  <div v-if="taskList.length > 0">
    <div v-for="(item, index) in taskList" :key="index">
      <div class="item">
        <input type="checkbox" name="" id="" v-model="item.complete" />
        {{ item.title }}
        <button class="del" @click="deleteItem(item, index)">删除</button>
      </div>
    </div>
  </div>
  <div v-else>暂无任务</div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "navMain",
  props: {
    taskList: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    // let taskList = ref([
    //   {
    //     title: "吃饭",
    //     complete: false,
    //   },
    //   {
    //     title: "睡觉",
    //     complete: false,
    //   },
    //   {
    //     title: "敲代码",
    //     complete: false,
    //   },
    // ]);
    let deleteItem = (item, index) => {
      console.log(item, index);
      ctx.emit("deleteItem", index);
    };
    return {
      // taskList,
      deleteItem,
    };
  },
});
</script>

<style scoped lang='scss'>
.item {
  height: 35px;
  width: 160px;
  line-height: 35px;
  position: relative;
  cursor: pointer;
  button {
    position: absolute;
    top: 6px;
    right: 20px;
    display: none;
    z-index: 99;
  }
  &:hover {
    background: #ddd;
    button {
      display: block;
    }
  }
}
</style>