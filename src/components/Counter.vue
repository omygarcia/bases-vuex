<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct Access {{$store.state.counter.count}}</h2>
  <h2>Computed: {{countComputed}}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="randomInt" :disabled="$store.state.counter.isLoading">Random</button>

  <h1>mapState</h1>
  <h2>mapState: {{count}}</h2>
  <h2>lastMutation: {{lastMutation}}</h2>

  <h1>Direct getter: {{$store.getters["counter/squareCount"]}}</h1>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed:{
        countComputed(){
            return this.$store.state.counter.count
        },
        ...mapState('counter',['count','lastMutation','isLoading']),
        // ...mapState({
        //     count:state=>state.counter.count,
        //     lastMutation:state=>state.counter.lastMutation
        // })
    },
    methods:{
        increment(){
            this.$store.commit('counter/increment')
        },
        incrementBy(){
            this.$store.commit('counter/incrementBy',5)
        },
        /*incrementRandomInt(){
            this.$store.dispatch('incrementRandomInt');
        }*/
        //...mapActions(['incrementRandomInt'])
        ...mapActions({
            randomInt:'counter/incrementRandomInt'
        })
    }
}
</script>

<style>

</style>