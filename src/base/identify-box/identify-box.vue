<template>
  <transition name="identify-fade">
    <div class="identify-box" v-show="showFlag" @click.stop>
      <div class="identify-wrapper">
        <div class="identify-content">
          <div class="identify-code">
            <label>{{identifyText}}:</label>
            <div class="code-box">
              <input v-model="inputCode" class="code-input" type="text" maxlength="4" />
              <div class="code-img"><img :src="codeUrl"></div>
            </div>
          </div>
          <p class="err-info">{{errInfo}}</p>
          <div class="operate">
            <a @click="submit" href="javascript:void(0)" class="operate-btn">{{submitText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'identify-box',
  props: {
    // 验证码图片地址 String
    codeUrl: {
      type: String,
      default: ''
    },
    // 验证码图片内容 String
    imgCode: {
      type: String,
      default: ''
    },
    identifyText: {
      type: String,
      default: '验证码'
    },
    submitText: {
      type: String,
      default: '确认'
    },
    // 传入的错误信息 String
    errContent: {
      type: String,
      default: '验证码错误'
    }
  },
  data () {
    return {
      showFlag: false,
      // 用户输入的图片验证码 String
      inputCode: '',
      // 显示的错误信息 Stirng
      errInfo: ''
    }
  },
  methods: {
    show() {
      this.showFlag = true
    },
    hide() {
      this.showFlag = false
    },
    submit() {
      if (this.imgCode === this.inputCode) {
        this.errInfo = ''
        this.hide()
        this.$emit('ensure')
      } else {
        this.errInfo = this.errContent
      }
    }
  },
  watch: {
    inputCode(newInput) {
      if (!newInput) {
        return
      }
      if (this.imgCode === this.inputCode) {
        this.errInfo = ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~@/common/less/variable";

  .identify-box {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 998;
    background-color: @color-background-e;
    &.identify-fade-enter-active {
      animation: identify-fadein 0.3s;
      .identify-content {
        animation: identify-zoom 0.3s;
      }
    }
    .identify-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
      .identify-content {
        width: 3rem;
        border-radius: 0.05rem;
        background: @color-background;
        .identify-code {
          padding: 0.35rem 0.15rem 0;
          text-align: center;
          color: @color-text-d;
          label {
            display: block;
            margin-bottom: 0.17rem;
            font-size: @font-size-large;
            text-align: left;
          }
          .code-box {
            display: flex;
            .code-input {
              flex: 1;
              padding: 0.05rem 0;
              border: 1px solid @color-highlight-background;
              border-right: none;
              border-radius: 0.05rem 0 0 0.05rem;
            }
            .code-img {
              width: 0.80rem;
              background-color: pink;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .err-info {
          height: 0.31rem;
          line-height: 0.31rem;
          padding: 0.10rem 0.15rem;
          text-align: center;
          color: red;
        }
        .operate {
          padding: 0 0 0.21rem;
          font-size: @font-size-large;
          text-align: center;
          .operate-btn {
            display: inline-block;
            width: 1.2rem;
            padding: 0.05rem 0; 
            line-height: 0.22rem;
            border-radius: 0.05rem;
            color: @color-text-f;
            background-color: @color-theme;
          }
        }
      }
    }
  }
  @keyframes identify-fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes identify-zoom {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>