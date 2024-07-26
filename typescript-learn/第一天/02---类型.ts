// 简单类型
{
    let age: number = 18
    let myName: string = 'aaa'
    let isLoading: boolean = false
    let a: null = null
    let b: undefined = undefined
    let c: symbol = Symbol()
}

// 数组类型
{
    let ageArr: number[] = [1, 2, 3]
    let nameAr: string[] = ['aaa', 'bbb', 'ccc']
    let isLoadedArr: boolean[] = [false, true, true]
    let nullArr: null[] = [null, null, null]
    let undefinedArr: undefined[] = [undefined, undefined, undefined]

    // 不推荐这种写法
    let ageArr2: Array<number> = [1, 2, 3]
    let nameAr2: Array<string> = ['aaa', 'bbb', 'ccc']
    let isLoadedArr2: Array<boolean> = [false, true, true]
    let nullArr2: Array<null> = [null, null, null]
    let undefinedArr2: Array<undefined> = [undefined, undefined, undefined]
}

// 联合类型
{
    let arr: (number | string)[] = [1, 'a', 2, 3, 'b', 'h', 9]

    let arr1: number | string[] = 18
    let arr2: number | string[] = ['aaa', 'bbb', 'ccc']
}

// 类型别名
{
    type CustomArray = (number | string)[]
    let arr: CustomArray = [1, 'a', 2, 3, 'b', 'h', 9]
}

// 函数类型
{
    function getSum(num1: number, num2: number): number {
        return num1 + num2
    }

    const add = (num1: number, num2: number): number => num1 + num2

    const add2: (num1: number, num2: number) => number = (num1, num2) => num1 + num2

    function greet(name: string): void {
        console.log('Hello', name);

    }
    greet('Tom')
}

// 可选参数
{
    function mySlice(arrName: string, start?: number, end?: number): void { // 可选参数只能出现在参数列表的最后
        console.log('数组名：', arrName, '，起始索引：', start, '，结束索引：', end);
    }
    mySlice('aaa')
    mySlice('aaa', 1)
    mySlice('aaa', 1, 3)
}

// 可选属性
{
    function myAxios(config: { url: string; method?: string }) {
        console.log(config);
    }

    myAxios({
        url: 'xxxxxx'
    })
}

// 对象类型
{
    const person1: { name: string; age: number; greet(name: string): void } = { // 在同一行就用分号隔开
        name: 'aaa',
        age: 18,
        greet(name) { // 使用函数的简写写法时会自动推断参数类型所以参数不用再次加类型注解
            console.log('Hello', name);
        }
    }

    const person2: {
        name: string // 不在同一行就不用写分号
        age: number
        greet: (name: string) => void // 箭头写法时函数名后需要写冒号，简写写法时则不需要
    } = {
        name: 'aaa',
        age: 18,
        greet: (name: string) => console.log('Hello', name) // 使用函数的箭头写法时参数需要再次加类型注解
    }
}

// 字面量类型
{
    let age = 18
    let name = 'aaa'

    let age1: 18 = 18
    let name1: 'aaa' = 'aaa'

    const age2 = 18
    const name2 = 'aaa'

    function changeDirection(direction: 'up' | 'down' | 'left' | 'right') { // 字面量类型配合联合类型用来表示一组明确的可选值列表，相比枚举更推荐这种方式
        console.log(direction);
    }
    changeDirection('down')
}

// 枚举类型
{
    enum Direction {
        Up,
        Down,
        Left,
        Right
    }

    function changeDirection1(direction: Direction) {
        console.log(direction);
    }
    changeDirection1(Direction.Left)
}

// any类型
{
    let obj: any = { x: 10 }
    obj.y = 'aaa'
    obj()
    const n: number = obj
}
// 隐式具有any类型
{
    let a // 声明变量时不提供类型也不提供默认值
    a = 1
    a = 'aaa'
    a()
}
{
    function add(num1, num2) { } // 参数不提供类型
    add(1, 2)
    add(null, 'aaa')
    add(undefined, false)
}

// typeof
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
