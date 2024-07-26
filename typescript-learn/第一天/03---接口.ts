{
    interface IPerson {
        name: string
        age: number
        greet(name: string): void
    }

    const person: IPerson = {
        name: 'aaa',
        age: 18,
        greet(name) {
            console.log('Hello', name);
        }
    }
}

// 继承
{
    interface IPoint2D {
        x: number
        y: number
    }

    interface IPoint3D extends IPoint2D {
        z: number
    }

    const p3: IPoint3D = {
        x: 1,
        y: 2,
        z: 3
    }
}
