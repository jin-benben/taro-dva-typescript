
export default {
    namespace: 'app',
    state: {
        num: 1,
        mineType: '红',
    },
    reducers: {
        updateState(state, { payload }) {
            let {num}=state;
            console.log(num)
            return { ...state, ...payload,num:num+1 }
        },
    },
 
    subscriptions: {

    },
}