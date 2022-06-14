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
              <input type="text" id="searchbar" placeholder="Search..." autocomplete="off">
              <span id="submit" class="fa fa-search fa-lg"></span>
            </div>
            <span id="login">
              <span class="fa fa-user"></span>
              <a href="https://www.rspcahalifaxhuddersfieldbradford.org.uk/my-account/">
                My Account
              </a>
            </span>
          </div>
      </div>
    </div>
    <div class="bar" id="linkbar">
      <div class="innerbar">
        <div id="links">
          <div class="link"><a href="https://www.rspcahalifaxhuddersfieldbradford.org.uk/">Home</a></div>
          <div class="link"><a href="https://www.rspcahalifaxhuddersfieldbradford.org.uk/about-us/our-vision/">What We Do</a></div>
          <div class="link"><a href="https://www.rspcahalifaxhuddersfieldbradford.org.uk/adoption/">Adopt</a></div>
          <div class="link"><a href="https://www.rspcahalifaxhuddersfieldbradford.org.uk/volunteer/">How Can You Help</a></div>
          <div class="link"><a href="https://www.rspcahalifaxhuddersfieldbradford.org.uk/our-shops/">Shop</a></div>
          <div class="link"><a href="https://www.rspcahalifaxhuddersfieldbradford.org.uk/contact-us/">Contact</a></div>
          <div class="link"><a href="https://www.rspcahalifaxhuddersfieldbradford.org.uk/sign-up-to-our-newsletter/">Sign Up To Our Mailing List</a></div>
        </div>
      </div>
    </div>
    <div class="bar" id="animalbar">
      <div class="innerbar">
        <div class="column" id="left">
          <a href="https://www.rspcahalifaxhuddersfieldbradford.org.uk/sponsor-an-animal/" class="button">
            <span>Sponsor An Animal</span>
          </a>
        </div>
        <div class="column" id="center">
          <ul id="animals">
            <li>
              <a href="https://www.rspcahalifaxhuddersfieldbradford.org.uk/shop/" class="option">
                <span class="fa fa-shopping-bag"></span>
                <span>Shop Online</span>
              </a>
            </li>
            <li>
              <a href="" class="option">
                <span class="fa fa-"></span>
                <span>Cats</span>
              </a>
            </li>
            <li>
              <a href="" class="option">
                <span class="fa fa-dog"></span>
                <span>Dogs</span>
              </a>
            </li>
            <li>
              <a href="" class="option">
                <span class="fa fa-twitter"></span>
                <span>Small Animals</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="column" id="right">
          <a href="https://www.nowdonate.com/checkout/v1rav8120ixd37ya1m84" class="button">
            <span>Make A Donation</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    mounted: () => {
      document.getElementById("submit").onclick = () => {
        const search = document.getElementById("searchbar").value;
        window.location.href = "https://www.rspcahalifaxhuddersfieldbradford.org.uk/?s=" + encodeURIComponent(search);
      }

      document.getElementById("searchbar").addEventListener("keyup", e => {
        if(e.keyCode === 13) {
          e.preventDefault();
          document.getElementById("submit").click();
        }
      })
    }
  }
</script>

<style scoped>
@import '/css/global.css';
@import '/css/animation.css';

#header {
  width: 100%;
  /* background: hotpink; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bar {
  width: 100%;
  /* background: red; */
  display: grid;
}

.innerbar {
  width: 55%;
  /* background: blue; */
  place-self: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
}

.column {
  /* background: orange; */
  padding: 10px;
  min-width: 10vw;
}

#logobar #right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}

#linkbar {
  background: #16a8aa;
  height: 50px;
}

#links {
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.link a {
  color: white;
  text-decoration: none;
  padding: 17px;
}

.link a:hover {
  background: #24d6da;
  transform: scale(125%);
}

#animals {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#animals .option {
  display: inline-block;
  /* background: green; */
  padding: 10px 20px;
  text-decoration:none;
  color:white;
}

#animals .option:hover {
  transform: scale(125%);
  color: #f4731a;
}

#animalbar .button {
  background: #f4731a;
  padding: 10px;
  display: grid;
  border-radius: 2px;
  color: white;
  text-decoration: none;
  /* animation-duration: 1s;
  animation-direction: forwards;
  animation-timing-function: forwards; */
}

#animalbar {
  background: #1458a5;
}

#animalbar .button span {
  place-self: center;
}

#animalbar .button:hover {
  animation: pulse ease-in-out 1s forwards infinite;
}

#media a {
  color: #305d88;
  text-decoration: none;
}

#logo {
  width: 20vw;
}

#search {
  background: white;
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
  font-size: 12px;
  /* background: red; */
  margin: 20px 0;
}

#login:hover {
  color: #f4731a;
  cursor: pointer;
}

#login span {
  /* background: green; */
  padding: 0 10px;
}

#login a {
  color: #1458a5;
  text-decoration: none;
}

#login a:hover {
  color: #f4731a;
}

</style>
