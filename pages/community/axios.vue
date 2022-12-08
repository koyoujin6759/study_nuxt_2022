<template>
  <div style="padding: 20px">
    <h2>TODO</h2>
    <ul>
      <li v-for="(item, index) in todoList" :key="item.i">
        <span v-if="!item.modify">{{ index + 1 }}. {{ item.title }}</span>

        <input type="text" v-model="modifyTitle" v-if="item.modify" />
        <!--버튼 영역 -->
        <div>
          <button @click="modifyTodo(index)" v-if="!item.modify">
            수정하기
          </button>
          <button v-if="item.modify" @click="changeData(item.id)">
            수정완료
          </button>
          <button @click="deleteData(item.id)" class="delete">삭제</button>
        </div>
      </li>
    </ul>

    <div class="new-data">
      <h3>TODO 생성</h3>
      <input type="text" v-model="createTitle" />
      <button @click="newData" class="create">생성</button>
    </div>
  </div>
</template>

<script>
import api from "@/mixin/api";

export default {
  mixins: [api],
  data() {
    return {
      todoList: null,
      createTitle: null,
      modifyTitle: null,
    };
  },
  methods: {
    getData() {
      this.sendGet("/todoList","",(response) => {
        this.todoList = response.map((item) => {
          return {
            ...item,
            modify:false,
          };
        });
      }, (response) => {
        alert(response)
      })
    },
    deleteData(id) {
      this.sendDelete(`/todoList/${id}`, 
      (response) => this.getData());
    },
    newData() {
      let data = {
        title: this.createTitle
      };

      this.$axios.$post(`/todoList`,data)
      .then((response) => this.getData());

      this.createTitle = null;
    },
    changeData(id) {
      let data = {
        title: this.modifyTitle,
      }

      this.$axios
        .$put(`/todoList/${id}`, data)
        .then((response) => this.getData())
    },
    modifyTodo(index) {
      this.todoList[index].modify = true;
      this.modifyTitle = this.todoList[index].title;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
button {
  background: gray;
  color: #fff;
  border: none;
  padding: 3px 10px;
  border-radius: 4px;
  cursor: pointer;

  &.delete {
    background: rgb(212, 71, 71);
  }

  &.create {
    background: green;
  }
}

ul {
  border: 1px solid #000;
  width: fit-content;

  li {
    padding: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;

    span {
      margin-right: auto;
    }

    input {
      width: 150px;
    }

    div {
      display: flex;
      gap: 4px;
    }
  }
}

.new-data {
  padding-top: 50px;
}
</style>
