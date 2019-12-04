<template>
  <div class="menu-wrapper">
    <template v-if="!item.children">
      <el-menu-item :index="item.index">
        <template slot="title">
          <span>{{ getTitle(item) }}</span>
        </template>
      </el-menu-item>
    </template>

    <el-submenu
      v-else
      :index="`${item.index}--0`"
      popper-append-to-body
    >
      <template slot="title">
        <span>{{ getTitle(item) }}</span>
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
    }
  }
}
</script>
