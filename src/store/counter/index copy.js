import getRandomInt from "@/helpers/getRandomInt";

const counterStore = {
    namespaced:true,
    state:()=>({
        count:1,
        lastMutation:'none',
        isLoading:false,
        lastRandomInt:0
    }),
    mutations:{
        increment(state){
            state.count++;
            state.lastMutation = 'increment';
        },
        incrementBy(state,val){
            state.count+=val;
            state.lastMutation = 'incrementBy ' + val;
            state.lastRandomInt = val;
        },
        setLoading(state,val){
            state.isLoading = val;
        }
    },
    actions:{
        async incrementRandomInt(context){
            context.commit('setLoading',true);
            const randomInt = await getRandomInt();
            context.commit('incrementBy',randomInt);
            context.commit('setLoading',false);
        }
    },
    getters:{
        squareCount(state){
            return state.count*state.count;
        }
    },
}

export default counterStore;