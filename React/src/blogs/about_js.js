/*
 * @Author: WangQunQun
 * @Date: 2020-12-13 20:46:59
 * @LastEditTime: 2020-12-13 21:41:47
 * @LastEditors: WangQunQun
 * @Description: 该文件的作用是：常规js基础
 * @FilePath: /FE-blogs/src/blogs/about_js.js
 */

//
var name = 'x'
var people = {
  name: 'y',
  setName: (name) => {
    this.name = name
    return () => {
      return this.name
    }
  },
}

var getName = people.setName(name)
console.log(people.name)
console.log(getName())

//
// console.log('start')
// setTimeout(() => {
//   console.log('timer1')
//   Promise.resolve().then(function () {
//     console.log('promise1')
//   })
// }, 0)
// setTimeout(() => {
//   console.log('timer2')
//   Promise.resolve().then(function () {
//     console.log('promise2')
//   })
// }, 0)
// Promise.resolve().then(function () {
//   console.log('promise3')
// })
// console.log('end')

/**
 * 数组去重
 * @param {}} arr
 */
function arr1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        j--
      }
    }
  }
  return arr
}

function arr2(arr) {
  let res = []
  for (let v of arr) {
    if (!res.includes(v)) {
      res.push(v)
    }
  }
  return res
}

function arr3(arr) {
  let map = new Map()
  let res = []
  for (let v of arr) {
    if (!map.has(v)) {
      map.set(v, true)
      res.push(v)
    }
  }
  return res.sort((a, b) => a - b)
}

console.log(arr1([1, 1, 2, 3, 4, 5, 6, 6, 6, 7, 8, 8, 8, 9, 10, 0, 0, 0, 9, 9]))
console.log(arr2([1, 1, 2, 3, 4, 5, 6, 6, 6, 7, 8, 8, 8, 9, 10, 0, 0, 0, 9, 9]))
console.log(
  arr3([9, 1, 1, 2, 3, 4, 5, 6, 6, 6, 7, 8, 8, 8, 9, 10, 0, 0, 0, 9, 9])
)

/**
 * 深拷贝
 * @param {*} obj
 */
function deepCopy(obj) {
  let o
  if (typeof obj !== 'object') return obj
  if (Array.isArray(obj)) {
    o = new Array(obj.length)
    obj.forEach((item, index) => (o[index] = deepCopy(item)))
  } else if (!Array.isArray(obj)) {
    o = {}
    Object.keys(obj).forEach((item, index) => (o[item] = deepCopy(obj[item])))
  }
  return o
}

const a = {
  a: [
    1,
    [4],
    {
      a: {
        c: [4],
      },
    },
  ],
}

const b = deepCopy(a)

a.c = 'c'
console.log(a)
console.log(b)
console.log(a.c)
console.log(b.c)

/**
 * 获取数据类型
 * @param {*} obj
 */
function getType(obj) {
  if (obj === null) return obj
  return Object.prototype.toString.call(obj).slice(8, -1)
}
console.log(getType(() => {}))

// 防抖 --- 在频繁的操作中，在两次操作的时间间隔超过指定时间段内才会执行
function debounde(fn, timeout) {
  let timer = null
  return function () {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, timeout || 1000)
  }
}

window.addEventListener(
  'click',
  debounde(function () {
    console.log('防抖函数')
  }, 3000)
)

// 节流函数   在一定时间段内执行一次
function throttle(fn, timeout) {
  let isRun = true
  return function () {
    if (!isRun) return false
    const ctx = this
    isRun = false
    setTimeout(() => {
      fn.call(ctx, arguments)
      isRun = true
    }, timeout || 1000)
  }
}

// setInterval(throttle(function () { console.log('hello hey') }, 2000))

//手动实现bind
function myBind(ctx, ...args) {
  return (...innerArgs) => this.call(ctx, ...args, ...innerArgs)
}

//两数之和
function twoSum(arr, num) {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i + 1, len = arr.length; j < len; j++) {
      if (arr[i] + arr[j] === num) {
        return [arr[i], arr[j]]
      }
    }
  }
}

console.log(twoSum([2, 3, 5, 6, 7, 8], 10))

/**
 * 字符串反转
 * @param {*} str
 */
function strReverse(str) {
  if (str.length === 1) return str
  return strReverse.call(this, str.slice(1)) + str[0]
}

console.log(strReverse('123456789'))

// 拍平数组
function arrFla(arr) {
  if (arr.length === 0) return []
  const first = arr[0]
  if (Array.isArray(first)) {
    arr[0] = arrFla(arr[0])
  } else {
    arr[0] = [arr[0]]
  }
  const slice = arrFla(arr.slice(1))
  return [...arr[0], ...slice]
}

// console.log(Number.MAX_VALUE)
console.log(arrFla([1, 2, [3, [4, 5, [6, [7, 8]]]]]))

/**
 * 两数之和  前提：不用四则运算
 * @param {*} a
 * @param {*} b
 */
function toSun(a, b) {
  if (a === 0) return b
  if (b === 0) return a
  let res = a ^ b
  return twoSum(res, (a & b) << 1)
}
let aa = twoSum('' + Math.pow(2, 20), '' + Math.pow(2, 20))

console.log(aa === Math.pow(2, 21))

/**
 * Promise.all 手动实现 返回新的promise对象， 静态对象
 * @param {*} promiseArr
 */
Promise.all = (promiseArr) => {
  return new Promise((reslove, reject) => {
    let len = promiseArr.length
    let results = []
    promiseArr.forEach((item, index) => {
      item.then((re) => {
        if (len === 1) {
          reslove(re)
        } else {
          results[index] = re
        }
        len--
      }, reject)
    })
  })
}

/**
 * 手动bind
 * @param {*} ctx
 * @param  {...any} args
 */
function myBinds(ctx, ...args) {
  return (...innerArgs) => this.call(ctx, ...args, ...innerArgs)
}

//get all dom tagname
function getAllTagName() {
  const tags = [...window.document.querySelectorAll('*')].map((item) => {
    return item.tagName
  })
  return Array.from(new Set(tags))
  // return [...new Set(tags)]
}
console.log(getAllTagName())

/**
 * 防抖函数
 * @param {*} fn
 * @param {*} timeout
 */
function debounce(fn, timeout) {
  let timer = null
  return function () {
    if (timer !== null) clearTimeout(timer)
    timer = setTimeout(fn, timeout || 1000)
  }
}

/**
 * 节流
 * @param {*} fn
 * @param {*} timeout
 */
function throttlee(fn, timeout) {
  let isRun = true
  return function () {
    if (!isRun) return false
    isRun = false
    setTimeout(() => {
      fn.call(this, arguments)
      isRun = true
    }, timeout || 1000)
  }
}

/**
 * 手动实现大于请求次数就提示超时，不然一直请求直到最大次数
 * @param {*} url
 * @param {*} body
 * @param {*} success
 * @param {*} error
 * @param {*} maxCount
 */
function request(url, body, success, error, maxCount = 5) {
  return fetch(url, body)
    .then((res) => {
      return success(res)
    })
    .catch((err) => {
      if (maxCount <= 0) return error('请求超时')
      return request(url, body, success, error, --maxCount)
    })
}

/**
 * 作用域   闭包
 */
let aaa = 100
function fn() {
  let b = 60
  function bar() {
    console.log(aaa + b) // a是自由变量
  }
  return bar
}

let x = fn(),
  b = 200
x()

let bb = 10
function foo() {
  let a = 20
  console.log(bb)
}
foo()

let a1 = 20
function f1() {
  let a1 = 10
  return () => console.log(a1)
}
const foo1 = f1()
foo1()

/**
 * 手动实现发布-订阅-观察者模式
 */
class EventEmitter {
  constructor() {
    this.eventLoop = {}
  }
  on(name, callback) {
    this.eventLoop[name]
      ? this.eventLoop[name].push(callback)
      : (this.eventLoop[name] = [callback])
  }
  emit(name, ...args) {
    this.eventLoop[name] && this.eventLoop[name].forEach((cb) => cb(...args))
  }
  off(name, callback) {
    // this.eventLoop[name] && delete this.eventLoop[name]
    this.eventLoop[name] &&
      this.eventLoop[name].filter((item) => item !== callback)
  }
  once(name, callback) {
    if (this.eventLoop[name]) {
      this.on(name, (...args) => {
        callback(...args)
        this.off(name)
      })
    }
  }
}
