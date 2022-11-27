import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">SSR</a>
          </div>
          <div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">首页</Link>
              </li>
              {this.props.user && (
                <Fragment>
                  <li>
                    <Link to="/logout">退出</Link>
                  </li>
                  <li>
                    <Link to="/profile">个人中心</Link>
                  </li>
                </Fragment>
              )}
              {!this.props.user && (
                <li>
                  <Link to="/login">登录</Link>
                </li>
              )}
            </ul>
            {this.props.user && (
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a className={styles.user}>{this.props.user.username}</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    )
  }
}
