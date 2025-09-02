function debounce(fn){
    let timer;
    return function (args){
        clearTimeout(timer)
        timer=setTimeout(()=>{
            fn(args);
        },1000)
    }
}
export {debounce};