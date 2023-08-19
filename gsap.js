var tl = gsap.timeline();

tl.from("#nav_img ,#nav_links, #nav_Btn",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:1,
})

tl.from("#main_text",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.5
})

tl.from("#left-image, #right-image",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.5
})

tl.from("h5",{
    y:100,
    opacity:0,
    repeat:-1,
    yoyo:true,
    duration:1
})