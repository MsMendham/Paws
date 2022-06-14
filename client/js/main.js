new window.Vue({
  el: '#main',
  components: {
    'rspca-header': window.httpVueLoader('/components/header.vue'),
    'rspca-footer': window.httpVueLoader('/components/footer.vue'),
    'rspca-content': window.httpVueLoader('/components/content.vue'),
  },
})
