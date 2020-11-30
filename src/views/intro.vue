<template>
  <div id= "introduction" class="full-intro" :style="{ height: customHeight + 'px' }">
    <div class="intro">
      <!-- nav-links -->
      <nav class="stroke">
        <p>Adrika Gupta</p>
        <div>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <!-- <li><a>Skills</a></li> -->
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <main>
        <div class="greeting">
          <p>Hey! I'm</p>
          <p class="name">ADRIKA GUPTA</p>
          <p class="profession">Flutter Developer  <span> Frontend Web Developer</span></p>
        </div>
        <div class="pic-design">
          <div class="shape-1"></div>
          <div class="shape-2"></div>
          <div class="pic">
            <img
              src="@/assets/myPic_1.svg"
              alt="photo"
              class="shape-3"
            />
          </div>
        </div>
      </main>
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
      console.log(window.screen.height)
      let theight = sheight + 100;
      return theight;
    },
  },
};
</script>

<style scoped>
.full-intro {
  position: relative;
  background-color: #0b223b;
}
.intro {
  max-width: 80%;
  margin: 0 auto;
  padding-top: 15px;
  height: 100vh;
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 10%;
}
span{
  border-left: 1px solid #fff;
  padding-left:10px;
  margin-left:5px;
}

nav ul {
  list-style: none;
  text-align: center;
}
nav ul li {
  display: inline-block;
  color: #eee;
}
nav ul li a {
  display: block;
  padding: 0 10px 10px 10px;
  margin: 0 5px;
  text-decoration: none;
  color:white;
  cursor: pointer;
}
nav ul li a,
nav ul li a:after,
nav ul li a:before {
  transition: all 0.5s;
}


/* stroke */
nav.stroke ul li a,
nav.fill ul li a {
  position: relative;
}
nav.stroke ul li a:after,
nav.fill ul li a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: ".";
  color: transparent;
  background: #e53947;
  height: 1px;
}
nav.stroke ul li a:hover:after {
  width: 100%;
}

nav p {
  font-family: "Meie Script";
  font-style: italic;
  font-size: 30px;
  color: #eee;
}

.name {
  display: flex;
  flex-direction: row;
}
.name:before,
.name:after {
  content: "";
  flex: 1 1;
  border-bottom: 1px solid #e53947;
  margin: auto;
}

.greeting p:first-child {
  font-style: italic;
  font-size: 20px;
  color: #eee;
}
.name {
  font-weight: bold;
  font-size: 40px;
  color: #e53947;
  font-family: "Doppio One";
  letter-spacing: 2px;
}
.profession{
  color:white;
  letter-spacing: 1.5px;
  font-size:17px;
}
.shape-1 {
  border: 1px solid #fff;
  opacity: 60%;
  border-radius: 51% 49% 35% 65% / 62% 52% 48% 38%;
  width: 80%;
  height: 100%;
}
.shape-2 {
  border: 1px solid #fff;
  opacity: 60%;
  border-radius: 65% 35% 67% 33% / 35% 52% 48% 65%;
  width: 80%;
  height: 100%;
  position: absolute;
  top: 0;
}
.shape-3 {
  border: 1px solid #fff;
  padding: 10px;
  border-radius: 62% 38% 38% 62% / 45% 59% 41% 55%;
}
.pic {
  top: 55%;
  left: 53%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 100%;
  position: absolute;
}

main {
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.greeting {
  width: 55%;
  text-align: center;
}
.pic-design {
  width: 45%;
  height: 70%;
  position: relative;
  display: flex;
  justify-content:center;
  align-items: center;
}
.pic img{
  object-fit: cover; width: 90%; height: 90%;
}
@media screen and (max-width: 1280px){
  .intro{
    max-width: 90%
  }
}
@media screen and (max-width: 1024px){
  main{
    flex-direction: column-reverse;
    margin-top:20px;
  }
  .pic-design{
    width:65%;
  }
  .greeting{
    width:80%;
    margin-top:20px;
  }
  .greeting p {
    margin-bottom:5px;
  }
}
@media screen and (max-width:768px){
  .name{
    font-size:35px
  }
  .pic-design{
    width:70%;
  }
}
@media screen and (max-width:640px){
  nav{
    visibility:hidden;
    height: 0;
  }
  .intro{
    max-width: 95%;
  }
  .pic-design{
    width: 100%
  }
  .pic{
    width:95%
  }
  .shape-1, .shape-2{
    width: 90%
  }
}
</style>