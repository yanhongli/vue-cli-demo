import Vue from 'vue'
import numberal from 'numeral'
import numberFormat from 'vue-filter-number-format'
Vue.filter('toString', function(v) {
    if(v === null || v === undefined) return ''
    return v.toString()
})
Vue.filter('numberFormat', numberFormat(numberal))