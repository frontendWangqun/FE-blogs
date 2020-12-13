/*
 * @Author: WangQunQun
 * @Date: 2020-12-13 12:06:45
 * @LastEditTime: 2020-12-13 15:01:01
 * @LastEditors: WangQunQun
 * @Description: 该文件的作用是：
 * @FilePath: /my-app/src/utils/EventEmitter.js
 */
class EventEmitter {
  constructor() {
    this.enentLoop = {}
  }
  on(name, callback) {
    this.enentLoop[name]
      ? this.enentLoop[name].push(callback)
      : (this.enentLoop[name] = [callback])
  }
  emit(name, ...args) {
    this.enentLoop[name] && this.enentLoop[name].forEach((cb) => cb(...args))
  }
  off(name, callback) {
    // this.enentLoop[name] && delete this.enentLoop[name]
    this.enentLoop[name] && this.enentLoop[name].filter((cb) => cb !== callback)
  }
  once(name, callback) {
    if (this.enentLoop[name]) {
      this.on(name, (...args) => {
        callback(...args)
        this.off(name)
      })
    }
  }
}
const event = new EventEmitter()
export { event }
