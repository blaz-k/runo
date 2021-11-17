import { createStore } from "vuex";
import axios from "axios"

export default createStore({
    state: {
        count: 123
    },
    getters: {
        getCount(state){
            return state.count;
        }
    }, 
    actions: {
        async fetchCount(store){
            //const newNum = 5;
            let res = await axios.get(
                "api.openweathermap.org/data/2.5/weather?q=london&appid=0c668be6443fc2414eb819d27abd76da"
            ); // [6]

            store.commit("setCount", res.data)
            console.log(res.data)
            

        }
    },
    mutations: {
        setCount(state, num){
            state.count = num

        }
    }

});

