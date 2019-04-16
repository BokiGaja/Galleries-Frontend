import moment from 'moment'

export const formatDate = {
  filters: {
    formatDate(str) {
      return moment(str).format('Do MMMM YYYY')
    },
  }
};
