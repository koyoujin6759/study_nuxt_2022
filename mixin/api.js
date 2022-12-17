export default {
  methods: {
    sendGet(
      relativeUrl,
      requestData,
      successFunction = null,
      failureFunction = null 
    ) {
      this.$axios
        .$get(relativeUrl, {
          params: requestData,
        })
        .then((response) => {
          if(successFunction) {
            successFunction(response);
          }
        })
        .catch((error) => {
          if(failureFunction) {
            failureFunction(error);
          } else {
            alert(error);
          }
        });
    },
    sendDelete(relativeUrl, successFunction = null, 
      failureFunction = null) {
        this.$axios
          .$delete(relativeUrl) 
          .then((response) => {
            if(successFunction) {
              successFunction(response);
            }
          })
          .catch((error) => {
            if(failureFunction) {
              failureFunction(error);
            } else {
              alert(error);
            }
          })
      },
  },
};
