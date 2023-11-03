import Vue3Sanitize from 'vue-3-sanitize'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $sanitize: Vue3Sanitize
  }
}