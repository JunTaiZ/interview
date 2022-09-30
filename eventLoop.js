console.log('begin')

const promise1 = new Promise((resolve, reject) => {
  resolve('success')
})

async function getAsync() {
  const result = await promise1
  console.log('await', result)
}

setTimeout(() => {
  console.log('timeout')
}, 0)

getAsync()
promise1.then((res) => console.log('then', res))
