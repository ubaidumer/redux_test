import React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { updateCharacterPower} from '../actions';
import characters_json from '../data/characters.json';
import heros from './../reducers/heroes.reducer';
class UpdatePowerList extends Component {
   render(){
       console.log('this.props',this.props)
    return (
        <div>
           <h4>Update Power</h4> 
           <ul className='list-group'>
               {
                   this.props.characters.map(characters=>{
                       return(
                           <li className='list-group-item' key={characters.id}>
                            <div className='list-item'>   {characters.name}</div>
                           <div className='list-item right-button' onClick={()=>this.props.updateCharacterPower(characters.id,characters.strength)}>+</div>
                           </li>
                       )
                   })
               }
                              {
                   this.props.heros.map(characters=>{
                       return(
                           <li className='list-group-item' key={characters.id}>
                            <div className='list-item'>   {characters.name}</div>
                           <div className='list-item right-button' onClick={()=>this.props.updateCharacterPower(characters.id,characters.strength)}>+</div>
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
        characters:state.characters,
        heros:state.heros
    };
}

function mapDispatchToProps(dispatch){
     return bindActionCreators({updateCharacterPower},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(UpdatePowerList);
//SHORTCUT TO ADD TO PROPS
//export default connect(mapStateToProps,{addCharacterById})(CharacterLIst);