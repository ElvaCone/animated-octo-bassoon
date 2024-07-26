{
    class Person {
        age = 18
        name: string

        constructor(age: number, name: string) { // 构造函数不能指定返回值类型
            this.age = age
            this.name = name
        }

        addYears(years: number): void {
            this.age += years
        }
    }

    const person = new Person(22, 'Tom')
    person.addYears(5)
}

// extends
{
    class Animal {
        gender: string
        move(): void {
            this.protectedMethod()
            this.privateMethod()
            console.log("Animal is moving!")
        }

        protected protectedMethod(): void { // protected方法只能在类和子类中访问，实例、子类实例中无法访问
            this.privateMethod()
            console.log('This method is protected')
        }

        private privateMethod(): void { // private方法只能在类中访问，实例、子类、子类实例中无法访问
            console.log('This method is private')
        }
    }

    class Dog extends Animal { // 继承属性和方法
        name: string
        public bark(): void {
            this.protectedMethod()
            this.privateMethod() // 无法访问
            console.log("汪!")
        } // 默认就是public，可以不写
    }

    const animal = new Animal()
    animal.protectedMethod() // 无法访问
    animal.privateMethod() // 无法访问

    const dog = new Dog()
    dog.protectedMethod() // 无法访问
    dog.privateMethod() // 无法访问
}

// implements
{
    interface Animal {
        gender: string
        move(): void
    }

    class Dog implements Animal { // 实现属性和方法
        gender: string
        move(): void {
            console.log('Dog is moving!')
        }
        name: string
        bark(): void { console.log("汪!") }
    }

    const dog = new Dog()
}