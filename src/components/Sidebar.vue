<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        ref="elMenu"
        :default-active="activeIndex"
        :background-color="'#011538'"
        :text-color="'#67c9ff'"
        :active-text-color="'#ffffff'"
        :collapse-transition="false"
        mode="vertical"
        @select="handleSelect"
        @open="handleOpen"
        @close="handleClose"
      >
        <sidebar-item
          v-for="(item, index) in list"
          :key="item.name + index"
          :item="{
            ...item,
            index: `${index}`
          }"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'

export default {
  components: {
    SidebarItem
  },
  model: {
    prop: "activeIndex",
    event: "change"
  },
  props: {
    activeIndex: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleSelect(index) {
      this.$emit('change', index)
    },
    handleOpen(index) {
      this.$refs['elMenu'].updateActiveIndex(index)
    },
    handleClose() {
    }
  }
}
</script>

<style>
#app .sidebar-container .el-scrollbar {
  height: 100%;
}
#app .sidebar-container .scrollbar-wrapper {
  overflow-x: hidden !important;
}
#app .el-scrollbar__wrap {
  margin-right: -19px !important;
  margin-bottom: -19px !important;
}
#app .el-scrollbar__view {
  height: 100%;
}
#app .el-menu {
  height: 100%;
}
#app .el-menu-item,
#app .el-submenu__title {
  height: 70px;
  line-height: 70px;
}
.scrollbar-wrapper {
  font-weight: bold;
}
.el-menu-item.is-active {
  text-shadow: 1px 1px 70px #3a8ee6;
}
</style>