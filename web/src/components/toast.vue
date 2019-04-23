<template>
  <transition name="fade">
    <div class="toast" v-show="show">
      <div class="hint">!</div>
      <div class="content">
        {{message}}
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        message: ""
      };
    }
  };
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 2vw;
    left: 33vw;
    width: 33vw;
    background-color: #fff;
    z-index: 9999;
    display: flex;
    flex-direction: row;
    -webkit-box-shadow: #666 0px 0px 7px;
    -moz-box-shadow: #666 0px 0px 7px;
    box-shadow: #666 0px 0px 7px;
  }
  .hint{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.6vw;
    text-align: center;
    background-color: #333;
    width: 3.3vw;
    font-weight: bold;
  }
  .content{
    width: 30vw;
    padding: 0.8vw;
    font-size: 0.9vw;
    color: #333;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: 0.3s ease-out;
  }
  .fade-enter {
    opacity: 0;
    transform: translateY(-10px);
  }
  .fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
</style>
