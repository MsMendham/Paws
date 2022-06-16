<template>
  <section id="formwrapper">
    <div class="tittle">
      <span>Register to Volunteering</span>
    </div>
    <form @submit.prevent="submit" id="form" method="post">
      <input required type="text" name="forname" id="forname" value="" autocomplete="off" placeholder="Name">
      <input required type="text" name="surname" id="surname" autocomplete="off" placeholder="Surname">
      <input required type="text" name="phone" id="phone" autocomplete="off" placeholder="Phone">
      <input required type="email" name="email" id="email" autocomplete="off" placeholder="Email">
      <input required type="text" name="address" id="address" autocomplete="off" placeholder="1st Line of Address">
      <input required type="text" name="postcode" id="code" autocomplete="off" placeholder="Postcode">
      <textarea name="skills" id="skillage" rows="8" cols="80" autocomplete="off" placeholder="What are your relevant skills?"></textarea>
      <div id="timeaddee">
        <div class="entry">fsfjhglkdjghlkjf</div>
      </div>
      <div id="timeadder">
        <input type="date" id="date" name="date" value="0">
        <input type="time" id="start" name="date" value="0">
        <input type="time" id="end" name="date" value="0">
        <select class="" id="choice" name="choose">
          <option value="0">smth</option>
          <option value="1">smth else</option>
          <option value="2">ooo another thang</option>
          <option value="3">wao more</option>
          <option value="4">so many stuffs</option>
        </select>
        <div>
          <label for="weekly">Add Weekly?</label>
          <input type="checkbox" id="repeat" name="weekly" value="">
        </div>
        <button @click.prevent="add" name="additem">Add Entry</button>
      </div>
      <button type="submit" name="submit">send info</button>
    </form>
  </section>
</template>

<script>
module.exports = {
  mounted: () => {
    const now = new Date();

    document.getElementById("date").min = now.toISOString().split('T')[0]

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
      info.textContent = "on " + weekday[obj.date] + " starting at " + obj.start + " doing " + obj.role.toString()
      entry.appendChild(info)
      document.getElementById("timeaddee").appendChild(entry);
    },
    add() {
      const dateobj = new Date(document.getElementById("date").value)

      if(dateobj.getTime() === dateobj.getTime() && document.getElementById("start").value !== "" && document.getElementById("end").value !== "") {
        const obj = {
          date: dateobj.getDay(),
          start: document.getElementById("start").value,
          end: document.getElementById("end").value,
          role: 1 << parseInt(document.getElementById("choice").value)
        }

        this.createEntry(obj)
        this.$data.entries.push(obj)
      }
    },
    submit() {
      const now = new Date();

      info = {
        forename: document.getElementById("forname").value,
        surname: document.getElementById("surname").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        postcode: document.getElementById("code").value,
      }

      for (let entry in this.$data.entries) {
        console.log({...info, ...entry})
        // fetch("/signup", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     ...info,
        //     ...entry,
        //     role: entry.role,
        //     availability: 1,
        //     time: now.toISOString().split('T')[0] + "-" + now.toISOString().split('T')[0],
        //     why: "just bc",
        //     skills: "yes"
        //   })
        // })
      }
    },
  }
}
</script>

<style scoped>
@import '/css/global.css';
@import '/css/index.css';
@import '/css/animation.css';

#form {
  background: red;
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
  background: #e7eaeb;
  border: none;
  outline: none;
  border-radius: 4px;
}

#timeadder {
  display: flex;
  justify-content: space-between;
}

#timeadder * {
  font-size: 16px;
  padding: 4px 6px;
}

.entry {
  color: white;
  background: blue;
  padding: 10px;
  margin: 10px 0;
  position: relative;
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
