import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text,Swiper, SwiperItem,Image  } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {IndexProps} from './index.interface'
import {AtGrid} from 'taro-ui'
import './index.less'
const SystemInfo = Taro.getSystemInfoSync()

@connect(({ home,loading}) =>{
   return {...home,loading}
} )
class Home extends Component<IndexProps> {
  config: Config = {
    navigationBarTitleText: '首页'
  }
  state={
    transcodeContent:'怎么回事呢，这里不会变化'
  }
  componentWillMount(){
    console.log(this.props)
  }
  componentDidMount () { 
    this.props.dispatch({
      type:'home/getHomeData'
    })
  }

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
        <Swiper
          style={{height:`${380/SystemInfo.pixelRatio}px`}}
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
           {
             this.props.carouselList?this.props.carouselList.map((item)=>{
                return (
                  <SwiperItem key={item.Path1}>
                    <Image src={item.Path1} mode="widthFix" style={{width:`${SystemInfo.windowWidth}px`}}  />
                  </SwiperItem>
                )
             })
             :''
           }
        </Swiper>
        <AtGrid data={
          [
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '领取中心'
            },
            {
              image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
              value: '找折扣'
            },
            {
              image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
              value: '领会员'
            },
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
              value: '新品首发'
            },
            {
              image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
              value: '领京豆'
            },
            {
              image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
              value: '手机馆'
            }
          ]
        } />
      </View>
    )
  }
}
export default Home
