import React ,{ Component } from "react";
import CharacterLIst from "./CharacterLIst";
import '../styles/index.css'
import HeroList from "./HeroList";
import UpdatePowerList from "./UpdatePowerList";
class App extends Component{
    render(){
        return (
            <div className='App '>
                <h2>Super Heros</h2>
                <div className='grid'>
                    <div className='col-md-6'>
                <CharacterLIst/>
                </div>
                <div className='col-md-6'>
                <HeroList/>
                </div>
                </div>
                <div>
                <UpdatePowerList/>
                </div>
            </div>
        )
    }
}
export default App;