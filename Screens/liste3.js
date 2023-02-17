import {View,TouchableOpacity,ScrollView,Text,StyleSheet} from 'react-native'
import {Component} from 'react'

export default class Liste extends Component{
    constructor(props){
        super(props);
        this.state = {
            songs:{
                ecodim : [

                ],                  
            },
            info:{

            },
        }        
    }
    render(){
        
            return(                                
                <View  style={{backgroundColor:"#07080d",height:'100%'}}>
                    <View style={style.v1}>
                        <ScrollView>
                            {
                                this.state.songs.ecodim.map((val)=>(                                  
                                      <TouchableOpacity
                                          onPress={()=>{
                                            this.state.info['song']=val;
                                            this.props.navigation.navigate("Song3",this.state.info);
                                          }}
                                      >
                                          <View style={style.v2}>
                                              <Text style={style.t1}>{val.titre}</Text>
                                              <Text style={style.t2}>{val.auteur}</Text>
                                          </View>                                  
                                      </TouchableOpacity>                                    
                                ))
                            }
                        </ScrollView>
                      </View>
                </View>                                          
            )
        }
}

const style = StyleSheet.create({
    v1:{
        backgroundColor:"#07080d",
        width:'100%',
        height:'100%',
    },
    v2:{
        backgroundColor:"#464965",
        flexDirection:'column',
        justifyContent:'space-between',
        width:'100%',
        height:50,
        marginBottom:2,
    },
    t1:{
        fontWeight:'bold',
        fontSize:15,
        letterSpacing:1,
        color:'#FFF',
        marginLeft:10
    },
    t2:{
        fontStyle:'italic',
        fontSize:10,
        letterSpacing:1,
        color:'#FFF',
        marginLeft:10
    }
})