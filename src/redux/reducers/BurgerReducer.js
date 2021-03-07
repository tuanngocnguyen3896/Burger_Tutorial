const burgerState = {
    burger: {salad:1,cheese:1,beef:1},
    menu: {
        salad:10,
        cheese:20,
        beef:55
    },
    total:85
}
export const BurgerReducer = (state = burgerState,action) =>{
    switch (action.type){
        case "ADD_BREADMID":{
            let {propBurger,amount} = action;
            if(amount === -1 && state.burger[propBurger] < 1){
                return {...state}
            }
            let burgerUpdate = {...state.burger};
            burgerUpdate[propBurger] += amount;
            state.burger = burgerUpdate;
            state.total += amount * state.menu[propBurger]
            return {...state}
        }
    }
  return {...state}
}