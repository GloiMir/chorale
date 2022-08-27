import {View,ScrollView,Text,StyleSheet} from 'react-native'
import {Component} from 'react'

export default class Song extends Component{
    constructor(props){
        super(props);
        const song = this.props.navigation.getParam('song')
        this.state = {
            song:song
        }
    }
    render(){
        return(
            <View style={style.v1}>
                
                <View style={style.v2}>
                    
                            <Text style={style.t1}>{this.state.song.titre}</Text>                            
                            <Text style={style.t2}>{this.state.song.auteur}</Text>
                                        
                </View>                
                <View style={style.v3}>
                    <ScrollView style={{width:'100%'}}>
                        <View style={{width:'100%'}}>
                            <Text style={style.t3}>{this.state.song.contenu}</Text>
                        </View>                        
                    </ScrollView>                    
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    v1:{
        justifyContent:'flex-start',
        alignContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%'
    },
    v2:{
        flex:1,
        backgroundColor:"#6767ff",
        justifyContent:'space-around',
        width:'100%',
    },
    v3:{
        backgroundColor:"#07080d",
        alignItems:'center',
        width:'100%',
        height:'90%',
    },
    t1:{
        width:'100%',
        fontWeight:'bold',
        fontSize:20,
        letterSpacing:1,
        color:'#fff',
        marginTop:5,
        marginLeft:10
    },
    t2:{
        width:'100%',
        fontStyle:'italic',
        fontSize:15,
        letterSpacing:1,
        color:'#fff',
        marginLeft:10
    },
    t3:{
        width:'80%',
        fontSize:20,
        letterSpacing:1,
        color:'#fff',
        marginTop:10,
        marginHorizontal:'10%'
    }
})