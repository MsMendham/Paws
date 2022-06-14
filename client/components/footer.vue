<template>
  <div id="footer">
    <div class="bar" id="infobar">
      <div class="innerbar">
        <div id="clickystuffs">
          <span style="grid-column: 1; grid-row: 1"><a href="https://www.rspcahalifaxhuddersfieldbradford.org.uk/about-us/">Our History</a></span>
          <span style="grid-column: 2; grid-row: 1"><a href="https://www.rspcahalifaxhuddersfieldbradford.org.uk/fill-out-an-adoption-application-form-cat-kitten/">Adoption</a></span>
          <span style="grid-column: 3; grid-row: 1"><a href="#">How Can You Help</a></span>
          <span style="grid-column: 4; grid-row: 1"><a href="#">News &amp; Dates</a></span>
          <span style="grid-column: 5; grid-row: 1"><a href="#">Animal Centre</a></span>
          <span style="grid-column: 1; grid-row: 2"><a href="https://www.rspcahalifaxhuddersfieldbradford.org.uk/our-shops/">Our Shops</a></span>
          <span style="grid-column: 2; grid-row: 2"><a href="https://www.rspcahalifaxhuddersfieldbradford.org.uk/contact-us/">Contact</a></span>
          <span style="grid-column: 3; grid-row: 2"><a href="https://www.rspcahalifaxhuddersfieldbradford.org.uk/veterinary-disclaimer/">Veterinary Disclaimer</a></span>
        </div>
        <div id="image">
          <img src="/static/vmd.png" alt="these are some ppl right here">
        </div>
        <div id="socials">
          <ul>
            <div class="social">
              <a href="https://www.facebook.com/RSPCAHalifaxHudds/"><span class="fa fa-facebook-square fa-lg"></span></a>
            </div>
          </ul>
          <ul>
            <div class="social">
              <a href="https://twitter.com/RSPCAhx"><span class="fa fa-twitter fa-lg"></span></a>
            </div>
          </ul>
          <ul>
            <div class="social">
              <a href="https://www.instagram.com/rspca_halifaxhuddsbradford"><span class="fa fa-instagram fa-lg"></span></a>
            </div>
          </ul>
          <ul>
            <div class="social">
              <a href="https://www.youtube.com/channel/UCK6bTh-sGvOMuQk6cseuANw"><span class="fa fa-youtube fa-lg"></span></a>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div class="bar" id="tsandcs">
      <div class="innerbar">
        <span>
          <a href="https://www.rspcahalifaxhuddersfieldbradford.org.uk/terms-and-conditions/">Terms &amp; Conditions</a>
          <span style="color: white;">|</span>
          <a href="https://www.rspcahalifaxhuddersfieldbradford.org.uk/privacy-cookies/">Privacy &amp; Cookies</a>
        </span>
      </div>
    </div>
    <div class="bar" id="donatebar">
      <div class="innerbar">
        <div id="copyright">
          <span>© 2020 RSPCA Halifax, Huddersfield, Bradford &amp; District Branch | Registered Charity No. 225575</span>
        </div>
        <div id="plsdonate">
          <a href="https://www.nowdonate.com/checkout/v1rav8120ixd37ya1m84" class="button">
            <span>Please Donate</span>
          </a>
        </div>
        <div id="credits">
          <span>Handcrafted by <a href="https://github.com/lewardo">@lewardo</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '/css/global.css';
@import '/css/animation.css';

.bar {
  width: 100%;
  background: orange;
  display: grid;
}

.innerbar {
  width: 55%;
  background: green;
  place-self: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
}

.innerbar div {
  padding: 10px;
  display: grid;
}

.innerbar div > * {
  place-self: center;
}

#socials {
  background: orange;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.social {
  background: white;
  border-radius: 50%;
  margin: 0 5px;
}

.social a {
  color: #043364;
}

#infobar, #tsandcs {
  background: #043364;
}

#tsandcs .innerbar {
  justify-content: space-around;
}

#tsandcs .innerbar a {
  text-decoration: none;
  color: #1458a5;
}

#tsandcs .innerbar a:hover {
  font-size: 16px;
  color: #f4731a;
}

#donatebar {
  background: #718ab1;
  padding: 10px;
}

#copyright {
  font-size: 10px;
  color: #043364;
}

#plsdonate .button {
  background: #f4731a;
  padding: 10px;
  display: grid;
  border-radius: 2px;
  color: white;
  text-decoration: none;
}

#plsdonate .button:hover {
  animation: pulse ease-in-out 1s forwards infinite;
}

#clickystuffs {
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, 1fr);
  width: 30vw;
}

#clickystuffs span {
  background: pink;
  transition: 0.5s ease;
}

#clickystuffs span a {
  text-decoration: none;
  color: white;
  transition: 0.5s ease;
}

#clickystuffs span:hover {
  transform:scale(125%);
}

#clickystuffs span:hover a {
  color: #f4731a;
}

#credits {
  color: #043364;
}

#credits a {
  text-decoration: none;
  color: white;
}

</style>
