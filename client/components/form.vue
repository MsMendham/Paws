<template>
  <form @submit.prevent="submit" method="post">
    <input type="text" name="forname" id="forname" value="" placeholer="Name">
    <input type="text" name="surname" id="surname" placeholer="Surname">
    <input type="text" name="phone" id="phone" placeholer="Phone">
    <input type="email" name="email" id="email" placeholer="Email">
    <input type="text" name="address" id="address" placeholer="1st Line of Address">
    <input type="text" name="postcode" id="code" placeholer="Postcode">
    <textarea name="skills" id="skillage" rows="8" cols="80" placeholer="What are your relevant skills?"></textarea>
    <div id="timeaddee"></div>
    <div id="timeadder">
      <input type="date" id="date" name="date" value="0">
      <input type="time" id="start" name="date" value="0">
      <input type="time" id="end" name="date" value="0">
      <select class="" id="choice" name="choose">
        <option value="">smth</option>
        <option value="">smth else</option>
        <option value="">ooo another thang</option>
        <option value="">wao more</option>
        <option value="">so many stuffs</option>
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
      entries: []
    }
  },
  methods: {
    createEntry(obj) {
      let entry = document.createElement('div');
      let info = document.createElement('div');

      entry.classList.add("entry");
      info.textContent = "on " + obj.date + " starting at " + obj.start
      entry.appendChild(info)
      document.getElementById("timeaddee").appendChild(entry);
    },
    add() {
      const date = new Date(document.getElementById("date").value)
      const weekday = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"]

      if(date.getTime() === date.getTime() && console.log(document.getElementById("start").value) !== "" && console.log(document.getElementById("end").value) !== "") {
        const obj = {
          date: date.getDay(),
          start: document.getElementById("start").value,
          end: document.getElementById("end").value,
        }

        this.createEntry(obj)
        this.$data.entries.push(obj)
      }
    },
    submit: () => {
      const now = new Date();

      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          forname: "ur",
          surname: "mum",
          phone: 123456778,
          email: "richardrotates@gmail.com",
          address: "150 Freston Road",
          postcode: "W10 6RT",
          role: 0b010110101010,
          availability: 1,
          time: now.toISOString().split('T')[0] + "-" + now.toISOString().split('T')[0],
          why: "just bc",
          skills: "yes"
        })
      })
    },
  }
}
</script>

<style scoped>
</style>
