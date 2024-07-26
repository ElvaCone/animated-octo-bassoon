{
    const p = { x: 1, y: 2 }
    console.log(typeof p); // object typeof在非类型上下文中的表现和js中一样

    function fn(point: typeof p) { // typeof可以在类型上下文中引用变量的类型

    }
    fn(p)
    fn({ x: 4, y: 99 }) // x和y不能改成其它名称

    let a: typeof p.x = 3 // typeof可以在类型上下文中引用属性的类型
    let b: typeof a = 4 // typeof可以在类型上下文中引用变量的类型
}