<template>
  <SubMenu>
    <template #title
      ><!--#title为了标识区分插槽-->
      {{ data.groupName }}
    </template>
    <template v-for="child in data.children">
      <MenuItem
        :key="child.groupName"
        v-if="!child.children"
        @click.native="onClick(child.id)"
        >{{ child.groupName }}</MenuItem
      >
      <!--ReSubMenu跟name的名字保持一致，相当于循环使用该组件-->
      <ReSubMenu v-else :key="child.id" :data="child"></ReSubMenu>
    </template>
  </SubMenu>
</template>

<script>
import { getProductPageByGroup } from '@/api/api'
import SubMenu from '@/components/SubMenu'
import MenuItem from '@/components/MenuItem'
export default {
  name: 'ReSubMenu', //可以使用递归组件
  data() {
    return {
      pageNum: 1,
      pageSize: 10,
      productGroup:[]
    }
  },
  props: {
    data: {
      type: Object, //属性校验，为对象数据类型，并且如果没有赋值，默认给一个空对象
      default: () => ({}),
    },
  },
  components: {
    SubMenu,
    MenuItem,
  },
  methods: {
    async onClick(id) {
      const res = await getProductPageByGroup(this.pageNum, this.pageSize, id)
      this.productGroup = res.data
      this.$emit("getProductGroup", this.productGroup);
    },
  },
}
</script>
