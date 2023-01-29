// middleware is a function which returns a function

// ES5
/*
export function logging(store) {
    return function (next) {
        return function(action){
            console.log('ES5 test middleware')
            return next(action)
        }
    }
    
};
**/


// ES6
export const logging = store => next => action => {
    console.log(`ES6 test middleware ${action.type}`)
    return next(action)
};