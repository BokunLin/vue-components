<template>
  <div id="guidance" v-if="canShow" v-show="isShow" style="{ zIndex: minIndex }">
    <div class="guidance-mask" :style="{ zIndex: minIndex + 1}"></div>
    <div
      class="guidance-img"
      ref="guidanceImg"
      :style="imgStyle">
      <div v-if="activeIndex == 0">
        <img :src="steps[activeIndex].qr">
      </div>
    </div>
    <div
      class="guidance-content"
      ref="guidanceContent"
      :class="showPoi"
      :style="{
        zIndex: minIndex + 2,
        left: offsetLeft + 'px',
        top: offsetTop + 'px'
      }">
      <div class="guidance-title">
        <h3>{{ steps[activeIndex].title }}</h3>
        <span @click="goDone">跳过</span>
      </div>
      <p class="guidance-detail">{{ steps[activeIndex].detail }}</p>
      <div class="guidance-control">
        <div class="guidance-points">
          <div v-for="(item, index) in steps.length" class="guidance-point" :class="{'active': index === activeIndex}"></div>
        </div>
        <div class="guidance-button">
          <span v-show="activeIndex > 0" @click="preStep">
            上一步
          </span>
          <span @click="nextStep">
            {{isDone}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    steps: { // 步骤数
      type: Array,
      default: () => [],
    },
    canShow: { // 是否需要显示
      type: Boolean,
      default: true,
    },
    minIndex: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      activeIndex: 0,
      isShow: true,
      onLeft: true,
      offsetLeft: 0,
      offsetTop: 0,
    }
  },
  computed: {
    isDone() {
      if (this.activeIndex + 1 >= this.steps.length) {
        return '完成';
      }
      return '下一步';
    },
    showPoi() {
      return this.onLeft ? 'left' : 'right';
    },
    imgStyle() {
      const self = this.steps[this.activeIndex];
      return {
        zIndex: this.minIndex + 2,
        left: self.left,
        top: self.top,
        width: `${self.width}px`,
        height: `${self.height}px`,
        backgroundImage: `url(${self.img})`,
      }
    },
  },
  mounted() {
    this.$nextTick(this.updatePoi);
  },
  methods: {
    preStep() {
      if (this.activeIndex > 0) {
        this.activeIndex -= 1;
        this.updatePoi();
      }
    },
    nextStep() {
      if (this.activeIndex + 1 >= this.steps.length) {
        this.goDone();
      } else {
        this.activeIndex += 1;
      }
      this.$nextTick(this.updatePoi);
    },
    goDone() {
      this.isShow = false;
      this.activeIndex = this.steps.length - 1;
      this.$emit('end');
    },
    updatePoi() {
      const img = this.$refs.guidanceImg;
      const content = this.$refs.guidanceContent;
      this.onLeft = img.offsetLeft > content.clientWidth + 50;
      this.offsetLeft = this.onLeft
        ? img.offsetLeft - content.clientWidth - 50
        : img.clientWidth + img.offsetLeft + 50;
      this.offsetTop = img.offsetTop + 20;
    },
  },
}
</script>


<style lang="scss">
#guidance {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    padding: 0;
  }
  .guidance-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0A0A1E;
    opacity: .8;
  }
  .guidance-img {
    position: absolute;
    display: inline-block;
    background-color: #aaa;
    div {
      position: absolute;
      bottom: 57px;
      width: 150px;
      height: 150px;
      left: 70px;
    }
  }
  .guidance-content {
    position: absolute;
    box-sizing: border-box;
    width: 396px;
    height: 166px;
    padding: 20px 26px 20px;
    border-radius: 10px;
    border: 1px solid #979797;
    .guidance-title {
      height: 24px;
      line-height: 24px;
      overflow: hidden;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      span {
        cursor: pointer;
        text-align: center;
        width: 48px;
        opacity: .5;
        flex-shrink: 0;
        font-size: 12px;
      }
    }
    p {
      margin-top: 15px;
      line-height: 22px;
      font-size: 14px;
      overflow: hidden;
    }
    .guidance-control {
      display: flex;
      overflow: hidden;
      justify-content: space-between;
      align-items: center;
      margin-top: 15px;
      .guidance-points {
        flex-grow: 1;
        height: 28px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .guidance-point {
          width: 8px;
          height: 8px;
          background-color: #fff;
          border-radius: 50%;
          transition: opacity .1s ease-out;
          opacity: .3;
          margin: 0 4px;
          &.active {
            opacity: 1;
          }
        }
      }
      .guidance-button {
        cursor: pointer;
        width: 134px;
        display: flex;
        justify-content: flex-end;
        line-height: 28px;
        color: #fff;
        font-size: 12px;
        text-align: right;
        flex-shrink: 0;
        span {
          text-align: center;
          border-radius: 2px;
          opacity: .8;
          &:last-child {
            margin-left: 20px;
            opacity: 1;
            width: 72px;
            height: 28px;
            background-color: #2A75ED;
          }
        }
      }
    }
  }
}
</style>
