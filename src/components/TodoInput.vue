<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <AlertModal  v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
    -->
      <h3 slot="header">
        경고경고!
        <i class="closeModalBtn fas fa-times" @click="showModal=false"></i>
      </h3>
      <div slot="body">
        <p>할 일을 입력해주세요</p>
      </div>
      
    </AlertModal >
  </div>
</template>

<script>
import AlertModal from "./common/AlertModal.vue";

export default {
  data () {
    return {
      newTodoItem: "",
      showModal:false
    };
  },
  methods: {
    addTodo () {
      if (this.newTodoItem !== "") {
        // this.$emit("addTodoItem", this.newTodoItem);
        const text = this.newTodoItem.trim();
        this.$store.commit('addOneItem',text);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput () {
      this.newTodoItem = "";
    },
  },
  components: {
    AlertModal
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn{
  color:#42b983;
}
</style>