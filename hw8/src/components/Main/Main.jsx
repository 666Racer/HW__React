import BetweenGrids from "./Elements/BetweenGrids"
import BotttomContent from "./Elements/BottomContent"
import Brand from "./Elements/Brand"
import FirstGrid from "./Elements/FirstGrid"
import MiddleContent from "./Elements/MiddleContent"
import SecondGrid from "./Elements/SecondGrid"

const Main = () => {
	return (
        <div>
            <Brand/>
            <FirstGrid/>
            <BetweenGrids/>
            <SecondGrid/>
            <MiddleContent/>
            <BotttomContent/>
        </div>
    )
}

export default Main;