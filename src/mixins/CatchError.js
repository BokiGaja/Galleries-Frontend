export const catchError = {
  data() {
    return {
      error: false,
      errorMessage: ''
    }
  },
  methods: {
    catchError(data) {
      this.error = true;
      this.errorMessage = data.error
    }
  }
};