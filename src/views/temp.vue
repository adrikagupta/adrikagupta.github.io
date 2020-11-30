<template>
  <div class="full-intro" :style="{ height: customHeight + 'px' }">
    <div
      style="
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <div style="width: 60%; color: white; text-align: center">
        <p style="font-size: 15px; color: black; font-style: italic">
          Hey! I'm
        </p>
        <p style="font-size: 30px; color: black; font-style: bold">
          ----- ADRIKA GUPTA -----
        </p>
      </div>
      <div
        style="
          width: 40%;
          height: 60%;
          position: relative;
          display: flex;
          align-items: center;
        "
      >
        <div class="shape-1" style="width: 70%; height: 100%"></div>
        <div
          class="shape-2"
          style="width: 70%; height: 100%; position: absolute; top: 0"
        ></div>
        <div
          class="shape-3"
          style="width: 70%; height: 100%; position: absolute; top: 0"
        >
          <img
            src="@/assets/myPic.jpg"
            alt="photo"
            style="object-fit: cover; width: 100%; height: 100%; opacity: 1"
            class="shape-3"
          />
        </div>
        <!-- <div class="h-full w-4/5 absolute right-0 top-1/10 shape-2" style="width:100%;height:50%; position:absolute;top:10%;right:0;"></div>
        <div class="h-full w-3/5 absolute right-0 top-1/5 shape-3" style="width:60%;height:50%; position:absolute;top:20%;right:0;"></div>
        <div class="h-full w-2/5 absolute right-0 top-3/10 shape-4" style="width:40%;height:50%; position:absolute;top:30%;right:0;"></div> -->
      </div>
    </div>

    <div
      style="
        height: 180px;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        width: 100%;
      "
      class="absolute bottom-0 w-full"
    >
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M-61.89,63.31 C436.42,-106.41 141.83,277.46 560.00,-19.56 L500.00,150.00 L0.00,150.00"
          style="stroke: none; fill: #fff"
        ></path>
      </svg>
    </div>
    <div
      style="
        height: 180px;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        width: 100%;
      "
      class="absolute bottom-0 w-full"
    >
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M-64.71,83.05 C415.54,-123.19 184.72,317.93 525.02,-12.66 L500.00,150.00"
          style="stroke: #f15d4f; fill: transparent"
        ></path>
      </svg>
    </div>
    <div
      style="
        height: 180px;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        width: 100%;
      "
      class="absolute bottom-0 w-full"
    >
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M-65.27,102.79 C434.72,-117.26 179.08,337.66 532.92,0.17 L500.00,150.00"
          style="stroke: #f15d4f; fill: transparent"
        ></path>
      </svg>
    </div>
    <div
      style="
        height: 180px;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        width: 100%;
      "
      class="absolute bottom-0 w-full"
    >
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M-63.58,110.69 C440.36,-108.39 145.79,373.19 536.86,7.07 L500.00,150.00"
          style="stroke: #f15d4f; fill: transparent"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    customHeight() {
      let sheight = window.screen.height;
      let theight = sheight + 180;
      return theight;
    },
  },
};
</script>

<style scoped>
.full-intro {
  position: relative;
  background-color: #dde2f4;
}
.shape-1 {
  background-color: #f27050;
  opacity: 60%;
  border-radius: 30% 70% 18% 82% / 58% 54% 46% 42%;
}
.shape-2 {
  background-color: #2dada3;
  opacity: 60%;
  border-radius: 64% 36% 72% 28% / 49% 47% 53% 51%;
}
.shape-3 {
  border-radius: 62% 38% 38% 62% / 45% 59% 41% 55%;
}
.shape-4 {
  background-color: white;
  opacity: 16%;
  border-radius: 100% 0% 0% 100% / 70% 30% 70% 30%;
  overflow: hidden;
}
.irregular-shape {
  background-color: black;
  position: absolute;
  top: 40%;
  right: -5%;
  height: 70%;
  width: 40%;
  border-radius: 49% 48% 67% 46% / 90% 43% 34% 36%;
}
</style>