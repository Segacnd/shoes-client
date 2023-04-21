import FirstBlock from "../firstBlock/FirstBlock";
import GenderLink from "../GendersLink/GendersLink";
import Information from "../InformationPart/Information";
import NewArrivals from "../NewArrivals/NewArrivals";
import Parralax from "../Scroll Velocity/ParralaxText";

function Home(){
  return( 
  <div>
    <FirstBlock/>
    <div className='content-box'>
      <NewArrivals/>
    </div>
    <Information/>
    
    <GenderLink/>
    <Parralax/>
  </div>
  )
}
export default Home