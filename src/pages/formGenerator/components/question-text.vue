<template>
  <div class="question" >
    <div class="question__delete" @click="removeItem">&#10006;</div>
    <div class="question__content">
      <div class="question__name">
        <textarea placeholder="Your Question"></textarea>
      </div>

      <div 
        class="question__answer" 
        v-for="(tab, tabIndex) in tabs"
        :class="(tabIndex == index) ? 'active' : ''"
        :key="tabIndex + 10">
        <component :is="tabs[tabIndex].content"></component>
      </div>

    </div>
    <div class="question__type">
      <span class="question__icon" @click="openDrop" :class="isActive ? 'active' : ''">Select question type</span>
      <ul class="question__list" :class="isActive ? 'active' : ''">
        <li 
          v-for="(tab, tabIndex) in tabs"
          v-on:click="index = tabIndex"
          :key="tabIndex"
          :class="(tabIndex == index) ? 'active' : ''"> 
          <span>{{ tab.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import TextAnswer from './answers/text-answer';
import ListAnswer from './answers/list-answer';
import DropAnswer from './answers/drop-answer';

export default {
  data () {
    return {
      isActive: false,
      index: 0,
      tabs: [
        {
          tabIndex: 0,
          name: 'text',
          content: 'text-answer'
        },
        {
          tabIndex: 1,
          name: 'one of the list',
          content: 'list-answer'
        },
        {
          tabIndex: 2,
          name: 'drop-down list',
          content: 'drop-answer'
        }
      ]
    }
  },
  components: {
    textAnswer: TextAnswer,
    listAnswer: ListAnswer,
    dropAnswer: DropAnswer
  },
  methods: {
    openDrop () {
      this.isActive = !this.isActive;
    },
    removeItem () {
      this.$emit('remove', this.questionId)
    }
  },
  props: ['questionId']
}
</script>
<style lang="scss" scoped>
  .question {
    position: relative;
    border-bottom: 1px solid #ccc;
    padding: 20px;
    display: flex;
    flex-direction: row;
    &:last-child {
      border-bottom: none;
    }
    &__content {
      width: 70%;
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
    }
    &__type {
      position: relative;
      width: 30%;
      margin-left: 20px;
    }
    &__name,
    &__answear {
      padding: 10px 0;
    }
    &__icon {
      display: inline-flex;
      align-items: center;
      color: #7c7c7c;
      font-size: 12px;
      line-height: 1.1;
      cursor: pointer;
      &::before {
        display: block;
        font-size: 26px;
        line-height: 1.1;
        content: '\2630';
        margin-right: 5px;
        width: 25px;
      }
      &:hover {
        color: green;
        transition: color .3s;
      }
      &.active {
        color: green;
        &::before {
          content: '\2715';
        }
      }
    }
    &__list {
      display: none;
      position: absolute;
      z-index: 1;
      left: 0;
      top: 30px;
      width: 100%;
      list-style-type: none;
      margin: 0;
      padding: 20px;
      border: 1px solid #ccc;
      background: #fff;
      &.active {
        display: block;
      }
      li {
        padding: 5px 0;
        cursor: pointer;
      }
    }
    &__delete {
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
    &__answer {
      display: none;
      &.active {
        display: block;
      }
    }
  }
</style>