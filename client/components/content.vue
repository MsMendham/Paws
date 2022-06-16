<template>
  <section id="content">
    <div id="banner">
      <span id="title">{{ $attrs.title }}</span>
      <span id="subtitle">{{ $attrs.subtitle }}</span>
    </div>
    <div id="innercontent">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  module.exports = {
    data: () => {
      return {}
    }
  }
</script>

<style scoped>
@import '/css/global.css';
@import '/css/animation.css';

#content {
  width: 100vw;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: green; */
}

#banner {
  width: 100%;
  background: #718ab1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#banner * {
  color: white;
}

#title {
  font-size: 48px;
  font-weight: bold;
  padding: 20px 0 0;
}

#subtitle {
  font-size: 8px;
  font-weight: thin;
  padding: 20px 0;
}

#innercontent {
  width: 55%;
  min-height: 50vh;
  /* background: red; */
  padding: 20px 0;
}

</style>
