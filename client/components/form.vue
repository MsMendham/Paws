<template>
  <form @submit.prevent="submit" id="form" method="post">
    <input required type="text" name="forname" id="forname" value="" placeholder="Name">
    <input required type="text" name="surname" id="surname" placeholder="Surname">
    <input required type="text" name="phone" id="phone" placeholder="Phone">
    <input required type="email" name="email" :pattern="emailreg" id="email" placeholder="Email">
    <input required type="text" name="address" id="address" placeholder="1st Line of Address">
    <input required type="text" name="postcode" id="code" placeholder="Postcode">
    <textarea name="skills" id="skillage" rows="8" cols="80" placeholder="What are your relevant skills?"></textarea>
    <div id="timeaddee"></div>
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
      <button @click.prevent="add" name="additem">add stuffs</button>
    </div>
    <button type="submit" name="submit">send info</button>
  </form>
</template>

<script>
module.exports = {
  mounted: () => {
    const now = new Date();
    document.getElementById("date").min = now.toISOString().split('T')[0]
  },
  data: () => {
    return {
      emailreg: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
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
      const date = new Date(document.getElementById("date").value)

      if(date.getTime() === date.getTime() && document.getElementById("start").value !== "" && document.getElementById("end").value !== "") {
        const obj = {
          date: date.getDay(),
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
#form {
  background: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

#form * {
  margin: 10px 0;
}
</style>
