<template>
  <div id="about">
    <p class="about-me">ABOUT ME</p>
    <div class="about-container">
      <div class="developer-pic">
        <img src="@/assets/undraw_proud_coder_7ain.svg" alt="developer" />
      </div>
      <div class="context">
        <ul>
          <li class="quality-li">
            <h2 data-text="Ambitious" data-textColor="#e53947">Ambitious</h2>
          </li>
          <li class="quality-li">
            <h2 data-text="Adaptable" data-textColor="#777">Adaptable</h2>
          </li>
          <li class="quality-li">
            <h2 data-text="Problem_Solver" data-textColor="#eee">
              Problem_Solver
            </h2>
          </li>
          <li class="quality-li">
            <h2 data-text="Learner" data-textColor="#000">Learner</h2>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var executed = false;
    const about = document.querySelector(".context");
    window.addEventListener("scroll", function () {
      var hT = about.offsetTop;
      var wH = screen.height;
      var wS = this.window.scrollY;

      let i = 1;
      if (wS > hT - wH) {
        if (!executed) {
          let texts = document.querySelectorAll(".quality-li");
          texts[0].classList.add("quality_1");
          var setIn = setInterval(function () {
            stopFunction();
            if (i < 4) {
              texts[i].classList.add(`quality_${++i}`);
            }
          }, 3000);

          executed = true;
        }
      }

      function stopFunction() {
        if (i == 4) {
          clearInterval(setIn);
        }
      }
    });
  },
};
</script>

<style scoped>
.about-me {
  position: relative;
}
.about-me:before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 10px;
  width: 10%;
  transform: translate(-50%, 0);
  border-bottom: 3px solid #e53947;
}
li h2 {
  position: relative;
  font-size: 4vw;
  letter-spacing: 2px;
  color: white;
  font-family: "Doppio One";
  -webkit-text-stroke: 2px #333;
  text-transform: uppercase;

  padding-right: 20px;
}
.quality_1 h2::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: #28835f;
  -webkit-text-stroke: 0vw #333;
  border-right: 2px solid #298f87;
  overflow: hidden;
  animation: animate 2s linear;
}
.quality_2 h2::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: #f99e2a;
  -webkit-text-stroke: 0vw #333;
  border-right: 2px solid #f99e2a;
  overflow: hidden;
  animation: animate 2s linear;
}
.quality_3 h2::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: #0082a6;
  -webkit-text-stroke: 0vw #333;
  border-right: 2px solid #0082a6;
  overflow: hidden;
  animation: animate 2s linear;
}
.quality_4 h2::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: #f27121;
  -webkit-text-stroke: 0vw #333;
  border-right: 2px solid #f27121;
  overflow: hidden;
  animation: animate 2s linear;
}
@keyframes animate {
  0%,
  10% {
    width: 0;
  }
  70%,
  90%,
  100% {
    width: 100%;
  }
}
#about {
  /* height: 90vh; */
  max-width: 80%;
  margin: 0 auto;
}
#about p {
  text-align: center;
  color: #222;
  font-size: 40px;
  font-weight: 500;
  font-family: "Doppio One";
}
.about-container {
  display: flex;
  align-items: center;
  height: 80%;
  margin: 80px 0;
}
.about-container p {
  color: #222;
  font-size: 15px;
}
.developer-pic {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.developer-pic img {
  width: 80%;
  object-fit: cover;
  margin: 0 auto;
}
.context ul li {
  font-size: 30px;
  font-weight: bold;
}
@media screen and (max-width: 1280px) {
  #about {
    max-width: 90%;
  }
}

@media screen and (max-width: 1024px) {
  #about {
    /* height: 70vh; */
    max-width: 90%;
  }
  .developer-pic {
    visibility: hidden;
    width: 0;
  }
  #about p {
    font-size: 40px;
  }
  li h2 {
    font-size: 38px;
  }
  .context {
    margin: 0 auto;
  }
}
@media screen and (max-width:640px){
  #about{
    /* height: 70vh; */
    margin-top:20px;
    max-width: 95%;
  }
  ul{
    list-style: none;
    padding-left:0;
  }
  #about p{
    font-size:35px
  }
  li h2{
    font-size: 32px;
    -webkit-text-stroke: 1.5px #333;
  }
  .about-me:before {
    width:20%
  }
}
</style>