<template>
  <div id="header">
    <div class="bar" id="logobar">
      <div class="innerbar">
          <div class="column" id="left">
            <div id="media">
              <a href="https://www.facebook.com/RSPCAHalifaxHudds/">
                <span class="fa fa-facebook-square fa-2x"></span>
              </a>
              <a href="https://twitter.com/RSPCAhx">
                <span class="fa fa-twitter fa-2x"></span>
              </a>
              <a href="https://www.instagram.com/rspca_halifaxhuddsbradford/">
                <span class="fa fa-instagram fa-2x"></span>
              </a>
            </div>
          </div>
          <div class="column" id="center">
            <img src="static/logo.png" alt="RSPCA Huddersfield logo" id="logo">
          </div>
          <div class="column" id="right">
            <div id="search">
              <input type="text" id="search" placeholder="Search..." autocomplete="off">
              <span class="fa fa-search fa-lg"></span>
            </div>
            <div id="login">
              <span class="fa fa-user"></span> My Account
            </div>
          </div>
      </div>
    </div>
    <div class="bar" id="linkbar">
      <div class="innerbar">
        <div id="links">
          <div class="link"><a href="">Home</a></div>
          <div class="link"><a href="">What We Do</a></div>
          <div class="link"><a href="">Adopt</a></div>
          <div class="link"><a href="">How Can You Help</a></div>
          <div class="link"><a href="">Shop</a></div>
          <div class="link"><a href="">Contact</a></div>
          <div class="link"><a href="">Sign Up To Our Mailing List</a></div>
        </div>
      </div>
    </div>
    <div class="bar" id="animalbar">
      <div class="innerbar">

      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../css/global.css';

#header {
  width: 100%;
  /* background: hotpink; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#header .bar {
  width: 100%;
  /* background: red; */
  display:grid;
}

#header .innerbar {
  width: 55%;
  /* background:blue; */
  place-self: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.column {
  /* background: orange; */
  padding: 10px;
  min-width: 10vw;
}

#linkbar {
  background: #16a8aa;
  height: 50px;
}

#links {
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.link a {
  color: white;
  text-decoration: none;
  padding: 10px;
  margin: 10px;
}

#media a {
  color: #305d88;
  text-decoration: none;
}

#logo {
  width: 20vw;
}

#search {
  /* background: white; */
  display: flex;
  flex-direction: row;
}

#search input {
  background: #e7eaeb;
  color: black;
  border: none;
  flex-grow: 1;
  order: 0;
  font: 16px sans-serif;
  padding: 4px 8px;
  border-radius: 4px 0 0 4px;
}

#search input:focus {
  outline-width: 0;
}

#search span {
  background: #6f777f;
  color: white;
  margin: 0;
  padding: 8px;
  border-radius: 0 4px 4px 0;
  order: 1;
  cursor: pointer;
}

#login {
  color: #1458a5;
}

#login:hover {
  color: #f4731a;
  cursor: pointer;
}


</style>
