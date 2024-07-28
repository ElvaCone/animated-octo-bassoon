import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FC } from 'react'

type Props = {
  name: string
  age?: number
}

const Hello1: FC<Props> = ({ name, age }) => (
  <div>Hello, I'm {name} and I'm {age} years old.</div>
)

const Hello = ({ name = 'John', age = 18 }: Props) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('点了按钮');
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }

  return (
    <div>
      Hello, I'm {name} and I'm {age} years old.
      <button onClick={onClick}>按钮</button>
      <input type="text" onChange={onChange} />
    </div>
  )
}

{
  type Props = { message?: string }
  type State = { count: number }

  class C1 extends React.Component { }
  class C2 extends React.Component<Props> { }
  class C3 extends React.Component<{}, State> { }
  class C4 extends React.Component<Props, State> { }
}

{
  type Props = {
    name: string
    age?: number
  }

  class Hello extends React.Component<Props> {
    // static defaultProps: Partial<Props> = {
    //   name: 'John',
    //   age: 18
    // }
    render(): React.ReactNode {
      const { name = 'John', age = 18 } = this.props
      return (
        <div>
          Hello, I'm {name} and I'm {age} years old.
        </div>
      )
    }
  }
}

{
  type State = {
    count: number
  }

  class Hello extends React.Component<{}, State> {
    state: State = {
      count: 0
    }
    handleClick = () => {
      this.setState({
        count: ++this.state.count
      })
    }
    render(): React.ReactNode {
      return (
        <div>
          计数器：{this.state.count}
          <button onClick={this.handleClick}>+1</button>
        </div>
      )
    }
  }
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello name="Tom" age={19} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
