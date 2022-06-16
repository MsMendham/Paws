<template>
  <div id="section">
    <div id="overlay"></div>
    <section id="popup">
      <div id="bye" @click="exit()">&#10006;</div>
      <div id="cardinfo"></div>
      <div class="orangebutton" id="toform" @click="redirect()"><span>I Want To Volunter</span></div>
    </section>
    <section id="cardgrid">
      <div class="card" v-for="role in roles">
        <img :src="role.image" :alt="role.title">
        <div class="bottom">
          <span>{{ role.title }}</span>
          <div class="orangebutton moreinfo" @click.prevent="moreinfo(role)">Find Out More</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  module.exports = {
    data: () => {
      return {
        roles: {},
        formlink: ""
      }
    },
    mounted: async function() {
      this.roles = JSON.parse(await fetch("/static/volunteering.json").then(res => res.text())).data
    },
    methods: {
      moreinfo: (role) => {
        console.log(role.index.toString())
        this.formlink = "/volunteer?r=" + role.index.toString()

        document.getElementById("cardinfo").innerText = role.desc
        document.getElementById("popup").style.display = "flex";
        document.getElementById("overlay").style.display = "block";
      },
      redirect: () => {
        window.location.href = this.formlink || "/";
      },
      exit: () => {
        document.getElementById("popup").style.display = "none";
        document.getElementById("overlay").style.display = "none";
      }
    }
  }
</script>

<style scoped>
@import '/css/global.css';
@import '/css/animation.css';
@import '/css/headerfooter.css';

#popup {
  display: none;
  position: fixed;
  top: 10vh;
  left: 10vw;
  width: 80vw;
  background: white;
  z-index: 1000;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  padding: 40px;
}

#overlay {
  display:none;
  width: 100vw;
  height: 100vh;
  top: 0;
  left:0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 50;
}

#cardinfo {
  background: #16a8aa;
  color: white;
  font-size: 16px;
  padding: 40px;
  margin: 0 0 40px;
  font-weight: bold;
}

#bye {
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  padding: 10px;
  font-size: 20px;
}

#cardgrid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}

.card {
  width: 25vw;
  height: 50vh;
  margin: 10px 0;
  position: relative;
  transition: 0.5s linear;
  border-radius: 20px;
  overflow: hidden;
}

.card:hover {
  box-shadow: 0 0 50px 5px black;
}

.card img {
  position: relative;
  display: block;
  object-fit: cover;
  width: 100%;
  height: 75%;
}

.card .bottom {
  background: #718ab1;
  height: 25%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card .bottom span {
  margin: 10px;
  font-size: 32px;
  font-weight: bold;
}
</style>
