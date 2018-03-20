<template>
<div class="drop-list">
  <ol>
    <li v-for="item in items" :key="item.id"><label class="drop-list__item">
      <input type="text" placeholder="Your Answer">
      <span v-if="items.length > 1" class="drop-list__remove" @click="remove(item.id)">&#10006;</span>
    </label></li>
  </ol>
  <div class="drop-list__add" @click="add">add answer</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      id: 1,
      items: [{
        id: 0
      }]
    }
  },
  methods: {
    add (item) {
      this.items.push({
        id: this.id
      });
      this.id = this.id + 1;
    },
    remove (id) {
      this.items = this.items.filter((item) => item.id !== id);
    }
  }
}
</script>
<style lang="scss" scoped>
  .drop-list {
    ol {
      margin: 0;
      padding: 0;
      padding-left: 18px;
    }
    &__item {
      display: block;
      margin-bottom: 10px;
      position: relative;
      input,
      textarea {
        width: 100%;
        border: none;
        border-radius: 0;
        margin: 0;
        padding: 0;
        outline: none;
        border-bottom: 2px solid transparent;
        &:focus {
          border-bottom-color: green;
        }
        &::-webkit-input-placeholder {
          font-size: 16px;
          line-height: 1;
          color: #7c7c7c;
          font-family: Arial, Helvetica, sans-serif;
        }
        &::-moz-placeholder {
          font-size: 16px;
          line-height: 1;
          color: #7c7c7c;
          font-family: Arial, Helvetica, sans-serif;
        }
        &:-ms-input-placeholder {
          font-size: 16px;
          line-height: 1;
          color: #7c7c7c;
          font-family: Arial, Helvetica, sans-serif;
        }
        &:-moz-placeholder {
          font-size: 16px;
          line-height: 1;
          color: #7c7c7c;
          font-family: Arial, Helvetica, sans-serif;
        }
      }
      textarea {
        resize: vertical;
        font-size: 18px;
        line-height: 1;
        font-weight: 700;
      }
      input {
        padding: 5px 0;
      }
      &:hover {
        .drop-list__remove {
          opacity: 1;
        }
      }
    }
    &__add {
      display: inline-block;
      color: green;
      border: 2px solid green;
      padding: 5px 10px;
      cursor: pointer;
    }
    &__remove {
      opacity: 0;
      position: absolute;
      right: 0;
      top: 0;
      color: #7c7c7c;
      font-size: 14px;
      line-height: 1;
      padding: 4px;
      cursor: pointer;
      &:hover {
        color: red;
        transition: color .3s;
      }
    }
  }
</style>
