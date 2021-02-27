window.addEventListener('load',async ()=>{
    const details = document.getElementsByClassName('details').item(0);
    const slide = document.getElementsByClassName('slide').item(0);
    var flag = true;
    const reverse = ()=>{
        if(flag){
            slide.style.marginLeft = '12px'
            details.style.opacity = "1"
        }else{
            details.style.opacity = "0"
            slide.style.marginLeft = '-450px'
        }
        flag = !flag;
    }
    await (new Promise((resolve)=> setTimeout(resolve,1200)));
    reverse()
    /* if you want loop */
    // setInterval(reverse, 2000);
})

