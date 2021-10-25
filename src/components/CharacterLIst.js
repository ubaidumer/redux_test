import React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { addCharacterById } from '../actions';
class CharacterLIst extends Component {
   render(){
       console.log('this.props',this.props)
    return (
        <div>
           <h4>Characters</h4> 
           <ul className='list-group'>
               {
                   this.props.characters.map(characters=>{
                       return(
                           <li className='list-group-item' key={characters.id}>
                            <div className='list-item'>   {characters.name} (Power :{characters.strength}) </div>
                           <div className='list-item right-button' onClick={()=>this.props.addCharacterById(characters.id)}>+</div>
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
        characters:state.characters
    };
}

function mapDispatchToProps(dispatch){
     return bindActionCreators({addCharacterById},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(CharacterLIst);
//SHORTCUT TO ADD TO PROPS
//export default connect(mapStateToProps,{addCharacterById})(CharacterLIst);