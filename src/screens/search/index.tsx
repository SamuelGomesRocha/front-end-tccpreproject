import { FooterNote } from "../../components/styled-files/FooterNote";
import { TrendTopic } from "../../components/styled-files/TrendTopic";
import "./styles.css"
import TwitterImage from '../../img/twitter_image.png'
import SearchIcon from '../../img/search_icon.png'
import { MainInput } from "../../components/research-in/MainInput";
import axios from 'axios'
import { useEffect, useState } from "react";
import { RESEARCH_SCREEN_TRENDING_TOPICS_URL } from "../../utils/requests";
import { TrendType } from "../../types/TrendType";
import { TrendList } from "../../components/trend-topics-list";

function randomNumberInRange(min: number, max:number) {
        // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function SearchScreen(){

    const [trends, setTrends] = useState<TrendType[]>()
    const [tt, setTT] = useState<string[]>()
    const [top, setTop] = useState<Number>()
    const [verifyClick, setVerifyClick] = useState<boolean>()
  

    useEffect(() =>{ 
        let trueTrend = ['']
        axios.get(RESEARCH_SCREEN_TRENDING_TOPICS_URL).then(response =>{
            const data = response.data as TrendType[]
            let i = 0;
            data.map(t =>(
                trueTrend[i] = t.trend,
                i++
            ))
            setTT(trueTrend)
            console.log(trueTrend[3])
            setTrends(data)
            setTop(0)
            setVerifyClick(false)
            console.log("Se liga no clicklkkkkk: "+top)
        })
    }, [])

   let max = tt?.length
   let gambiarra = [0]
   let randomMarginLeft = []
   let randomFontSize = []
   let randomRotate = []
   for(var i = 0; i<Number(max); i++){
    gambiarra[i] = randomNumberInRange(0, Number(max))
    randomMarginLeft[i] = randomNumberInRange(-80, 80)
    randomFontSize[i] = randomNumberInRange(12, 60)
    randomRotate[i] = randomNumberInRange(-90, 90)
   }
 
    return(
        //tccpdm: tcc project data mining
        <div className="tccpdm-container">
            <TrendTopic style={{marginLeft: `${randomMarginLeft[0]}%`, transform: `rotate(${randomRotate[0]}deg)`, fontSize:`${randomFontSize[0]}`, backgroundColor: '#2f9e41'}}>{tt?.at(gambiarra[0])}</TrendTopic>
            <TrendTopic style={{marginLeft: `${randomMarginLeft[1]}%`, transform: `rotate(${randomRotate[1]}deg)`, fontSize:`${randomFontSize[1]}`, backgroundColor: '#2f9e41'}}>{tt?.at(gambiarra[1])}</TrendTopic>
            <TrendTopic style={{marginLeft: `${randomMarginLeft[2]}%`, transform: `rotate(${randomRotate[2]}deg)`, fontSize:`${randomFontSize[2]}`, backgroundColor: '#2f9e41'}}>{tt?.at(gambiarra[2])}</TrendTopic>
            <TrendTopic style={{marginLeft: `${randomMarginLeft[7]}%`, transform: `rotate(${randomRotate[7]}deg)`, fontSize:`${randomFontSize[7]}`, backgroundColor: '#2f9e41'}}>{tt?.at(gambiarra[7])}</TrendTopic>
            <TrendTopic style={{marginLeft: `${randomMarginLeft[8]}%`, transform: `rotate(${randomRotate[8]}deg)`, fontSize:`${randomFontSize[8]}`, backgroundColor: '#2f9e41'}}>{tt?.at(gambiarra[8])}</TrendTopic>
            <TrendTopic style={{marginLeft: `${randomMarginLeft[9]}%`, transform: `rotate(${randomRotate[9]}deg)`, fontSize:`${randomFontSize[9]}`, backgroundColor: '#2f9e41'}}>{tt?.at(gambiarra[9])}</TrendTopic>
          
          
            <TrendTopic style={{marginLeft: `${randomMarginLeft[3]}%`, transform: `rotate(${randomRotate[3]}deg)`, fontSize:`${randomFontSize[3]}`, backgroundColor: '#2f9e41'}}>{tt?.at(gambiarra[3])}</TrendTopic>
            <TrendTopic style={{marginLeft: `${randomMarginLeft[4]}%`, transform: `rotate(${randomRotate[4]}deg)`, fontSize:`${randomFontSize[4]}`, backgroundColor: '#2f9e41'}}>{tt?.at(gambiarra[4])}</TrendTopic>
            <TrendTopic style={{marginLeft: `${randomMarginLeft[5]}%`, transform: `rotate(${randomRotate[5]}deg)`, fontSize:`${randomFontSize[5]}`, backgroundColor: '#2f9e41'}}>{tt?.at(gambiarra[5])}</TrendTopic>
            <TrendTopic style={{marginLeft: `${randomMarginLeft[10]}%`, transform: `rotate(${randomRotate[10]}deg)`, fontSize:`${randomFontSize[10]}`, backgroundColor: '#2f9e41'}}>{tt?.at(gambiarra[10])}</TrendTopic>
            <TrendTopic style={{marginLeft: `${randomMarginLeft[11]}%`, transform: `rotate(${randomRotate[11]}deg)`, fontSize:`${randomFontSize[11]}`, backgroundColor: '#2f9e41'}}>{tt?.at(gambiarra[11])}</TrendTopic>
            <TrendTopic style={{marginLeft: `${randomMarginLeft[12]}%`, transform: `rotate(${randomRotate[12]}deg)`, fontSize:`${randomFontSize[12]}`, backgroundColor: '#2f9e41'}}>{tt?.at(gambiarra[12])}</TrendTopic>
            <MainInput id="main-input" style={{marginTop:`${top}%`, backgroundColor:'#cd191e'}} onClick = {() => {setTop(-40), setVerifyClick(true)}} placeholder="Busque palavras, trends, etc..."/>
          
            {verifyClick && (
                <TrendList />
            )

            }
            
            <footer className="fixar-rodape"> 
                <FooterNote style={{backgroundColor: '#2f9e41'}}><img src={TwitterImage} style={{width:"13px", backgroundColor: '#2f9e41'}}/> Luc e Sam © www.git.opinionetc.com.br   </FooterNote>
            </footer>      
        </div>
        
    );
}