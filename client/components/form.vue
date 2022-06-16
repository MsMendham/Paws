<template>
  <section id="formwrapper">
    <div class="tittle">
      <span>Register to Volunteering</span>
    </div>
    <form @submit.prevent="submit" id="form" method="post">
      <input required type="text" name="forname" id="forname" autocomplete="off" placeholder="Name" value="a">
      <input required type="text" name="surname" id="surname" autocomplete="off" placeholder="Surname" value="a">
      <input required type="text" name="phone" id="phone" autocomplete="off" placeholder="Phone" value="1">
      <input required type="email" name="email" id="email" autocomplete="off" placeholder="Email" value="a@b">
      <input required type="text" name="address" id="address" autocomplete="off" placeholder="1st Line of Address" value="1">
      <input required type="text" name="postcode" id="code" autocomplete="off" placeholder="Postcode" value="11">
      <textarea name="skills" id="skillage" rows="8" cols="80" autocomplete="off" placeholder="What are your relevant skills?">sfdf</textarea>
      <textarea name="why" id="why" rows="8" cols="80" autocomplete="off" placeholder="Why my guy?">sdfsdf</textarea>
      <!-- <div id="timeaddee"></div> -->
      <div id="timeadder">
        <input type="date" id="date" name="date">
        <input type="time" id="start" name="date">
        <input type="time" id="end" name="date">
        <select class="" id="choice" name="choose">
          <option value="0">Animal Foster Carer</option>
          <option value="1">Fundraising &amp; Events Crew</option>
          <option value="2">Van Drivers Mate</option>
          <option value="3">Home Visitors</option>
          <option value="4">Retail Assistant</option>
          <option value="5">eBay Assistant</option>
        </select>
        <div>
          <label for="weekly">Add Weekly?</label>
          <input type="checkbox" id="repeat" name="weekly" value="">
        </div>
        <button @click.prevent="add" class="orangebutton" type="submit" name="additem">Add Entry</button>
      </div>
      <button type="submit" class="orangebutton" name="submit">Send Request</button>
    </form>
  </section>
</template>

<script>
module.exports = {
  mounted: () => {
    const now = new Date();

    document.getElementById("date").min = now.toISOString().split('T')[0]
    document.getElementById("date").value = now.toISOString().split('T')[0]

    const query = window.location.search;
    const params = new URLSearchParams(query);

    document.getElementById("choice").value = params.get("r") || 0
  },
  data: () => {
    return {
      entries: []
    }
  },
  methods: {
    createEntry(obj) {
      const weekday = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"]

      let entry = document.createElement('div');
      let info = document.createElement('div');

      entry.classList.add("entry");
      info.textContent = "on " + weekday[obj.availability] + " starting at " + obj.start + " doing " + obj.role.toString()
      entry.appendChild(info)

      if(!document.body.contains(document.getElementById("timeaddee"))) {
        const timeaddee = "<div id='timeaddee'></div>"
        document.getElementById("timeadder").insertAdjacentHTML("beforebegin", timeaddee)
      }

      document.getElementById("timeaddee").appendChild(entry);
    },
    add() {
      const dateobj = new Date(document.getElementById("date").value)

      if(dateobj.getTime() === dateobj.getTime() && document.getElementById("start").value !== "" && document.getElementById("end").value !== "") {
        const obj = {
          availability: dateobj.getDay(),
          start: document.getElementById("start").value,
          end: document.getElementById("end").value,
          role: 1 << parseInt(document.getElementById("choice").value)
        }

        this.createEntry(obj)
        this.$data.entries.push(obj)
      }
    },
    async submit() {
      const now = new Date();

      info = {
        forename: document.getElementById("forname").value,
        surname: document.getElementById("surname").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        postcode: document.getElementById("code").value,
        skills: document.getElementById("skillage").value,
        why: document.getElementById("why").value
      }

      await Promise.all(this.$data.entries.map(async (obj) => {
        await fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...info,
            availability: obj.availability,
            role: obj.role,
            time: (obj.start + "-" + obj.end)
          })
        })
      }));

      if(this.$data.entries.length) window.location.href = "/?thank"
    },
  }
}
</script>

<style scoped>
@import '/css/global.css';
@import '/css/index.css';
@import '/css/animation.css';
@import '/css/headerfooter.css';

#form {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

#form > * {
  width: 80%;
  font-size: 16px;
  padding: 12px 20px;
  margin: 8px 20px;
  border: 1px solid black;
  outline: none;
  border-radius: 4px;
}

#form > :not(button) {
  background: #e7eaeb;
}

#form button {
  cursor: pointer;
  border: none;
}

#timeadder {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 20px;
}

#timeadder * {
  font-size: 16px;
  padding: 4px 6px;
  margin: 0 10px;
}

#timeaddee {
  display: flex;
  flex-wrap: wrap;
  gap: 2px 20px;
}

.entry {
  color: white;
  background: #1458a5;
  padding: 10px 30px 10px 10px;
  margin: 10px 0;
  position: relative;
  border-radius: 4px;
}

.entry::after {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  content: '\2716';
  cursor:pointer;
}
</style>
