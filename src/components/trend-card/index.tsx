import { TrendType } from "../../types/TrendType"
import './styles.css'

type Props = {
    trendTopic: TrendType
}

function redirect(link:string){
        location.href = link;
    }

export function TrendCard({trendTopic} : Props){

    

    return(
        
            <div className="trendCard-container" onClick={() => redirect(trendTopic.link)}>
                <p className="trendCard-textualContent">
                    {trendTopic.trend}
                </p>
                <p className="trendCard-value">
                    {Math.trunc(Number(trendTopic.qtd)/1000)+'k'}
                </p>
            </div>
       
    )

}