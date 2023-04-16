<template>
  <div class="big_box">
    <div class="line_box" @mouseenter="change">
      <i class="fa fa-angle-right"></i>
      <div class="title">
        <slot name="title"></slot>
        <!--name='title'区分插槽 -->
      </div>
    </div>

    <div class="sub" v-show="flag">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubMenu',
  data() {
    return { flag: false }
  },
  methods: {
    change() {
      this.flag = !this.flag
    },
  },
}
</script>

<style lang="scss" scoped>
.big_box {
  .line_box {
    width: 230px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    &:hover {
      background-color: rgb(188, 219, 252);
    }
    .fa-angle-right {
      padding-left: 20px;
      padding-right: 5px;
    }
    .title {
      display: inline;
      padding: 15px 0;
    }
    .sub {
      padding-left: 20px;
    }
  }
}
</style>
