
import {getBranner,getBrand,getHotProduct,getNewsList} from './service'

export default {
   namespace:"home",
   state:{
    carouselList:[],
    brandList:[],
    hotProductList:[],
    newsList:[]
   },
   effects:{
      * getHomeData({payload},{ put, call,all  }){
        const [brannerRes, brandRes,HotRes,newRes]  = yield all( [
          call(getBranner),
          call(getBrand),
          call(getHotProduct),
          call(getNewsList)
        ])
        if(brannerRes&&brannerRes.Status===200){
          yield put({
            type: 'updateState',
            payload:{
              carouselList:brannerRes.Content?brannerRes.Content.MDM016501RedisList:[]
            }
          });   
        }
        if(brandRes&&brandRes.Status===200){
          yield put({
            type: 'updateState',
            payload:{
              brandList:brandRes.Content.loMDM003801ReturnList
            }
          });   
        }
        if(HotRes&&HotRes.Status===200){
          yield put({
            type: 'updateState',
            payload:{
              hotProductList:HotRes.Content.loMDM003601ReturnList
            }
          });   
        }
        if(newRes&&newRes.Status===200){
          yield put({
            type: 'updateState',
            payload:{
              newsList:newRes.Content.rows
            }
          });   
        }
     }
   },
   reducers:{
      updateState(state,{payload}){
        return{
          ...state,...payload
        }
      }
   }
}