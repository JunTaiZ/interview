const promise1 = Promise.resolve('1')
const promise2 = Promise.resolve('2')
const promiseRej1 = Promise.reject('rej1')
const promiseRej2 = Promise.reject('rej2')

Promise.all([promise2, promise1, promiseRej1, promiseRej2])
	.then((res) => {
		console.log('all', res)
	})
	.catch((err) => {
		console.log('catch', err)
	})
Promise.all([promise2, promise1])
	.then((res) => {
		console.log('all', res)
	})
	.catch((err) => {
		console.log('catch', err)
	})
Promise.any([promise2, promise1, promiseRej1, promiseRej2])
	.then((res) => {
		console.log('any', res)
	})
	.catch((err) => {
		console.log('any catch', err)
	})

Promise.resolve(promise2).then(res => {
	console.log('resole promise', res)
})
promiseRej1.catch((err) => { })
promiseRej2.catch((err) => { })
