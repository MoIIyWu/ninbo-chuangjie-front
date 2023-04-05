<template>
  <div class="content wrap">
    <div class="container">
        <div class="bt">走进我们</div>
        <div class="jsh">
          <span id="lContent">
            <p v-for="(item, index) in textArray" :key="index">
              {{ item }}
            </p></span
          >
        </div>
      </div>
    <img src="~@/images/banner.jpg" alt="" />
  </div>
</template>

<script>
import { getAboutText } from '@/api/api'
export default {
  name: 'AboutUs',
  data() {
    return {
      textArray: [],
    }
  },
  mounted() {
    this.getAboutText()
  },
  methods: {
    async getAboutText() {
      const {
        data: { about },
      } = await getAboutText()
      let aboutText = about
      this.textArray = aboutText.split('，')
    },
  },
}
</script>

<style lang="scss" scoped>


.container {
  text-align: center;
  padding-bottom: 32px;
}

.container .bt {
  margin-top: 40px;
  font-size: 40px;
  color: #333;
}

.container .jsh {
  margin-top: 30px;
  font-size: 18px;
  color: #555;
  line-height: 40px;
}

.container .jsh1 {
  font-size: 15px;
  color: #555;
  line-height: 30px;
  display: none;
}

.youshi {
  overflow: hidden;
  font-size: 15px;
  color: #6c6c6c;
  margin: 52px auto 0 auto;
  position: relative;
}
</style>
