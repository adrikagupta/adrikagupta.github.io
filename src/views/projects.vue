<template>
  <div id="projects">
    <p class="main-heading">PROJECTS</p>
    <div class="cards">
      <div class="card" v-for="(card, index) in project_cards" :key="index">
        <div class="card-img">
          <img :src="card.image" alt="heaven_mountains" />
          <a :href="card.link" target="_blank" class="github">View on Github</a>
        </div>
        <div class="content">
          <p class="project-title">{{card.title}}</p>
          <p class="project-description">
            {{card.description}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project_cards: [
        {
          image: require("@/assets/foster.svg"),
          title: "Foster",
          description:
            "The aim of this app is to help those who have ADHD. This app helps them to regulate their sleep cycles, take their medications on time, maintain a task planner, perform relaxation techniques like yoga and meditation, and perform exercises.",
          link:"https://github.com/adrikagupta/code-camp_codeplay",
        },
        {
            image:require("@/assets/aurea.svg"),
            title:"Aurea",
            description:"Get to know about the Golden Ratio in detail with applications from real life. Identify the Golden Ratio in an image and use the Golden ratio calculator. Participate in or check out the public forum where people post Golden Ratio images",
            link:"https://github.com/Prash2002/aurea"
        },
        {
            image:require("@/assets/heaven_mountains.svg"),
            title:"Heaven Mountains",
            description:"It's a website design for an adventure travel operator specialising in inspirational cultural tours, treks and expeditions to various mountains.",
            link:"https://github.com/adrikagupta/Heaven_Mountains"
        },
        {
            image:require("@/assets/flappy_bird.svg"),
            title:"Flappy Bird",
            description:"A Flappy Bird clone using Javascript and HTML.The player controls a bird, attempting to fly between columns of green pipes without hitting them.",
            link:"https://github.com/adrikagupta/Flappy_Bird"
        },
      ],
    };
  },
};
</script>

<style scoped>
.main-heading{
  position: relative;
}
.main-heading:before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 10px;
  width: 10%;
  transform: translate(-50%,0);
  border-bottom: 3px solid  #e53947;
}
#projects {
  min-height: 100vh;
  max-width: 80%;
  margin: 20px auto;

}
.main-heading {
  text-align: center;
  color: #222;
  font-size: 40px;
  font-weight: 500;
  font-family: "Doppio One";
  margin-bottom: 50px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
}
.card {
  width: 50%;
  background-color: white;
  border: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 15px;
}
.card-img {
  width: 70%;
  position: relative;
  z-index: 20;
}
.card img {
  width: 100%;
}
.project-title {
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
  /* border-bottom: 2px dashed #e53947; */
}
.project-description {
  font-size: 18px;
  margin-bottom: 0;
}
.github {
  position: absolute;
  bottom: 0px;
  left: 0;
  background-color: #222;
  color: white;
  font-size: 15px;
  /* border: 1px solid #e53947; */
  border: 2px solid transparent;
  padding: 5px;
}
.content {
  background-color: #fff;
  padding: 60px 10px 15px;
  position: relative;
  top: -50px;
  z-index: 10;
  border-radius: 10px;
  box-shadow: 10px 10px 60px #d9d9d9, -20px -20px 60px #ffffff;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: 10px 10px 60px #d9d9d9, -20px -20px 90px #ffffff;
}

.card a:hover{
    text-decoration: none;
    background-color: #eee;color: #222;
    border:2px solid #222
}

@media screen and (max-width: 1280px) {
  #projects{
    max-width: 90%
  }
}
@media  screen and (max-width: 1024px){
  .card-img{
    width: 85%
  }
  .project-description{
    font-size:15px
  }
  .project-title{
    font-size: 22px
  }
  .github{
    font-size:14px;
    padding: 1px 3px;
  }
}
@media  screen and (max-width: 768px){
  .card-img{
    width: 90%
  }
}
@media  screen and (max-width: 640px){
  #projects{
    max-width:95%;
  }
  .main-heading{
    font-size: 35px;
  }
  .main-heading::before{
    width:20%;
  }
  .card{
    width: 100%;
  }
  .card-img{
    width: 85%
  }
}
</style>