/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
 
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';


class SampleReact extends Component {

  constructor(){
    super();
    this.state={
      resultText:"",
      calculationText:""
    };
   
  }

  calculateResult(){
    const text = this.state.calculationText
    this.setState({
      resultText: eval(text)
    })
  }

  validate(){
    const text = this.state.calculationText
    switch(text.slice(-1)){
      case '+':
      case '-':
      case '*':
      case '/':
        return false

    }
    return true
  }

  buttonPressed(text){

    if(text=="="){
      return this.validate()&&this.calculateResult()
    }

    this.setState({
      calculationText: this.state.calculationText+text
    })

  }

  operate(operataion){
    switch(operataion){
      case 'D':
        const text = this.state.calculationText.split('')
        text.pop()
      
        this.setState({
          calculationText:text.join('')
        })
        break
      case '+':
      case '-':
      case '*':
      case '/':
      
      const lastChar = this.state.calculationText.split('').pop()
      if(operataion.indexOf(lastChar)>0){
        return
      }

      if(this.state.text=="")return
      this.setState({
        calculationText: this.state.calculationText+operataion
      })
    }
  }
  
  
  render() { 
    let rows=[]
    let nums=[[1,2,3],[4,5,6],[7,8,9],[".",0,'=']];
    for(let i=0;i<4;i++){
      let row=[]
      for(let j=0;j<3;j++){
        row.push(<TouchableOpacity  key= {nums[i][j]}onPress={()=>this.buttonPressed(nums[i][j])} style={styles.btn}>
          <Text style={styles.btnText}>
            {nums[i][j]}
          </Text>
        </TouchableOpacity>)
      }
      rows.push(<View key={i} style={styles.row}>{row}</View>)
    }

    let operations=["D","+","/","*","-"]
    let ops=[];
    for(let i=0;i<5;i++){
      ops.push(<TouchableOpacity key={operations[i]} onPress={()=>this.operate(operations[i])} style={styles.btn}>
        <Text style={styles.btnText, styles.operationText} >
          {operations[i]}
        </Text>
      </TouchableOpacity>)
    }


    return (  
     <View style={styles.container}>
       <View style={styles.calculation}>
         <Text style ={styles.calculationText}>{this.state.calculationText}</Text>
       </View>
       <View style = {styles.result}>
         <Text style ={styles.resultText}>{this.state.resultText}</Text>
       </View>
       <View style = {styles.buttons}>
         <View style ={styles.numbers}>
          
             {rows}
             </View>
           
         <View style = {styles.operataion}>
          {ops}
         </View>
       </View>
  
     </View>
    );
  };
}
 
export default SampleReact;

const styles = StyleSheet.create({
 
  container:{
    flex: 1
  },
  btn:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'stretch'
  },
  btnText:{
    fontSize:30,
    color: 'white'

  },
  operationText:{
    color:'white'
  },
  result: {
    flex: 1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  calculation: {

    flex: 2,
    backgroundColor : 'white',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  buttons: {
    flex:7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor:'#434343'
  },
  operataion:{
    flex:1,
    justifyContent:'space-around',
    backgroundColor : '#636363'
  },
  row:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  calculationText:{
    fontSize: 14,
    color: 'black'
  },
  resultText:{
    fontSize:20,
    color:'black'
  }
  
});


