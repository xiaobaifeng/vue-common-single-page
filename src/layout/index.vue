<template>
  <div
    class="app-wrapper"
    :style="getBgImageStyle('layout-imgs/app-BG.png')"
  >
    <div
      class="app-title"
      :style="getBgImageStyle('layout-imgs/app-title.png')"
    ></div>
    <div class="app-container">
      <slot />
    </div>
    <span class="app-horn app-horn--left-top">
      <span
        class="app-back-icon"
        @click="handleBackHomePage"
      ></span>
    </span>
    <span class="app-horn app-horn--right-top"></span>
    <span class="app-horn app-horn--left-bottom"></span>
    <span class="app-horn app-horn--right-bottom"></span>
  </div>
</template>

<script>
import { getBgImageStyle } from '@/utils'

export default {
  name: 'Layout',
  methods: {
    handleBackHomePage() {
      // eslint-disable-next-line no-console
      console.log('回到首页...')
    },
    getBgImageStyle
  }
}
</script>

<style>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
}
.app-title {
  width: 100%;
  height: 125px;
  background-repeat: no-repeat;
  background-position: center center;
}
.app-horn {
  position: absolute;
  z-index: 9;
  width: 270px;
  height: 270px;
  margin: 14px;
  background-image: url("../assets/app-horn.png");
  background-repeat: no-repeat;
  box-sizing: content-box;
}
.app-horn--left-top {
  left: 0;
  top: 0;
  background-position: left top;
}
.app-horn--right-top {
  right: 0;
  top: 0;
  transform: rotate(90deg);
}
.app-horn--left-bottom {
  left: 0;
  bottom: 0;
  transform: rotate(-90deg);
}
.app-horn--right-bottom {
  right: 0;
  bottom: 0;
  transform: rotate(180deg);
}
.app-back-icon {
  display: block;
  width: 78px;
  height: 78px;
  margin-left: 36px;
  margin-top: 36px;
  background: url("../assets/app-back-icon.png");
  cursor: pointer;
}
.app-back-icon:hover {
  background: url("../assets/app-back-icon--hover.png");
}
.app-container {
  height: calc(100% - 125px);
  padding: 30px 50px 66px;
}
</style>
