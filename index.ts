
//##### Generics 

// - add a type parameter inestead of the any 

async function retry(
    fn: () => Promise<any>    
) {
    return fn()
}

retry(() => Promise.resolve("Hello")).then((str) => {
// is any 
 console.log(str)
})


async function retryAfter<T>(
    fn: () => Promise<T>    
) {
    return fn()
}

retryAfter(() => Promise.resolve("Hello")).then((str) => {
// is string, or the type of the parameter 
 console.log(str)
})


//# Narrowing type parameter to only passed values as param 


declare function useStatuses<T>(statuses: T[]): T

// variable type is string
const loadingStatus = useStatuses(["loading", "idle"])

declare function useStatuses2<const T>(statuses: T[]): T

// variable type is union type of parameter
const loadingStatus2 = useStatuses2(["loading", "idle"])

//# NoInfer

// makes values of one prop not be infered ad forces to use the type passed in the other prop



//##############################



//#### Extract types of existent values

//# create type from all the members of the array 
// you need to set as const
const roles = ["values", "example"] as const
type Role = (typeof roles )[number]
