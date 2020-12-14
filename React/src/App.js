/*
 * @Author: WangQunQun
 * @Date: 2020-12-13 10:41:44
 * @LastEditTime: 2020-12-13 21:54:32
 * @LastEditors: WangQunQun
 * @Description: 该文件的作用是：
 * @FilePath: /FE-blogs/React/src/App.js
 */
import React, { useEffect, useState, useContext, useReducer } from 'react'
import logo from './logo.svg'
import './App.css'
import ChildrenA from './components/demo/ChildrenA'
import ChildrenB from './components/demo/ChildrenB'

const handleText = () => {}
function App() {
  const [text, setText] = useState('props传值看看')
  const [text2, setText2] = useState('props传值看看2')
  useEffect(() => {
    console.log('didMounte')
    return () => {
      console.log('didUpdate')
    }
  }, [])
  function setTextHandle(msg) {
    setText2(msg)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setText('动态改变传值了')}>点击改变</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text2}
        </a>
        <aside className="app-aside" style={{ marginTop: 20 }}>
          <ChildrenA text={text} setTextHandle={setTextHandle} />
          <ChildrenB />
        </aside>
      </header>
    </div>
  )
}

export default App
