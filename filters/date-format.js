import Vue from 'vue'
import pipe from 'lodash/fp/pipe'
import parse from 'date-fns/fp/parseISO'
import format from 'date-fns/fp/format'

Vue.filter('dateFormat', function (value, formatString = 'PP') {
  return pipe(parse, format(formatString))(value)
})
