// TypeScript 内置类型工具示例

// 1. Partial<T>
// 将 T 类型的所有属性变为可选项
{
    interface User {
        name: string;
        age: number;
        email: string;
    }

    const partialUser: Partial<User> = {
        name: "Alice", // 只需要部分属性
    };
}

// 2. Required<T>
// 将 T 类型的所有属性变为必填项
{
    interface OptionalUser {
        name?: string;
        age?: number;
        email?: string;
    }

    const requiredUser: Required<OptionalUser> = {
        name: "Bob",
        age: 30,
        email: "bob@example.com", // 所有属性都必须填写
    };
}

// 3. Readonly<T>
// 将 T 类型的所有属性变为只读属性
{
    interface User {
        name: string;
        age: number;
        email: string;
    }

    const readonlyUser: Readonly<User> = {
        name: "Charlie",
        age: 25,
        email: "charlie@example.com",
    };

    // readonlyUser.name = "Dave"; // 错误：name 是只读属性
}

// 4. Record<K, T>
// 将属性 K 映射到类型 T
{
    type Role = "admin" | "user" | "guest";

    const roles: Record<Role, string> = {
        admin: "Administrator",
        user: "Regular User",
        guest: "Guest User",
    };
}

// 5. Pick<T, K>
// 从 T 类型中选择一组属性 K
{
    interface User {
        name: string;
        age: number;
        email: string;
    }

    const pickedUser: Pick<User, "name" | "email"> = {
        name: "Eve",
        email: "eve@example.com", // 只包含 name 和 email
    };
}

// 6. Omit<T, K>
// 从 T 类型中排除一组属性 K
{
    interface User {
        name: string;
        age: number;
        email: string;
    }

    const omittedUser: Omit<User, "age"> = {
        name: "Frank",
        email: "frank@example.com", // age 被排除
    };
}

// 7. Exclude<T, U>
// 从 T 类型中排除 U 类型
{
    type AllTypes = string | number | boolean;
    type NonBooleanTypes = Exclude<AllTypes, boolean>; // string | number
}

// 8. Extract<T, U>
// 从 T 类型中提取 U 类型
{
    type AllTypes = string | number | boolean;
    type StringOrNumber = Extract<AllTypes, string | number>; // string | number
}

// 9. NonNullable<T>
// 从 T 类型中排除 null 和 undefined
{
    type NullableString = string | null | undefined;
    type NonNullableString = NonNullable<NullableString>; // string
}

// 10. ReturnType<T>
// 获取函数类型 T 的返回值类型
{
    interface User {
        name: string;
        age: number;
        email: string;
    }

    function getUser(): User {
        return { name: "George", age: 28, email: "george@example.com" };
    }

    type UserType = ReturnType<typeof getUser>; // User
}

// 11. InstanceType<T>
// 获取构造函数类型 T 的实例类型
{
    class Person {
        constructor(public name: string, public age: number) { }
    }

    type PersonInstance = InstanceType<typeof Person>; // Person
}

// 12. Parameters<T>
// 获取函数类型 T 的参数类型组成的元组
{
    function updateUser(name: string, age: number): void { }

    type UpdateUserParams = Parameters<typeof updateUser>; // [string, number]
}

// 13. ConstructorParameters<T>
// 获取构造函数类型 T 的参数类型组成的元组
{
    class Person {
        constructor(public name: string, public age: number) { }
    }

    type PersonParams = ConstructorParameters<typeof Person>; // [string, number]
}

// 14. ThisParameterType<T>
// 提取函数类型 T 的 `this` 参数类型
{
    interface User {
        name: string;
    }

    function sayHello(this: User, greeting: string) {
        console.log(`${greeting}, ${this.name}`);
    }

    type ThisType = ThisParameterType<typeof sayHello>; // User
}

// 15. OmitThisParameter<T>
// 创建一个新函数类型，移除 T 的 `this` 参数
{
    interface User {
        name: string;
    }

    function sayHi(this: User, greeting: string) {
        console.log(`${greeting}, ${this.name}`);
    }

    const sayHiWithoutThis: OmitThisParameter<typeof sayHi> = sayHi.bind({
        name: "Hank",
    });
    sayHiWithoutThis("Hi"); // Hi, Hank
}

// 16. Infer
// 使用 infer 关键字在条件类型中推断类型
{
    type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

    function exampleFunc() {
        return { name: "Ivy", age: 30 };
    }

    type ExampleReturnType = ReturnType<typeof exampleFunc>; // { name: string; age: number }
}

// 17. Awaited
// 提取 Promise 解析后的类型 (TypeScript 4.5 引入)
{
    type ExampleType = Awaited<Promise<string>>; // string
}

