<template>
  <div class="guide">
    <div class="app-download guide__col">
      <div class="app-download__erweima__wrapper">
        <span class="app-download__erweima__wrapper__horn app-download__erweima__wrapper__horn--left-top"></span>
        <span class="app-download__erweima__wrapper__horn app-download__erweima__wrapper__horn--right-top"></span>
        <span class="app-download__erweima__wrapper__horn app-download__erweima__wrapper__horn--left-bottom"></span>
        <span class="app-download__erweima__wrapper__horn app-download__erweima__wrapper__horn--right-bottom"></span>
        <div
          class="app-download__erweima"
          :style="getBgImageStyle('layout-imgs/erweima.png')"
        ></div>
        <div class="app-download__erweima__title">app下载</div>
      </div>
      <div class="app-download__tip">
        <div class="app-download__tip__title">温馨提示</div>
        <div class="app-download__tip__coontent">
          您好，我们是远宏科技的APP研发团队，请您通过安卓手机浏览器扫描下载警务通app安装并使用，不要用微信扫描下载哦。
        </div>
      </div>
    </div>
    <sidebar
      v-model="activeIndex"
      :list="navList"
      class="guide__list guide__col"
    />
    <!-- 
      :key="navList.join(',')" -->
    <div class="guide__detail guide__col">
      <div
        class="guide__detail__img"
        id="guide__detail__img"
      >
        <el-carousel
          v-if="curAppImgArr.length > 0"
          trigger="click"
          :autoplay="false"
          :height="`${guideDetailImgHeight}px`"
          ref="elCarousel"
        >
          <el-carousel-item
            v-for="url in curAppImgArr"
            :key="url"
          >
            <div
              class="guide__detail__img-perview"
              :style="getBgImageStyle('app-imgs/' + url)"
            ></div>
          </el-carousel-item>
        </el-carousel>
        <div
          v-if="curAppImgArr.length > 1"
          class="el-carousel__step-btns"
        >
          <el-button
            class="el-carousel__step-btn el-carousel__prev"
            type="text"
            @click="handlePrev"
          >
            上一步
            <span class="el-carousel__step-btn__horn el-carousel__step-btn__horn--left-top"></span>
            <span class="el-carousel__step-btn__horn el-carousel__step-btn__horn--right-top"></span>
            <span class="el-carousel__step-btn__horn el-carousel__step-btn__horn--left-bottom"></span>
            <span class="el-carousel__step-btn__horn el-carousel__step-btn__horn--right-bottom"></span>
          </el-button>
          <el-button
            class="el-carousel__step-btn el-carousel__next"
            type="text"
            @click="handleNext"
          >
            下一步
            <span class="el-carousel__step-btn__horn el-carousel__step-btn__horn--left-top"></span>
            <span class="el-carousel__step-btn__horn el-carousel__step-btn__horn--right-top"></span>
            <span class="el-carousel__step-btn__horn el-carousel__step-btn__horn--left-bottom"></span>
            <span class="el-carousel__step-btn__horn el-carousel__step-btn__horn--right-bottom"></span>
          </el-button>
        </div>
        <span class="guide__detail__img__horn guide__detail__img__horn--left-top"></span>
        <span class="guide__detail__img__horn guide__detail__img__horn--right-top"></span>
        <span class="guide__detail__img__horn guide__detail__img__horn--left-bottom"></span>
        <span class="guide__detail__img__horn guide__detail__img__horn--right-bottom"></span>
        <span class="guide__detail__name">{{ activeItem.name }}</span>
      </div>
      <div class="guide__detail__text">
        <div class="guide__detail__item guide__detail__describe">
          <div class="guide__detail__item__title">功能简介</div>
          <div class="guide__detail__item__content">{{ functionIntroduction }}</div>
          <span class="guide__detail__text__horn guide__detail__text__horn--left-top"></span>
          <span class="guide__detail__text__horn guide__detail__text__horn--right-top"></span>
          <span class="guide__detail__text__horn guide__detail__text__horn--left-bottom"></span>
          <span class="guide__detail__text__horn guide__detail__text__horn--right-bottom"></span>
        </div>
        <div class="guide__detail__item guide__detail__fun-intro">
          <div class="guide__detail__item__title">操作步骤</div>
          <div class="guide__detail__item__content">{{ describe }}</div>
          <span class="guide__detail__text__horn guide__detail__text__horn--left-top"></span>
          <span class="guide__detail__text__horn guide__detail__text__horn--right-top"></span>
          <span class="guide__detail__text__horn guide__detail__text__horn--left-bottom"></span>
          <span class="guide__detail__text__horn guide__detail__text__horn--right-bottom"></span>
        </div>
      </div>
    </div>
    <span class="guide__horn guide__horn--left-top"></span>
    <span class="guide__horn guide__horn--right-top"></span>
    <span class="guide__horn guide__horn--left-bottom"></span>
    <span class="guide__horn guide__horn--right-bottom"></span>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import { getBgImageStyle } from '@/utils'

export default {
  components: {
    Sidebar
  },
  computed: {
    hasSteps () {
      return !!this.activeItem.steps
    },
    curAppImgArr() {
      return this.activeItem.appImg ? [this.activeItem.appImg]
        : this.hasSteps ? this.activeItem.steps.map(item => item.appImg)
        : []
    },
    functionIntroduction() {
      return this.hasSteps
        ? this.activeItem.steps[this.elCarouselActiveIndex].functionIntroduction
        : this.activeItem.functionIntroduction
    },
    describe() {
      return this.hasSteps
        ? this.activeItem.steps[this.elCarouselActiveIndex].describe
        : this.activeItem.describe
    }
  },
  data() {
    return {
      navList: [],
      guideDetailImgHeight: 0,
      activeIndex: '',
      elCarouselActiveIndex: 0,
      activeItem: {}
    }
  },
  watch: {
    activeIndex: {
      handler: function(val) {
        if(!val || this.navList.length === 0) return
        const posArr = val.split("--")
        if (posArr.length === 1) {
          this.activeItem = this.navList[posArr[0]]
        }
        this.activeItem = posArr.slice(1).reduce((acc, item) => acc.children[item], this.navList[posArr[0]])
        this.elCarouselActiveIndex = 0
      },
      immediate: true
    }
  },
  methods: {
    getBgImageStyle,
    handlePrev() {
      this.$refs['elCarousel'].prev()
      this.elCarouselActiveIndex = this.$refs['elCarousel'].activeIndex
    },
    handleNext() {
      this.$refs['elCarousel'].next()
      this.elCarouselActiveIndex = this.$refs['elCarousel'].activeIndex
    }
  },
  created() {
    // fetch(process.env.BASE_URL + 'app-nav-config.json').then(response => {
    //   return response.json()
    // })
    //   .then(data => {
    //     this.navList = data.appNav
    //   }).catch(err => {
    //     // eslint-disable-next-line no-console
    //     console.log('Error Reading data ' + err);
    //   })
    this.navList = window.appNav
  },
  mounted() {
    this.guideDetailImgHeight = document.querySelector("#guide__detail__img").clientHeight
  }
}
</script>
<style>
#app .el-carousel__indicators {
  display: none;
}
</style>
<style scoped>
.guide {
  position: relative;
  height: 100%;
  padding: 0 50px;
  border: 3px #28475f solid;
  border-radius: 2px;
  color: #a4ddeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.guide__col {
  height: 640px;
}
.guide__list {
  width: 270px;
  border: 1px solid #77deff;
}
.guide__horn {
  position: absolute;
  z-index: 10;
  width: 49px;
  height: 49px;
  background-image: url("../../assets/guide__horn.png");
  background-repeat: no-repeat;
  box-sizing: content-box;
}
.guide__horn--left-top {
  left: -13px;
  top: -13px;
}
.guide__horn--right-top {
  right: -13px;
  top: -13px;
  transform: rotate(90deg);
}
.guide__horn--left-bottom {
  left: -13px;
  bottom: -13px;
  transform: rotate(-90deg);
}
.guide__horn--right-bottom {
  right: -13px;
  bottom: -13px;
  transform: rotate(180deg);
}
.guide__detail {
  width: 924px;
  display: flex;
  justify-content: space-between;
}
.guide__detail__img {
  position: relative;
  width: 394px;
  height: 100%;
  border: 1px solid #77deff;
}
.guide__detail__img-perview {
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.guide__detail__img__horn {
  position: absolute;
  z-index: 10;
  width: 49px;
  height: 49px;
  background-image: url("../../assets/guide-detail-img-horn.png");
  background-repeat: no-repeat;
  box-sizing: content-box;
}
.guide__detail__img__horn--left-top {
  left: -13px;
  top: -13px;
}
.guide__detail__img__horn--right-top {
  right: -13px;
  top: -13px;
  transform: rotate(90deg);
}
.guide__detail__img__horn--left-bottom {
  left: -13px;
  bottom: -13px;
  transform: rotate(-90deg);
}
.guide__detail__img__horn--right-bottom {
  right: -13px;
  bottom: -13px;
  transform: rotate(180deg);
}
.el-carousel__step-btns {
  position: absolute;
  left: 50%;
  bottom: -6px;
  display: flex;
  justify-content: space-between;
  width: 200px;
  transform: translate(-50%, 100%);
}
.el-carousel__step-btn {
  position: relative;
}
.el-carousel__step-btn__horn {
  position: absolute;
  z-index: 10;
  width: 45px;
  height: 45px;
  background-image: url("../../assets/el-carousel__btn-horn.png");
  background-repeat: no-repeat;
  box-sizing: content-box;
}
.el-carousel__step-btn__horn--left-top {
  left: -30px;
  top: -14px;
}
.el-carousel__step-btn__horn--right-top {
  right: -30px;
  top: -14px;
  transform: rotate(90deg);
}
.el-carousel__step-btn__horn--left-bottom {
  left: -30px;
  bottom: -14px;
  transform: rotate(-90deg);
}
.el-carousel__step-btn__horn--right-bottom {
  right: -30px;
  bottom: -14px;
  transform: rotate(180deg);
}
.guide__detail__name {
  position: absolute;
  z-index: 10;
  left: 50%;
  top: -14px;
  height: 18px;
  line-height: 18px;
  font-size: 18px;
  font-weight: bold;
  color: #4df1f9;
  transform: translate(-50%, -100%);
}
.guide__detail__text {
  width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.guide__detail__text__horn {
  position: absolute;
  z-index: 10;
  width: 49px;
  height: 49px;
  background-image: url("../../assets/guide-detail-txt-horn.png");
  background-repeat: no-repeat;
  box-sizing: content-box;
}
.guide__detail__text__horn--left-top {
  left: -13px;
  top: -13px;
}
.guide__detail__text__horn--right-top {
  right: -13px;
  top: -13px;
  transform: rotate(90deg);
}
.guide__detail__text__horn--left-bottom {
  left: -13px;
  bottom: -13px;
  transform: rotate(-90deg);
}
.guide__detail__text__horn--right-bottom {
  right: -13px;
  bottom: -13px;
  transform: rotate(180deg);
}
.guide__detail__item {
  position: relative;
  border: 1px solid #77deff;
  padding: 10px;
  min-height: 240px;
  line-height: 34px;
}
.guide__detail__item__title {
  height: 34px;
  font-size: 18px;
  color: #4df1f9;
  text-align: center;
  font-weight: bolder;
}
.guide__detail__item__content {
  font-size: 16px;
  color: #eafeff;
  letter-spacing: 1px;
}
.guide__detail__item::before {
  position: absolute;
  content: "";
  width: 177px;
  height: 111px;
  left: -177px;
  z-index: 10;
  top: 50%;
  background: url("../../assets/connect-line.png");
}
.guide__detail__fun-intro::before {
  transform: translateY(-100%) rotateX(180deg);
}
.app-download {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 304px;
}
.app-download__erweima__wrapper {
  position: relative;
  width: 270px;
  height: 270px;
  margin-bottom: 80px;
  border: 1px solid #77deff;
}
.app-download__erweima__wrapper__horn {
  position: absolute;
  z-index: 10;
  width: 49px;
  height: 49px;
  background-image: url("../../assets/erweima-horn.png");
  background-repeat: no-repeat;
  box-sizing: content-box;
}
.app-download__erweima__wrapper__horn--left-top {
  left: -19px;
  top: -19px;
}
.app-download__erweima__wrapper__horn--right-top {
  right: -19px;
  top: -19px;
  transform: rotate(90deg);
}
.app-download__erweima__wrapper__horn--left-bottom {
  left: -19px;
  bottom: -19px;
  transform: rotate(-90deg);
}
.app-download__erweima__wrapper__horn--right-bottom {
  right: -19px;
  bottom: -19px;
  transform: rotate(180deg);
}
.app-download__erweima {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 10;
  width: 236px;
  height: 236px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
}
.app-download__erweima__title {
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: -20px;
  height: 18px;
  line-height: 18px;
  font-size: 18px;
  font-weight: bold;
  color: #4df1f9;
  -webkit-transform: translate(-50%, 100%);
  transform: translate(-50%, 100%);
}
.app-download__tip {
  flex-grow: 1;
  padding: 24px;
  border: 1px #244667 solid;
}
.app-download__tip__title {
  height: 32px;
  margin-bottom: 8px;
  line-height: 32px;
  font-size: 16px;
  color: #d5ce91;
  text-align: center;
  font-weight: bolder;
}
.app-download__tip__coontent {
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 34px;
  color: #b4f2ff;
}
</style>
