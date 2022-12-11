import InfoCard from "../components/InfoCard";


export default function Podcast() {
    return (<>
        <div className="info-container"> 

        <InfoCard></InfoCard>      
        
        </div>

        <div className="detail-container">
            <div className="episode-number">Episode: 66</div>
                <div className="podcast-list">
                <p className="card-text">
								<strong>title</strong> 
							</p>
							<p className="card-text">
								<strong>:Date</strong> 
							</p>
							<p className="card-text">
								<strong>Duration</strong>
							</p>
                </div>

        </div>
    </>
    )
}