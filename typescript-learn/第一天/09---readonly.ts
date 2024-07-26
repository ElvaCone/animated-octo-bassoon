// class
{
    class Person {
        readonly age: number = 18 // 可以赋默认值 建议指定类型，否则赋了默认值就会变成字面量类型不赋默认值就会变成any类型

        constructor(age: number) {
            this.age = age // 可以在构造函数里赋值
        }

        setAge(age: number): void {
            this.age = age // 不能在 默认值、构造函数 之外赋值
        }

        readonly fn() { } // 只能修饰属性不能修饰方法
    }

    const person = new Person(20)
    person.age = 22 // 不能在 默认值、构造函数 之外赋值
}

// interface
{
    interface IPerson {
        readonly name: string
    }

    let person: IPerson = {
        name: 'Tom'
    }

    person.name = 'Jack' // 不能赋值
}

// {}
{
    let obj: { readonly name: string } = {
        name: 'Tom'
    }

    obj.name = 'Jack' // 不能赋值
}
