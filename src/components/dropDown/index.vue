<template>
  <div
    id="dropDown"
    ref="dropDown"
    @touchstart="touchStart"
    @touchend="touchEnd"
    @touchMove="touchMove"
    :style="{
      transform: 'translateY(-100px)'
    }">
    <div class="header">
      testtest
    </div>
    <slot/>
  </div>
</template>

<script>

export default {
  props: {
    isGlobel: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideDown: {
        sX: 0,
        sY: 0,
        eX: 0,
        eY: 0,
        dicrtion: -1   // 0左划 1右划 2上划 3下划
      }
    }
  },
  mounted() {
    if (this.isGlobel) {
      document.addEventListener('touchstart', this.touchStart)
      document.addEventListener('touchmove', this.touchMove)
      document.addEventListener('touchend', this.touchEnd)
    }
  },
  methods: {
    touchStart(e) {
      e.stopPropagation();
      this.slideDown.sY = e.targetTouches[0].pageY;
      this.slideDown.eY = e.targetTouches[0].pageY;
      console.log('start')
    },
    touchMove(e) {
      this.slideDown.eY = e.targetTouches[0].pageY;
      const offsetY = this.slideDown.sY - e.targetTouches[0].pageY;
      if (this.slideDown.eY - this.slideDown.sY > 10 && this.slideDown.dicrtion == -1) {
        this.slideDown.dicrtion = 3;
      }
      if (this.slideDown.dicrtion === 3) {
        requestAnimationFrame(() => {
          this.$refs.dropDown.style.transform = `translateY(${Math.min(-100 - offsetY, 0)}px)`
        })
      }
    },
    touchEnd() {
      setTimeout(() => {
        this.$refs.dropDown.style.transform = 'translateY(-100px)';
        this.$refs.dropDown.style.transition = 'transform .3s ease-out';
      }, 100);
      this.slideDown = {
        dicrtion: -1
      };
    },
  }
}
</script>

<style lang="scss" scoped>
#dropDown {
  padding-top: 100px;
  position: relative;
  .header {
    position: absolute;
    top: 80px;
  }
}

</style>
