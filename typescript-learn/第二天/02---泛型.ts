// 函数
{
    function fn<Type>(a: Type): Type { return a }

    fn<number>(111)
    fn<string>('111')
    fn<boolean>(false)

    // 可以不写尖括号，但是当编译器无法推断类型或推断的类型不准确时就需要写尖括号
    // 如果不写尖括号则推断的类型为字面量类型
    fn(111)
    fn('111')
    fn(false)
}

// 泛型约束
{
    function fn1<Type>(a: Type[]): Type[] {
        console.log(a.length);
        return a
    }

    fn1([1, 2, 3])
    fn1(['a', 'b', 'c'])
}
{
    interface ILength {
        length: number
    }
    function fn2<Type extends ILength>(a: Type): Type {
        console.log(a.length);
        return a
    }

    // 有length属性就行
    fn2([1, 2, 3])
    fn2('aaa')
    fn2({ length: 99, name: 'Tom' })
    // 没有length属性就报错
    fn2(111)
}

// keyof
{
    function getProp<Type, Key extends keyof Type>(a: Type, b: Key) { // keyof接收一个类型变量，生成其键名称（可能是字符串或数字）的联合类型
        console.log(a[b]);
    }

    const person = {
        name: 'Tom',
        age: 18
    }

    getProp(person, 'name')
    getProp(person, 'age')
    getProp(18, "toFixed")
    getProp('aaa', 'split')
    getProp('aaa', 1) // 索引号
    getProp([1, 2, 3], 1) // 索引号
}

// interface
{
    interface IdFunc<Type> {
        id: (value: Type) => Type
        ids: () => Type[]
    }
    const obj: IdFunc<number> = { // 不写尖括号就会报错
        id(value) {
            return value
        },
        ids() {
            return [1, 2, 3]
        }
    }
}

// class 无构造函数
{
    class GenericNum<NumType>  {
        value: NumType
        add: (x: NumType, y: NumType) => NumType
    }

    const num = new GenericNum<number>()
    num.value = 111
    num.add(1, 2)
}

// class 有构造函数
{
    class GenericNum<NumType>  {
        value: NumType
        add: (x: NumType, y: NumType) => NumType

        constructor(value: NumType) {
            this.value = value
        }
    }

    const num = new GenericNum(10) // 可以不写尖括号
    num.value = 111
    num.add(1, 2)
}

// 内置映射类型Partial
{
    interface IProps {
        age: number
        name: string
    }

    type PartialProps = Partial<IProps> // Partial<Type>构造出来的新类型的结构和旧类型相同，但所有属性变为可选的

    const p: PartialProps = {} // 因为所有属性都为可选的所以可以都不设置
}

// 内置映射类型Readonly
{
    interface IProps {
        age: number
        name: string
    }

    type ReadonlyProps = Readonly<IProps> // Readonly<Type>构造出来的新类型的结构和旧类型相同，但所有属性变为只读的

    const p: ReadonlyProps = {
        age: 18,
        name: 'aaa'
    }

    // 因为所有属性都为只读的所以都不能赋值
    p.age = 19
    p.name = 'bbb'
}

// 内置映射类型Pick
{
    interface IProps {
        age: number
        name: string
        food: string[]
    }

    type PickProps = Pick<IProps, 'age' | 'food'> // Pick<Type, Keys>从旧类型中选择一组属性来构造新类型

    const p: PickProps = {
        age: 18,
        food: ['aaa', 'bbb']
    }
}

// 内置映射类型Record
{
    type RecordProps = Record<'a' | 'b' | 'c', string[]> // Record<Keys, Type>构造一个新类型，键为Keys，键类型为Type

    const p: RecordProps = {
        a: ['1', '2'],
        b: ['aaa'],
        c: ['xx', 'yy', 'zz']
    }
}

// 索引签名类型 非数组
{
    interface AnyObject {
        [key: string]: number // key可以换成任何合法的变量名
    }

    const p: AnyObject = {
        a: 18,
        abc: 19,
        abcde: 20
    }
}

// 索引签名类型 数组
{
    interface MyArray<Type> {
        [index: number]: Type // index可以换成任何合法的变量名
    }

    const arr: MyArray<string> = ['aa', 'b', 'ccc']
    console.log(arr[0]);
}

// 基本映射类型
{
    type PropKeys = 'x' | 'y' | 'z'
    type Type1 = { x: number; y: number; z: number }
    type Type2 = { [Key in PropKeys]: number } // Key可以换成任何合法的变量名

    const p: Type2 = {
        x: 18,
        y: 19,
        z: 20
    }
}
{
    type PropKeys = { x: number; y: string; z: boolean }
    type Type3 = { [Key in keyof PropKeys]: number } // Key可以换成任何合法的变量名

    const p: Type3 = {
        x: 18,
        y: 19,
        z: 20
    }
}

// 索引查询
{
    type PropKeys = { x: number; y: string; z: boolean }
    type Type1 = PropKeys['x']
    type Type2 = PropKeys['x' | 'y']
    type Type3 = PropKeys[keyof PropKeys]
}
