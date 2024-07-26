// 数字枚举
{
    // 不设置默认值就从0开始增长
    enum Direction {
        Up, // 0
        Down, // 1
        Left, // 2
        Right // 3
    }

    function changeDirection(direction: Direction) {
        console.log(direction);
    }
}
{
    // 设置默认值就从默认值开始增长
    enum Direction {
        Up = 3, // 3
        Down, // 4
        Left = 8, // 8
        Right // 9
    }
}

// 字符串枚举
{
    // 必须全部都设置默认值
    enum Direction {
        Up = 'UP',
        Down = 'DOWN',
        Left = 'LEFT',
        Right = 'RIGHT'
    }
}