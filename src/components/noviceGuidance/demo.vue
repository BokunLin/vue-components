<template>
  <div class="demo">
    <novice-guidance :steps="steps" @end="dosomething"/>
  </div>
</template>

<script>
import noveceGuidance from './index'

export default {
  data() {
    return {
      steps: [
        {
          title: '访问您的知识店铺',
          detail: '点击【访问店铺】查看店铺二维码，微信扫码即可快速访问您的知识店铺',
          img: '../assets/image/img-step1.png',
          left: 1000,
          top: 100,
          width: 260,
          height: 342,
        },
        {
          title: '管理知识商品',
          detail: '在这里您可以开始创建并管理知识商品，快速、高效地开启内容变现',
          left: 300,
          top: 100,
          width: 220,
          height: 200,
        },
        {
          title: '装修您的店铺',
          detail: '在这里您可以自定义设置店铺模块的布局及展示，打造高辨识度的整体店铺形象',
          left: 1000,
          top: 100,
          width: 250,
          height: 150,
        },
        {
          title: '开始售卖',
          detail: '通过将店铺链接添加至微信公众号自定义菜单栏，或投放至微信群、朋友圈等方式，来展示您的知识店铺',
          left: 300,
          top: 100,
          width: 220,
          height: 160,
        },
        {
          title: '收入提现',
          detail: '在这里您可以查看店铺收入情况，并可将收入提现到指定账号',
          left: 1000,
          top: 100,
          width: 210,
          height: 120,
        },
      ],
    }
  },
  components: {
    noveceGuidance
  },
}
</script>

