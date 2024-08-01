import './App.scss'
import avatar from './images/bozai.png'
import { useState, useEffect, useRef } from 'react'
import _ from 'lodash'
import classNames from 'classnames'
// import moment from 'moment'// 已经不再积极维护，大，性能差
import { DateTime } from 'luxon' // moment的后继者，新，现代化
import { nanoid } from 'nanoid'
import axios from 'axios'

/**
 * 评论列表的渲染和操作
 *
 * 1. 根据状态渲染评论列表
 * 2. 删除评论
 */

// 评论列表数据
const defaultList = [
  {
    // 评论id
    rpid: 3,
    // 用户信息
    user: {
      uid: '13258165',
      avatar: '',
      uname: '周杰伦',
    },
    // 评论内容
    content: '哎哟，不错哦',
    // 评论时间
    ctime: '10-18 08:15',
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: '',
      uname: '许嵩',
    },
    content: '我寻你千百度 日出到迟暮',
    ctime: '11-13 11:29',
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar,
      uname: '黑马前端',
    },
    content: '学前端就来黑马',
    ctime: '10-19 09:00',
    like: 66,
  },
]
// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}

/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]

// 获取评论列表
function useGetList() {
  const [commentList, setCommentList] = useState([])
  useEffect(() => {
    async function getList() {
      const res = await axios.get('http://localhost:3004/list')
      setCommentList(_.orderBy(res.data, 'hot', 'desc'))
    }
    getList()
  }, [])

  return { commentList, setCommentList }
}

// 评论组件
function CommentItem({ item, onDel }) {
  return (
    <div className="reply-item">
      {/* 头像 */}
      <div className="root-reply-avatar">
        <div className="bili-avatar">
          <img
            className="bili-avatar-img"
            alt=""
            src={item.user.avatar}
          />
        </div>
      </div>

      <div className="content-wrap">
        {/* 用户名 */}
        <div className="user-info">
          <div className="user-name">{item.user.uname}</div>
        </div>
        {/* 评论内容 */}
        <div className="root-reply">
          <span className="reply-content">{item.content}</span>
          <div className="reply-info">
            {/* 评论时间 */}
            <span className="reply-time">{item.ctime}</span>
            {/* 评论数量 */}
            <span className="reply-time">点赞数:{item.like}</span>
            {user.uid === item.user.uid && (<span className="delete-btn" onClick={() => onDel(item.rpid)}>删除</span>)}

          </div>
        </div>
      </div>
    </div>
  )
}


const App = () => {
  // 评论列表的状态变量
  // const [commentList, setCommentList] = useState(_.orderBy(defaultList, 'hot', 'desc'))
  const { commentList, setCommentList } = useGetList()
  // 选中Tab的状态变量
  const [type, setType] = useState('hot')
  // 受控表单绑定
  const [content, setContent] = useState('')
  // 获取输入框DOM
  const inputRef = useRef(null)
  // 点击Tab时改变评论的排序
  const changeCommentOrder = (type) => {
    setType(type)
    if (type === 'hot') {
      setCommentList(_.orderBy(commentList, 'like', 'desc')) // lodash排序数组
    } else if (type === 'time') {
      setCommentList(_.orderBy(commentList, 'ctime', 'desc'))
    }
  }
  // 删除评论
  const deleteComment = (rpid) => {
    setCommentList(commentList.filter(item => rpid !== item.rpid))
  }
  // 点击发布按钮发布评论
  const handlePublish = () => {
    // 评论列表里添加一条
    setCommentList([
      ...commentList,
      {
        rpid: nanoid(),
        user: {
          uid: user.uid,
          avatar: user.avatar,
          uname: user.uname,
        },
        content: content,
        ctime: DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss'),
        like: 66,
      },
    ])
    // 清空输入框
    setContent('')
    // 聚焦输入框
    inputRef.current.focus()
  }



  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {/* 动态添加类名需要使用模板字符串 */}
            {/* {tabs.map(item => (<span className={`nav-item ${item.type === type && 'active'}`} onClick={() => changeCommentOrder(item.type)} key={item.type}>{item.text}</span>))} */}
            {tabs.map(item => (<span className={classNames('nav-item', { active: item.type === type })} onClick={() => changeCommentOrder(item.type)} key={item.type}>{item.text}</span>))}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              value={content}
              ref={inputRef}
              onChange={(e) => setContent(e.target.value)}
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={handlePublish}>发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {commentList.map(item => (
            <CommentItem key={item.rpid} item={item} onDel={deleteComment} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
