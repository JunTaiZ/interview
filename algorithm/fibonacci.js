function fibonacci1(n) {
    if (n === 1 || n === 2) return 1
    return fibonacci1(n - 1) + fibonacci1(n - 2)
}

/** 动态规划方法实现斐波那契数列 */
function fibonacci2(n) {
    if (n <= 0) {
        throw new Error('请输入大于0的整数')
    }

    const arr = [0, 1, 1]
    
    if (n >= 3) {
        for (let i = 3; i <= n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2]
        }
    }

    return arr[n]

}

/** 动态规划方法实现斐波那契数列，空间优化 */
function fibonacci3(n) {
    if (n <= 0) {
        throw new Error('请输入大于0的整数')
    }

    let pre = 1
    let cur = 1
    let after
    if (n === 1 || n === 2) {
        return 1
    }
    if (n >= 3) {
        for (let i = 3; i <= n; i++) {
            after = pre + cur
            pre = cur
            cur = after
        }
    }

    return cur

}

Array.from({length: 20}).forEach((_, idx) => {
    console.log(fibonacci3(idx + 1));
})