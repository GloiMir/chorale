import React from 'react'; 
import {View,Text,StyleSheet,ScrollView} from 'react-native'

export default class Aide extends React.Component{
    render(){
        return(
            <View style={style.v1}>
                <View style={style.v2}>
                    <ScrollView>
                        <Text style={style.titre}>AIDE</Text>
                        <Text style={style.t1}>À la page d'accueil à haut à gauche, on a l'icône du menu qui dirige soit à Aide soit à À propos de l'application.</Text>
                        <Text style={style.t1}>Le bouton Accueil à la page d'accueil permet de voir le psaume du jour.</Text>
                        <Text style={style.t1}>Le bouton Chants à la page d'accueil permet d'accéder aux trois boutons correspondant à nos chorales et chaque bouton conduit à la liste de chansons de la chorale correspondante.</Text>
                        <Text style={style.t1}>À la page de listes, de chasons on a une liste exhaustive de titres de la chorale précedemment sélectionnée et chaque element de la liste conduit au texte de la chanson correspondante.</Text>
                        <Text style={style.t1}>À la page de texte, on a le texte de la chanson précedemment sélectionnée ainsi que le nom de son auteur</Text>
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
        marginTop:10
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