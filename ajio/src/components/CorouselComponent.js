import React, { useState, useEffect } from 'react';
import Controls from '../commons/Controls'; 
import ReusableSwiperComponent from './ReusableSwiperComponent';
import ReusableImageComponent from './ReusableImageComponent';
import {useDispatch ,useSelector} from 'react-redux'
import {loadContentInitiate} from '../redux/actions/loadContentAction'

const CorouselComponent = () => {
    const [data,setData] = useState([])
    const dispatch = useDispatch()
    const [datas ,setDatas] = useState({
        dataOne:[],
        dataTwo:[],
        dataThree:[],
        dataFour:[],
        dataFive:[],
        dataSix:[],
        dataSeven:[],
        dataEight:[],
        dataNine:[],
        dataTen:[],
        dataEleven:[],
        dataTwelve:[],
        dataThirteen:[],
        dataFourteen:[],
        dataFifteen:[],
        dataSixteen:[],
        dataSeventeen:[],
        dataEighteen:[],
        dataNintenn:[],
        dataTwenty:[],
        datatwentyOne:[],
        dataTwentyTwo:[],
        dataTwentyThree:[],
        dataTwentyFour:[],
        dataTwentyFive:[],
        dataTwentySix:[],
        dataTwentySeven:[],
        dataTwentyEight:[],
        dataTwentyNine:[],
        dataThirty:[],
        dataThirtyOne:[],
        dataThirtyTwo:[],



    })
    const content = useSelector((state)=>state.loadcontent.data || {})
    console.log("content",content)

useEffect(() => {
    const fetchContent = async () => {
      try {
        dispatch(loadContentInitiate())
        
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };
    
    fetchContent();
  }, []); 

  useEffect(()=>{
    if(content && content.data){
   const contentData = content?.data
   setData(contentData || []);
        
   setDatas(prevState => ({
     ...prevState, 
     dataOne: contentData[0],
     dataTwo: contentData[1],
     dataThree: contentData[2],
     dataFour: contentData[3],
     dataFive: contentData[4],
     dataSix: contentData[5],
     dataSeven: contentData[6],
     dataEight: contentData[13],
     dataNine: contentData[14],
     dataTen: contentData[7],
     dataEleven: contentData[8],
     dataTwelve: contentData[9],
     dataThirteen: contentData[10],
     dataFourteen: contentData[11],
     dataFifteen: contentData[12],
     dataSixteen:contentData[15],
     dataSeventeen:contentData[16],
     dataEighteen:contentData[17],
     dataNintenn:contentData[18],
     dataTwenty:contentData[19],
     datatwentyOne:contentData[20],
     dataTwentyTwo:contentData[21],
     dataTwentyThree:contentData[22],
     dataTwentyFour:contentData[23],
     dataTwentyFive:contentData[24],
     dataTwentySix:contentData[25],
     dataTwentySeven:contentData[26],
     dataTwentyEight:contentData[27],
     dataTwentyNine:contentData[28],
     dataThirty:contentData[29],
     dataThirtyOne:contentData[30],
     dataThirtyTwo:contentData[31]
   }));

   console.log("datas", datas); 
   console.log("datas.dataEleven", datas?.dataEleven); 
  }

  },[content])
  

  return (
    <Controls.Grid container justifyContent="center" >
      <Controls.Grid item xs={12} mt={{xs:10.5,sm:9,md:9.5,lg:8,xl:12}}>
        {data && (
            <>
          <ReusableSwiperComponent data={datas.dataOne} value1={1} value2={1} value3={1} value4={1} value5={1}  leftValue={"none"} rightValue={"none"} autoplayEnabled={true}  autoplayValues={{ delay: 800, disableOnInteraction: false }} paginationEnabled={true}/>
          <ReusableSwiperComponent data={datas.dataTwo}  value1={1} value2={1} value3={1} value4={1} value5={1} leftValue={"none"} rightValue={"none"} autoplayEnabled={true}  autoplayValues={{ delay: 800, disableOnInteraction: false }} paginationEnabled={true}/>
           <ReusableImageComponent data={datas.dataThree} /> 
          <ReusableImageComponent data={datas.dataFour} />
          <ReusableSwiperComponent data={datas.dataFive} value1={1} value2={1} value3={1} value4={1} value5={1} leftValue={"none"} rightValue={"none"} autoplayEnabled={true}  autoplayValues={{ delay: 800, disableOnInteraction: false }} paginationEnabled={true}/>
          <ReusableImageComponent data={datas.dataSix} />
          <ReusableSwiperComponent data={datas.dataSeven} value1={1} value2={1} value3={1} value4={1} value5={1} leftValue={"none"} rightValue={"none"} autoplayEnabled={true}  autoplayValues={{ delay: 800, disableOnInteraction: false }} paginationEnabled={true}/>
          <ReusableImageComponent    data={datas.dataTen} />
          <ReusableImageComponent data={datas.dataEleven} />

          <ReusableSwiperComponent data={datas.dataEight} value1={1} value2={1} value3={1} value4={1} value5={1} leftValue={"none"} rightValue={"none"} autoplayEnabled={true}  autoplayValues={{ delay: 800, disableOnInteraction: false }}  paginationEnabled={true}/>
          <ReusableSwiperComponent data={datas.dataNine} value1={1} value2={1} value3={1} value4={1} value5={1} leftValue={"none"} rightValue={"none"} autoplayEnabled={true}  autoplayValues={{ delay: 800, disableOnInteraction: false }} paginationEnabled={true}/>
          <ReusableImageComponent data={datas.dataFourteen} />
          <ReusableSwiperComponent data={datas.dataFifteen} value1={4} value2={3} value3={3} value4={2} value5={1} leftValue={"flex"} rightValue={"flex"} bgColor={'rgba(255, 255, 255, 0.7)'} autoplayEnabled={false}  autoplayValues={{ delay: 800, disableOnInteraction: true }}  paginationEnabled={false}/>
          <ReusableImageComponent data={datas.dataSixteen} />
          <ReusableSwiperComponent data={datas.dataSeventeen} value1={4} value2={3} value3={3} value4={2} value5={1} leftValue={"flex"} rightValue={"flex"} bgColor={'rgba(255, 255, 255, 0.7)'} autoplayEnabled={false}  autoplayValues={{ delay: 800, disableOnInteraction: true }} paginationEnabled={false}/>
          <ReusableImageComponent data={datas.dataEighteen} />
          <ReusableSwiperComponent data={datas.dataNintenn} value1={1} value2={1} value3={1} value4={1} value5={1} leftValue={"none"} rightValue={"none"} autoplayEnabled={true}  autoplayValues={{ delay: 800, disableOnInteraction: false }} paginationEnabled={true}/>
          <ReusableImageComponent data={datas.dataTwenty} />
          <ReusableSwiperComponent data={datas.datatwentyOne} value1={1} value2={1} value3={1} value4={1} value5={1} leftValue={"none"} rightValue={"none"} autoplayEnabled={true}  autoplayValues={{ delay: 800, disableOnInteraction: false }} paginationEnabled={true}/>
          <ReusableImageComponent data={datas.dataTwentyTwo} />
          <ReusableSwiperComponent data={datas.dataTwentyThree} value1={4} value2={3} value3={3} value4={2} value5={1} leftValue={"flex"} rightValue={"flex"} bgColor={'rgba(255, 255, 255, 0.7)'} autoplayEnabled={false}  autoplayValues={{ delay: 800, disableOnInteraction: true }} paginationEnabled={false}/>
          <ReusableImageComponent data={datas.dataTwentyFour} />
          <ReusableSwiperComponent data={datas.dataTwentyFive} value1={4} value2={3} value3={3} value4={2} value5={1} leftValue={"flex"} rightValue={"flex"} bgColor={'rgba(255, 255, 255, 0.7)'}autoplayEnabled={false}  autoplayValues={{ delay: 800, disableOnInteraction: true }} paginationEnabled={false}/>
          <ReusableImageComponent data={datas.dataTwentySix} />
          <ReusableSwiperComponent data={datas.dataTwentySeven} value1={4} value2={3} value3={3} value4={2} value5={1} leftValue={"flex"} rightValue={"flex"} bgColor={'rgba(255, 255, 255, 0.7)'}autoplayEnabled={false}  autoplayValues={{ delay: 800, disableOnInteraction: true }} paginationEnabled={false}/>
          <ReusableImageComponent data={datas.dataTwentyEight} />
          <ReusableSwiperComponent data={datas.dataTwentyNine} value1={4} value2={3} value3={3} value4={2} value5={1} leftValue={"flex"} rightValue={"flex"} bgColor={'rgba(255, 255, 255, 0.7)'} autoplayEnabled={false}  autoplayValues={{ delay: 800, disableOnInteraction: true }} paginationEnabled={false}/>
          <ReusableImageComponent data={datas.dataThirty} />
          <ReusableSwiperComponent data={datas.dataThirtyOne} value1={4} value2={3} value3={3} value4={2} value5={1} leftValue={"flex"} rightValue={"flex"} bgColor={'rgba(255, 255, 255, 0.7)'} autoplayEnabled={false}  autoplayValues={{ delay: 800, disableOnInteraction: true }}    paginationEnabled={false} />
          <ReusableImageComponent data={datas.dataThirtyTwo} />
          </>
        ) }
      </Controls.Grid>
    </Controls.Grid>
  );
};

export default CorouselComponent;
