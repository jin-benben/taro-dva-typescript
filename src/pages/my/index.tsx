import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text,RichText, Button  } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {IndexProps} from './index.interface'
import './index.css'
@connect(({ app,loading}) =>{
  console.log(app)
   return {...app,loading}
} )
class Index extends Component<IndexProps> {
   
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '我的'
  }
 
  state={
    transcodeContent:'怎么回事呢，这里不会变化'
  }
  componentWillMount () {
    console.log(this.props)
   }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  add(){
    this.props.dispatch({
      type:'app/updateState'
    })
  }
  
  render () {
    return (
      <View className='index'>
        <RichText nodes={this.state.transcodeContent} ></RichText>
        <Text>{this.props.num}</Text>
        <Button onClick={()=>this.add()}><Text>add</Text></Button>
      </View>
    )
  }
}
export default Index
