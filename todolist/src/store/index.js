import { createStore } from 'vuex'

export default createStore({
  // 定义所需要的状态
  state: {
    name: 'jack',
    taskList: [
      {
        title: "吃饭",
        complete: false,
      },
      {
        title: "睡觉",
        complete: false,
      },
      {
        title: "敲代码",
        complete: true,
      },
    ],
  },
  // 同步修改state 都是方法
  // 第一个参数state, 第二个参数是需要修改的值
  mutations: {
    setName(state, payload) {
      state.name = payload
    },
    // 添加任务
    addTask(state, payload) {
      state.taskList.push(payload)
    },
    // 删除任务
    deleteTask(state, payload) {
      state.taskList.splice(payload, 1)
    },
    // 清除已完成
    clearComplete(state) {
      let arr = state.taskList.filter((item) => {
        return !item.complete;
      });
      state.taskList = arr
    }
  },
  // 异步提交mutation
  // 第一个参数是store, 第二个参数是需要修改的值
  actions: {
    asyncSetName(store, params) {
      setTimeout(() => {
        // commit是提交mutation的, 调用mutation的方法
        store.commit('setName', params)
      }, 2000)
    }
  },
  // 模块化
  modules: {
  }
})
