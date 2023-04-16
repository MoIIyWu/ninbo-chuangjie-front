<template>
  <li><slot></slot></li>
</template>

<script>
export default {
  name: 'MenuItem',
  methods:{
  }
}
</script>
<style lang="scss" scoped>
li {
  width: 230px;
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
  padding-left: 40px;
  cursor: pointer;
  &:hover {
    background-color: rgb(188, 219, 252);
  }
}
</style>
