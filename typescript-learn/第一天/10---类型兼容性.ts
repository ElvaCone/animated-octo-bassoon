// class
{
    class A {
        x: number
        y: number
    }

    class B {
        x: number
        y: number
    }

    class C {
        x: number
        y: number
        z: number
    }

    let a: A = new A()
    let b: B = new B()
    let c: C = new C()

    a = b // 成员相同可以相互赋值
    b = a // 成员相同可以相互赋值

    a = c // 成员多的可以赋值给成员少的
    c = a // 成员少的不可以赋值给成员多的
}

//  interface
{
    interface A {
        x: number
        y: number
    }

    interface B {
        x: number
        y: number
    }

    interface C {
        x: number
        y: number
        z: number
    }

    let a: A = { x: 1, y: 2 }
    let b: B = { x: 1, y: 2 }
    let c: C = { x: 1, y: 2, z: 3 }

    a = b // 成员相同可以相互赋值
    b = a // 成员相同可以相互赋值

    a = c // 成员多的可以赋值给成员少的
    c = a // 成员少的不可以赋值给成员多的



    //  interface和class

    class D {
        x: number
        y: number
    }

    class E {
        x: number
        y: number
        z: number
    }

    let d: D = new D()
    let e: E = new E()

    a = d // 成员相同可以相互赋值
    d = a // 成员相同可以相互赋值

    a = e // 成员多的可以赋值给成员少的
    e = a // 成员少的不可以赋值给成员多的
}

// 函数
{
    type F1 = (a: number) => void
    type F2 = (a: number) => void
    type F3 = (a: number, b: number) => void

    let a: F1 = (a: number) => { }
    let b: F2 = (a: number) => { }
    let c: F3 = (a: number, b: number) => { }

    a = b // 参数相同可以相互赋值
    b = a // 参数相同可以相互赋值

    c = a // 参数少的可以赋值给参数多的
    a = c // 参数多的不可以赋值给参数少的
}
{
    type F1 = (a: number) => void
    type F2 = (a: string) => void

    let a: F1 = (a: number) => { }
    let b: F2 = (a: string) => { }

    a = b // 当参数类型为简单类型时，对应位置的参数的类型要一样
    b = a // 当参数类型为简单类型时，对应位置的参数的类型要一样
}
{
    interface A {
        x: number
        y: number
    }

    interface B {
        x: number
        y: number
    }

    interface C {
        x: number
        y: number
        z: number
    }

    type F1 = (a: A) => void
    type F2 = (a: B) => void
    type F3 = (a: C) => void

    let a: F1 = (a: A) => { }
    let b: F2 = (a: B) => { }
    let c: F3 = (a: C) => { }

    a = b // 当参数类型为复杂类型时，成员相同可以相互赋值
    b = a // 当参数类型为复杂类型时，成员相同可以相互赋值

    a = c // 当参数类型为复杂类型时，成员多的不可以赋值给成员少的
    c = a // 当参数类型为复杂类型时，成员少的可以赋值给成员多的
}
{
    type F1 = (a: number) => number
    type F2 = (a: number) => string

    let a: F1 = (a: number) => { return 1 }
    let b: F2 = (a: number) => { return '1' }

    a = b // 当返回值类型为简单类型时，类型要一样
    b = a // 当返回值类型为简单类型时，类型要一样
}
{
    interface A {
        x: number
        y: number
    }

    interface B {
        x: number
        y: number
    }

    interface C {
        x: number
        y: number
        z: number
    }

    type F1 = (a: number) => A
    type F2 = (a: number) => B
    type F3 = (a: number) => C

    let a: F1 = (a: number) => { return { x: 1, y: 2 } }
    let b: F2 = (a: number) => { return { x: 1, y: 2 } }
    let c: F3 = (a: number) => { return { x: 1, y: 2, z: 3 } }

    a = b // 当返回值类型为复杂类型时，成员相同可以相互赋值
    b = a // 当返回值类型为复杂类型时，成员相同可以相互赋值

    a = c // 当返回值类型为复杂类型时，成员多的可以赋值给成员少的
    c = a // 当返回值类型为复杂类型时，成员少的不可以赋值给成员多的
}
