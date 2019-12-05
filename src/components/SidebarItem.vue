<template>
  <div class="menu-wrapper">
    <template v-if="!item.children">
      <el-menu-item :index="item.index">
        <template slot="title">
          <div
            class="sidebar-item-title--wrapper"
            :style="getBgPosStyleByIndex(item.index)"
          >
            <span>{{ getTitle(item) }}</span>
          </div>
        </template>
      </el-menu-item>
    </template>

    <el-submenu
      v-else
      :index="`${item.index}--0`"
      popper-append-to-body
    >
      <template slot="title">
        <div class="sidebar-item-title--wrapper">
          <span>{{ getTitle(item) }}</span>
        </div>
      </template>
      <sidebar-item
        v-for="(child, index) in item.children"
        :key="child.name"
        :is-nest="true"
        :item="{
            ...child,
            index: `${item.index}--${index}`,
            noOrderNumber: true
          }"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>

export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    getTitle({index, noOrderNumber, name}) {
      return (noOrderNumber ? '' : `${Number(index) + 1}、 `) + name
    },
    getBgPosStyleByIndex(curIndex) {
      // eslint-disable-next-line no-console
      console.log(curIndex)
      return {}
    }
  }
}
</script>

<style>
#app
  .sidebar-container
  .is-active
  > .el-submenu__title
  .sidebar-item-title--wrapper {
  color: #fff !important;
  background-image: url("../assets/nav-level1--select.png") !important;
}
.sidebar-item-title--wrapper {
  height: 100%;
  text-indent: 40px;
  background-repeat: no-repeat;
  background-position: left center;
  background-image: url("../assets/nav-level1.png");
}
.el-menu-item.is-active .sidebar-item-title--wrapper {
  background-image: url("../assets/nav-level1--select.png");
}
.el-menu--inline .el-menu-item.is-active .sidebar-item-title--wrapper {
  background-image: url("../assets/nav-level2--select.png");
}
.el-submenu__title {
  background-repeat: no-repeat;
  background-position: left center;
}
</style>