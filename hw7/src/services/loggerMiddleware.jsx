export const loggerMiddleware = (store) => (next) => (action) => { //шаблон любого middleware
    //store - это не state, а объект
    console.log('dispatching ', action);
    console.log('Текущее состояние store: ', store.getState()); //выведет состояние store в текущий момент, до отработки reducer (action)
    const result = next(action);
    console.log(store);
    console.log('Текущее состояние store: ', store.getState()); //выведет состояние store в текущий момент, после отработки reducer (action)
    return(result);
}