{
    interface IPerson {
        name: string
    }
    interface IContact {
        phone: string
    }
    type PersonDetail = IPerson & IContact

    const personDetail: PersonDetail = {
        name: 'Tom',
        phone: '111'
    }
}

// 交叉类型和继承对于同名属性处理类型冲突的方式不同
{
    interface A {
        fn: (a: number) => string
    }
    interface B extends A { // 报错
        fn: (a: string) => string
    }
}
{
    interface A {
        fn: (a: number) => string
    }
    interface B {
        fn: (a: string) => string
    }
    type C = A & B

    let c: C = {
        fn(a: number | string) { // 联合类型
            return 'aaa'
        }
    }
    c.fn(111)
    c.fn('111')
}
{
    interface A {
        id: number
    }
    interface B {
        id: string
    }
    type C = A & B

    let c: C = {
        id: 111 // 报错
    }
    let c1: C = {
        id: '111' // 报错
    }
}
