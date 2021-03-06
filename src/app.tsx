import Taro, { Component, Config } from '@tarojs/taro'
import '@tarojs/async-await'
import 'taro-ui/dist/style/index.scss'
import dva from './utils/dva'
import { Provider } from "@tarojs/redux"
import appModel from './model/index'
import Home from './pages/home'
import './app.css'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const dvaApp = dva.createApp({
  initialState: {},
  models:appModel,
});

const store = dvaApp.getStore();

class App extends Component {
  config: Config = {
    pages: [
      'pages/home/index',
      'pages/category/index',
      'pages/shopcar/index',
      'pages/my/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      "color": "#333",
      "selectedColor": "#ea5504",
      list: [
        {
          pagePath: 'pages/home/index',
          iconPath: "./assets/imgs/icon/index.png",
          selectedIconPath: "./assets/imgs/icon/index-active.png",
          text: "首页"
        },
        {
          pagePath: "pages/category/index",
          iconPath: "./assets/imgs/icon/category.png",
          selectedIconPath: "./assets/imgs/icon/category-active.png",
          text: "分类"
        },
        {
          pagePath: 'pages/shopcar/index',
          iconPath: "./assets/imgs/icon/cart.png",
          selectedIconPath: "./assets/imgs/icon/cart-active.png",
          text: "购物车"
        },
        {
          pagePath: 'pages/my/index',
          iconPath: "./assets/imgs/icon/my.png",
          selectedIconPath: "./assets/imgs/icon/my-active.png",
          text: "我的"
        }
      ]
    },
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
   
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}


Taro.render(<App />, document.getElementById('app'))
