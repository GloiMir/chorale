import {View,TouchableOpacity,Text,ImageBackground,StyleSheet} from 'react-native'
import {Component} from 'react'

export default class Accueil extends Component{
    constructor(props){
        super(props);
        this.state = {
            chants:false,
            accueil:true,
            // reglages:false,
            // lumiere:[],
            // maman:[],
            // ecodim:[],
            psaumes:[{verset:'Psaumes 149:1',contenu:"Louez l'Éternel!\n"+"Chantez à l'Éternel un cantique nouveau!\n"+"Chantez ses louages dans l'assemblée des fideles!"},
                {verset:'Psaumes 9:3',contenu:"Je ferai de toi le sujet de ma joie et de mon allegresse,\n"+ "Je chanterais ton nom, Dieu Très-Haut!"},
                {verset:'Psaumes 9:17',contenu:"L'Éternel se montre,il fait jusstice,\n"+"Il enlace le méchant dans l'oeuvre de ses mains"},
                {verset:'Psaumes 119:9',contenu:"Comment le jeune homme renda-t-il pur son sentier?\n"+"En se dirigeant d'après tes paroles"},
                {verset:'Psaumes 122:1',contenu:"Je suis dans la joie quan on me dit:\n"+"Allons à la maison de l'Éterne"},
                {verset:'Psaumes 124:1',contenu:"Sans l'Éternel qui nous protégea,\n"+"Qu'Israel le dise!"},
                {verset:'Psaumes 127:1',contenu:"Si l'Éternel ne batit la maison,\n"+"ceux qui la batissent travaillent en vain;\n"+"Si l'Éternel ne garde la ville,\n"+"celui qui a garde veille en vain"},
                {verset:'Psaumes 146:2',contenu:"Je louerai l'Éternel tant que ne vivrai,\n"+"Je célébrerai nom Dieu tant que j'existrai"},
                {verset:'Psaumes 89:2',contenu:"Je chanterai toujours les bonté de l'Éternel;\n"+"Ma bouche fera connaitre à jamais ta fidelité"},
                {verset:'Psaumes 91:1',contenu:"Celui qui demeure sous l'abris du Très-Haut \n"+"Répose à l'ombre du Tout-Puissant"}
            ],
            dayPsaume:{}
        } 
        const aleatoire=(min, max)=>Math.floor(Math.random() * (max - min + 1)) + min;
        const psaume = aleatoire(0,9)
        this.state.dayPsaume=this.state.psaumes[psaume];
    }

    render(){
        if(this.state.chants==true){
            return(                                
                <ImageBackground source={require('../assets/app.png')} style={{height:'100%',width:'100%'}}>
                    <View style={style.v1}>
                        <View style={{backgroundColor:"#6767ff",flexDirection:'row',justifyContent:'space-around',alignContent:'center',alignItems:'center',width:'70%',height:'9%',position:'absolute',top:5}}>
                            <TouchableOpacity style={{backgroundColor:'#464965',borderRadius:20,height:'75%',width:'30%',justifyContent:'center',alignContent:'center',alignItems:'center'}} onPress={()=>{this.setState({accueil:true,chants:false})}}><Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Accueil</Text></TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:"#07080d",borderRadius:20,height:'75%',width:'30%',justifyContent:'center',alignContent:'center',alignItems:'center'}} onPress={()=>{this.setState({chants:true})}}><Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Chants</Text></TouchableOpacity>
                        </View>
                    <View style={{height:'40%',width:'80%',justifyContent:'space-evenly'}}>
                    <TouchableOpacity style = {style.v2}
                        onPress={
                            ()=>{
                                this.props.navigation.navigate("Liste")
                            }
                        }
                    >
                        <View >
                            <Text style={style.t1}>Chorale lumiere</Text>
                        </View>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style = {style.v2}
                        onPress={
                            ()=>{
                    
                                    this.props.navigation.navigate("Liste2")
                                
                            }
                        }
                    >
                        <View>
                            <Text style={style.t1}>Chorale des mamans</Text>
                        </View>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style = {style.v2}
                        onPress={
                            ()=>{    
                                this.props.navigation.navigate("Liste3")                                
                            }
                        }
                    >
                        <View>
                            <Text style={style.t1}>Chorale de l'écodim</Text>
                        </View>
                    
                    </TouchableOpacity>
                    </View>
                    </View>
                </ImageBackground>            
            )
        }
        if(this.state.accueil==true){
            return(                                
                <ImageBackground source={require('../assets/app.png')} style={{height:'100%',width:'100%'}}>
                    <View style={style.v1}>
                        <View style={{backgroundColor:"#6767ff",flexDirection:'row',justifyContent:'space-around',alignContent:'center',alignItems:'center',width:'70%',height:'9%',position:'absolute',top:5}}>
                            <TouchableOpacity style={{backgroundColor:"#07080d",borderRadius:20,height:'75%',width:'30%',justifyContent:'center',alignContent:'center',alignItems:'center'}} onPress={()=>{this.setState({accueil:true})}}><Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Accueil</Text></TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#464965',borderRadius:20,height:'75%',width:'30%',justifyContent:'center',alignContent:'center',alignItems:'center'}} onPress={()=>{this.setState({chants:true,accueil:false})}}><Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Chants</Text></TouchableOpacity>
                        </View>
                        <View style={{height:'60%',width:'90%',justifyContent:'space-evenly',alignContent:'center',alignItems:'center'}}>
                            <View style={{height:'15%',width:'60%',alignContent:'center',alignItems:'center',justifyContent:'space-evenly',backgroundColor:"#464965"}}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:25}}>Psaume de jour</Text>
                            </View> 
                            <View style={{height:'60%',width:'75%',padding:'8%',paddingTop:'0%',justifyContent:'space-evenly',backgroundColor:"#464965"}}>
                                <Text style={{color:'white',fontSize:20}}>{this.state.dayPsaume.contenu}</Text>
                                <Text style={{position:'absolute',bottom:'2%',right:'8%',fontWeight:'bold',fontSize:20}}>{this.state.dayPsaume.verset}</Text>
                                {/* <Text style={{color:'white',fontSize:20}}>{this.state.psaumes[6].contenu}</Text>
                                <Text style={{position:'absolute',bottom:'2%',right:'8%',fontWeight:'bold',fontSize:20}}>{this.state.psaumes[6].verset}</Text> */}
                            </View>  
                        </View>                                          
                    </View>
                </ImageBackground>            
            )
        }
    }
}
const style = StyleSheet.create({
    v1:{
        justifyContent:'space-evenly',
        alignContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%'
    },
    v2:{
        backgroundColor:"#464965",
        alignContent:'center',
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,        
        // marginLeft:'10%',
        marginHorizontal:'5%',
        width:'90%',
        height:'20%',
        marginBottom:10,
        marginTop:15
    },
    t1:{
        fontWeight:'bold',
        fontSize:20,
        letterSpacing:1,
        color:'white',
        textAlign:"center"
    }
})

