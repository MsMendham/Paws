<template>
  <section id="content">
    <slot></slot>
  </section>
</template>

<style scoped>
@import '/css/global.css';
@import '/css/animation.css';

section#content {
  width: 100vw;
  min-height: 50vh;
  /* background: red; */
}

</style>
