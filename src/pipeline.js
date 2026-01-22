export const pipe = (...functions) => {
    return (data) => {
       return functions.reduce((acc, currentFunc) => {
            return currentFunc(acc)
        }, data)
    }
}

export default pipe