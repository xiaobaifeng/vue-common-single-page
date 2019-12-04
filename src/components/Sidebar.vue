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
#app .sidebar-container .is-active > .el-submenu__title {
  color: #fff !important;
  background-image: url("../assets/nav-level1--select.png");
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
.el-menu-item,
.el-submenu__title {
  margin-left: 40px;
  text-indent: 20px;
  background-repeat: no-repeat;
  background-position: left center;
  background-image: url("../assets/nav-level1.png");
}
.el-menu-item.is-active {
  background-image: url("../assets/nav-level1--select.png");
}
.el-menu-item.is-active {
  background-image: url("../assets/nav-level1--select.png");
}
.el-menu--inline .el-menu-item {
  margin-left: 80px;
}
.el-menu--inline .el-menu-item.is-active {
  background-image: url("../assets/nav-level2--select.png");
}
.el-menu-item.is-active {
  text-shadow: 1px 1px 70px #3a8ee6;
}
</style>