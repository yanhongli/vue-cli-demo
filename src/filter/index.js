import Vue from 'vue'
Vue.filter('toString', function(v) {
    if(v === null || v === undefined) return ''
    return v.toString()
})