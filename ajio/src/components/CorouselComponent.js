import React, { useState, useEffect } from 'react';
import Controls from '../commons/Controls';
import axios from 'axios';
import ReusableSwiperComponent from './ReusableSwiperComponent';
import ReusableImageComponent from './ReusableImageComponent';

const CorouselComponent = () => {
    const [data,setData] = useState([])
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

useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axios.get('http://localhost:5050/content');
        console.log('response', res.data);
        
        // Update `datas` state by setting the individual properties
        setData(res.data || []);
        
        setDatas(prevState => ({
          ...prevState, // Keep the existing properties in state
          dataOne: res.data[0],
          dataTwo: res.data[1],
          dataThree: res.data[2],
          dataFour: res.data[3],
          dataFive: res.data[4],
          dataSix: res.data[5],
          dataSeven: res.data[6],
          dataEight: res.data[15],
          dataNine: res.data[16],
          dataTen: res.data[9],
          dataEleven: res.data[10],
          dataTwelve: res.data[11],
          dataThirteen: res.data[12],
          dataFourteen: res.data[13],
          dataFifteen: res.data[14],
          dataSixteen:res.data[17],
          dataSeventeen:res.data[18],
          dataEighteen:res.data[19],
          dataNintenn:res.data[20],
          dataTwenty:res.data[21],
          datatwentyOne:res.data[22],
          dataTwentyTwo:res.data[23],
          dataTwentyThree:res.data[24],
          dataTwentyFour:res.data[25],
          dataTwentyFive:res.data[26],
          dataTwentySix:res.data[27],
          dataTwentySeven:res.data[28],
          dataTwentyEight:res.data[29],
          dataTwentyNine:res.data[30],
          dataThirty:res.data[31],
          dataThirtyOne:res.data[32],
          dataThirtyTwo:res.data[33]
        }));
  
        console.log("datas", datas); // This will log the updated state
  
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };
    
    fetchContent();
  }, []); // Empty dependency array to run only once on mount
  

  return (
    <Controls.Grid container justifyContent="center" >
      <Controls.Grid item xs={12} mt={{xs:16.5,sm:9,md:9.5,lg:8,xl:12}}>
        {data && (
            <>
          <ReusableSwiperComponent data={datas.dataOne} value1={1} value2={1} value3={1} value4={1} value5={1}  leftValue={"none"} rightValue={"none"} autoplayEnabled={true}  autoplayValues={{ delay: 800, disableOnInteraction: false }}/>
          <ReusableSwiperComponent data={datas.dataTwo}  value1={1} value2={1} value3={1} value4={1} value5={1} leftValue={"none"} rightValue={"none"} autoplayEnabled={true}  autoplayValues={{ delay: 800, disableOnInteraction: false }}/>
           <ReusableImageComponent data={datas.dataThree} /> 
          <ReusableImageComponent data={datas.dataFour} />
          <ReusableSwiperComponent data={datas.dataFive} value1={1} value2={1} value3={1} value4={1} value5={1} leftValue={"none"} rightValue={"none"} autoplayEnabled={true}  autoplayValues={{ delay: 800, disableOnInteraction: false }}/>
          <ReusableImageComponent data={datas.dataSix} />
          <ReusableSwiperComponent data={datas.dataSeven} value1={1} value2={1} value3={1} value4={1} value5={1} leftValue={"none"} rightValue={"none"} autoplayEnabled={true}  autoplayValues={{ delay: 800, disableOnInteraction: false }}/>
          <ReusableImageComponent    data={datas.dataTen} />
          {/* /*8*/}
          <ReusableImageComponent data={datas.dataEleven} />

          <ReusableSwiperComponent data={datas.dataEight} value1={1} value2={1} value3={1} value4={1} value5={1} leftValue={"none"} rightValue={"none"} autoplayEnabled={true}  autoplayValues={{ delay: 800, disableOnInteraction: false }}/>
          <ReusableSwiperComponent data={datas.dataNine} value1={1} value2={1} value3={1} value4={1} value5={1} leftValue={"none"} rightValue={"none"} autoplayEnabled={true}  autoplayValues={{ delay: 800, disableOnInteraction: false }}/>
          
          {/* <ReusableSwiperComponent data={datas.dataTwelve} value1={1} value2={1} value3={1} value4={1} value5={1} autoplayEnabled={true}  autoplayValues={{ delay: 800, disableOnInteraction: false }}/>delete */}
          {/* <ReusableImageComponent data={datas.dataThirteen} /> delete*/}
          <ReusableImageComponent data={datas.dataFourteen} />
          <ReusableSwiperComponent data={datas.dataFifteen} value1={4} value2={3} value3={3} value4={2} value5={1} leftValue={"flex"} rightValue={"flex"} bgColor={'rgba(255, 255, 255, 0.7)'} autoplayEnabled={false}  autoplayValues={{ delay: 800, disableOnInteraction: true }}/>
          <ReusableImageComponent data={datas.dataSixteen} />
          <ReusableSwiperComponent data={datas.dataSeventeen} value1={4} value2={3} value3={3} value4={2} value5={1} leftValue={"flex"} rightValue={"flex"} bgColor={'rgba(255, 255, 255, 0.7)'} autoplayEnabled={false}  autoplayValues={{ delay: 800, disableOnInteraction: true }}/>
          <ReusableImageComponent data={datas.dataEighteen} />
          <ReusableSwiperComponent data={datas.dataNintenn} value1={1} value2={1} value3={1} value4={1} value5={1} leftValue={"none"} rightValue={"none"} autoplayEnabled={true}  autoplayValues={{ delay: 800, disableOnInteraction: false }}/>
          <ReusableImageComponent data={datas.dataTwenty} />
          <ReusableSwiperComponent data={datas.datatwentyOne} value1={1} value2={1} value3={1} value4={1} value5={1} leftValue={"none"} rightValue={"none"} autoplayEnabled={true}  autoplayValues={{ delay: 800, disableOnInteraction: false }}/>
          <ReusableImageComponent data={datas.dataTwentyTwo} />
          <ReusableSwiperComponent data={datas.dataTwentyThree} value1={4} value2={3} value3={3} value4={2} value5={1} leftValue={"flex"} rightValue={"flex"} bgColor={'rgba(255, 255, 255, 0.7)'} autoplayEnabled={false}  autoplayValues={{ delay: 800, disableOnInteraction: true }}/>
          <ReusableImageComponent data={datas.dataTwentyFour} />
          <ReusableSwiperComponent data={datas.dataTwentyFive} value1={4} value2={3} value3={3} value4={2} value5={1} leftValue={"flex"} rightValue={"flex"} bgColor={'rgba(255, 255, 255, 0.7)'}autoplayEnabled={false}  autoplayValues={{ delay: 800, disableOnInteraction: true }}/>
          <ReusableImageComponent data={datas.dataTwentySix} />
          <ReusableSwiperComponent data={datas.dataTwentySeven} value1={4} value2={3} value3={3} value4={2} value5={1} leftValue={"flex"} rightValue={"flex"} bgColor={'rgba(255, 255, 255, 0.7)'}autoplayEnabled={false}  autoplayValues={{ delay: 800, disableOnInteraction: true }}/>
          <ReusableImageComponent data={datas.dataTwentyEight} />
          <ReusableSwiperComponent data={datas.dataTwentyNine} value1={4} value2={3} value3={3} value4={2} value5={1} leftValue={"flex"} rightValue={"flex"} bgColor={'rgba(255, 255, 255, 0.7)'} autoplayEnabled={false}  autoplayValues={{ delay: 800, disableOnInteraction: true }}/>
          <ReusableImageComponent data={datas.dataThirty} />
          <ReusableSwiperComponent data={datas.dataThirtyOne} value1={4} value2={3} value3={3} value4={2} value5={1} leftValue={"flex"} rightValue={"flex"} bgColor={'rgba(255, 255, 255, 0.7)'} autoplayEnabled={false}  autoplayValues={{ delay: 800, disableOnInteraction: true }}/>
          <ReusableImageComponent data={datas.dataThirtyTwo} />
          </>
        ) }
      </Controls.Grid>
    </Controls.Grid>
  );
};

export default CorouselComponent;
