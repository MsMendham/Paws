<template>
  <div id="section">
    <section id="popup">

    </section>
    <section id="cardgrid">

    </section>
  </div>
</template>

<script>
  module.exports = {
    data: async () => {
      return {
        roles: JSON.parse(await fetch("/static/volunteering.json").then(res => res.text())).data
      }
    }
  }
</script>

<style>

</style>
