export default {
    state: {
        count:1,
    },
    getters: { //computed
        getIncreaseCount: (state) => {
            return state.count +2;
        },
        formattedCount: (state, getters) => {
            return getters.getIncreaseCount + 100;
        }
    },
    mutations: { // methods
        addCounter(state, payload) {
            return (state.count += payload);
        }
    },
    actions: { // methods
        async getCounter(context) {
            setTimeout(() => {
                context.commit("addCounter", 20)
            }, 1000);
        }
    }
}