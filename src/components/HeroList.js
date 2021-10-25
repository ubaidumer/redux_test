import React ,{Component}from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { removeCharacterById } from '../actions';
class HeroList extends Component{


    render(){
        console.log('this.props',this.props)
        return(
            <div>
              <h4>  Hero Squad </h4>
                <ul className='list-group'>
               {
                   this.props.heros.map(hero=>{
                       return(
                           <li className='list-group-item' key={hero.id}>
                            <div className='list-item'>   {hero.name}   (Power :{hero.strength})</div>
                           <div className='list-item right-button' onClick={()=>this.props.removeCharacterById(hero.id)}>x</div>
                           </li>
                       )
                   })
               }
           </ul>
            </div>
        );
    }

}
function mapStateToProps(state){
    console.log('state',state);
    return{
        heros:state.heros
    };
}

function mapDispatchToProps(dispatch){
     return bindActionCreators({removeCharacterById},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(HeroList);