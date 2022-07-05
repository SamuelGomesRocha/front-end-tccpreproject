import axios from "axios"
import { useEffect, useState } from "react"
import { Scrollbar } from "smooth-scrollbar-react"
import { TrendType } from "../../types/TrendType"
import { COMPLETE_TREND_TOPICS_URL } from "../../utils/requests"
import { TrendCard } from "../trend-card"
import "./styles.css"

export function TrendList(){

    const [trends, setTrends] = useState<TrendType[]>()

    useEffect(() =>{
        axios.get(COMPLETE_TREND_TOPICS_URL).then(resp => {
            const data = resp.data as TrendType[];
            setTrends(data)
        })

    }, [])

    return (
        <>
            <div className="trend-card">
                <p className="cardList-title" style={{
                    color: '#fff', marginLeft:  88, marginRight: 0,
                    fontFamily: 'Ubuntu', fontWeight: 'bold'
                    }}>
                    TREND TOPICS
                </p>
                <div className="container">
             
                
                <div className="center-col">

                <ul>
                    {trends?.map(t => (<TrendCard trendTopic={t}/>))}
                </ul>
                </div>
                
    
            </div>
                        

      
               
                
            
            </div>
        </>
    )
}