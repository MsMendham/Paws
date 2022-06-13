<template>
  <div id="header">
    <div id="content">
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
          <input type="text" id="search" placeholder="Search...">
          <span class="fa fa-search"></span>
        </div>
        <div id="login">
          <span class="fa fa-user"></span> My Account
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../css/global.css';

#header {
  width: 100%;
  background: hotpink;
  display: flex;
  justify-content: center;
}

#content {
  width: 55%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background:blue;
}

.column {
  min-width: 100px;
  background: orange;
  margin: 10px 0;
}

#logo {
  height: 11.2vh;
}

#media a {
  color: #305d88;
  text-decoration: none;
}

#login {
  color: #1458a5;
}

#login:hover {
  color: #f4731a;
  cursor: pointer;
}

#search {
  width: 10vw;
}

#search input {
  background: green;
  margin: 0;
  position:absolute;
  border-radius: 4px 0 0 4px;
  font: 20px sans-serif;
  padding: 4px;
}

#search span {
  background: red;
  padding:2px;
  position:absolute;
  font-size: 20px;
  float:right;
}

</style>
