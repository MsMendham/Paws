<template>
  <div id="section">
    <section id="popup">
      <div id="bye" @click="exit()">&#10006;</div>
      <div id="cardinfo">adsfs</div>
      <div id="toform" @click="redirect()"><span>I Want To Volunter</span></div>
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
      },
      redirect: () => {
        window.location.href = this.formlink || "/";
      },
      exit: () => {
        document.getElementById("popup").style.display = "none";
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
  height: 80vh;
  background: white;
  box-shadow: 0 0 100px 10px;
  z-index: 100;
  flex-direction: column;
}

#cardinfo {
  background: blue;
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

#toform {
  background: red;
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
