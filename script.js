document.addEventListener("mousemove",function(dets){
    console.log("dets.y")
})
gsap.to("#nav",{
    backgroundColor:"#123",
    heigth:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -8%",
        end:"top -10%",
        scrub:2,
        markers:true
     }
})

gsap.to("#main",{
    backgroundColor:"#000",
    duration:1,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:2,
        markers:true
    }
})
