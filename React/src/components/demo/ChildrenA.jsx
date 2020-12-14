/*
 * @Author: WangQunQun
 * @Date: 2020-12-13 10:47:30
 * @LastEditTime: 2020-12-13 12:59:41
 * @LastEditors: WangQunQun
 * @Description: 该文件的作用是：
 * @FilePath: /my-app/src/components/demo/childrenA.jsx
 */

import React, { PureComponent, useState, useEffect } from 'react'
import { event } from '../../utils/EventEmitter'

const ChildrenA = (props) => {
  const { text, setTextHandle } = props
  const [msg, setMsg] = useState('.....兄弟组件传值了')

  function sendText2(text) {
    return () => {
      setTextHandle(text)
    }
  }

  function eventEmit(msg) {
    return () => {
      event.emit('sendData', msg)
    }
  }

  const [spanText, setSpanText] = useState('未传值A')
  return (
    <div className="children-a">
      <span>{text}</span>
      <button onClick={sendText2('子组件向父组件传值了')}>子到父</button>
      <button onClick={eventEmit('~~~~~~兄弟第二次传递数据')}>兄弟组件</button>
    </div>
  )
}

export default ChildrenA
