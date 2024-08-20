const PromiseTest = () => {
    // 模拟从服务器获取用户数据
    function fetchUserData(userId) {
        return new Promise((resolve, reject) => {
            // 模拟网络延迟
            setTimeout(() => {
                // 模拟数据
                const users = {
                    1: { name: 'Alice', age: 30 },
                    2: { name: 'Bob', age: 25 },
                    3: { name: 'Charlie', age: 35 }
                };

                // 检查用户是否存在
                const user = users[userId];
                if (user) {
                    resolve(user); // 返回用户数据
                } else {
                    reject('User not found'); // 返回错误
                }
            }, 1000); // 1秒后返回结果
        });
    }

    // 获取用户数据并处理结果
    function getUser(userId) {
        fetchUserData(userId)
            .then(user => {
                console.log('User data:', user); // 处理成功的情况
            })
            .catch(error => {
                console.error('Error:', error); // 处理失败的情况
            });
    }

    // 调用函数，尝试获取用户ID为1的用户数据
    getUser(1);

    // 调用函数，尝试获取用户ID为4的用户数据（该用户不存在）
    getUser(4);
}

export default PromiseTest
