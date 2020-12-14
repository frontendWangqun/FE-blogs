/*
 * @Author: WangQunQun
 * @Date: 2020-12-13 10:47:40
 * @LastEditTime: 2020-12-13 13:00:32
 * @LastEditors: WangQunQun
 * @Description: 该文件的作用是：
 * @FilePath: /my-app/src/components/demo/childrenB.jsx
 */
import React, { PureComponent, useState, useEffect } from 'react'
import { event } from '../../utils/EventEmitter'

const ChildrenB = (props) => {
  const [spanText, setSpanText] = useState('未传值B')
  const [atob, setAtob] = useState()

  useEffect(() => {
    event.on('sendData', setAtob)
    return () => {
      Event.off('dispatch', setAtob)
    }
  }, [])

  return (
    <div className="children-a">
      <span>{spanText}</span>
      <span>{atob}</span>
    </div>
  )
}

export default ChildrenB
