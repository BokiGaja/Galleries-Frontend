import moment from 'moment'

export const formatDate = {
  filters: {
    formatDate(str) {
      return moment(str).format('YYYY-MM-DD HH:mm:ss')
    },

    diffForHumans(str) {
      return moment(str).startOf('minute').fromNow()
    }
  }
};
