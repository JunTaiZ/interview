function promiseAll(args) {
    return new Promise((resolve, reject) => {
        const resolveResult = []
        let resolveCount = 0
        let interatorIdx = 0

        if (!args) throw new Error('argument must be iterable')

        for (let item of args) {
            // 块作用域内记录索引
            let curIdx = interatorIdx
            interatorIdx++

            console.log('interatorIdx', interatorIdx);
            
            Promise.resolve(item).then((res) => {
                resolveCount++
                resolveResult[curIdx] = res
                console.log('interatorIdx in resolve', interatorIdx, resolveResult);
                if (resolveCount === interatorIdx) {
                    console.log(resolveResult);
                    resolve(resolveResult)
                }
            }).catch(err => {
                resolve(err)
            })
        }

        if (interatorIdx === 0) return []
    })
}


promiseAll(['1', 2, '3'])
if (!Promise.all) Promise.all = promiseAll
