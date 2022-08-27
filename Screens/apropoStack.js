import React from 'react'; 
import {View,Text,StyleSheet,ScrollView} from 'react-native'
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import Tete from './tete'

class Apropos extends React.Component{
    render(){
        return(
            <View style={style.v1}>
                <View style={style.v2}>
                    <ScrollView>
                        <Text style={style.titre}>PRÉSENTATION</Text>
                        <Text style={style.t1}>ParméS accronime de Parfum Mélodie pour le Seigneur est une application mobile propre aux chorales de l'aumonerie universitaire de l'ULPGL Goma.</Text>
                        <Text style={style.t1}>Dans sa version actuelle(1.0.0),ParméS ne porte que les textes de chansons de trois chorales de l'aumonerie universitaire de l'ULPGL Goma.</Text>
                        <Text style={style.t1}>ParméS fonctionne hors connexion </Text>
                        <Text style={style.titre}>AUTEURS</Text>
                        <Text style={style.t1}>  - Gloire MIRINDI : Programmeur </Text>
                        <Text style={style.t1}>  - Daniel MAKELELE : Graphiste </Text>
                        <Text style={style.t1}>  - Ghislain MUMBERE : Initiateur </Text>
                    </ScrollView>
                </View>        
            </View>
        )
    }
}

const style = StyleSheet.create({
    v1:{
        backgroundColor:"#07080d",
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%'
    },
    v2:{
        backgroundColor:"#464965",
        alignItems:'center',
        width:'95%',
        height:'85%',
        paddingHorizontal:5
    },
    t1:{
        fontSize:20,
        letterSpacing:1,
        color:'white',
        marginBottom:5
    },
    titre:{
        fontWeight:'bold',
        fontSize:20,
        letterSpacing:1,
        color:'white',
        textAlign:'center',
        marginTop:10
    }
})
export default Apropos