<template>
  <form class="form">
    <h1 class="form__title">New form</h1>
    <div class="form__content">
      <div class="form__questions">
        <question-text :questionId="item.id" :id="item.id" v-for="item in items" :key="item.id" @remove="removeFromList(item.id)"></question-text>
      </div>
      <div class="form__add"><span @click="add">+</span></div>
    </div>
  </form>
</template>

<script>
import QuestionText from './components/question-text';
export default {
  data () {
    return {
      items: [{
        id: 0
      }],
      id: 1
    }
  },
  components: {
    questionText: QuestionText
  },
  methods: {
    add (item) {
      this.items.push({
        id: this.id
      });
      this.id = this.id + 1;
    },
    removeFromList(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  }
}
</script>
<style lang="scss" scoped>
  .form {
    box-sizing: border-box;
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
    max-width: 1170px;
    margin: 0 auto;
    * {
      box-sizing: border-box;
    }
    &__content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    &__add {
      width: 20%;
      span {
        display: block;
        margin: 0 auto;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 32px;
        color: #fff;
        font-weight: 700;
        border-radius: 50%;
        background-color: green;
        cursor: pointer;
      }
    }
    &__questions {
      flex: 1 0 0%;
      border: 1px solid #ccc;
    }
  }
</style>
