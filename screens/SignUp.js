import React,{useState} from  'react';
import { Text, SafeAreaView, View, StyleSheet, TextInput, TouchableOpacity } from  'react-native';
import { colors } from "../config/constants";
import Button from '../components/Button';
import auth from "../newfirebaseconfig"
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
   
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const[isLoading,setIsLoading]=useState(false)
    const[error,setError]=useState('')
  

  
  function loading(){
    console.log('Signup success')
    setIsLoading(false)
   
  
  }
  
  function errorloading(errmessage){
  
    let message=errmessage.message;
  setError(message)
    
    setIsLoading(false)
  
    return message
   
  
  }
  
  const onHandleSignup = () => {
    setIsLoading(true)
    if (email !== '' && password !== '') {
  createUserWithEmailAndPassword(auth, email, password)
        .then(() => loading())
        .catch((err)=>{console.log(err.message)} );
    }
  };





    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.contentContainer}>
                <Text style={styles.title}>Create new account</Text>
                    <TextInput value={name} style={styles.input} placeholder="Enter your name" onChangeText={(text)=>setName(text)}/>
                    <TextInput value={email} style={styles.input} placeholder="Enter your email" onChangeText={(text)=>setEmail(text)}/>
                    <TextInput value={password} style={styles.input} placeholder="Enter your password" onChangeText={(text)=>setPassword(text)}/>
                    <View style={styles.buttonsContainer}>
                        <Button title="Sign in" varient="secondary" />
                        <Button onPress={()=>onHandleSignup()} title="Sign up" varient="primary"   />
                    </View>  
                </View>  
            </SafeAreaView>
        </View>
           
        
        
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.primary
    },

    title:{
        fontSize:36,
        color: 'white',
        fontWeight: '800',
        marginBottom: 16
    },
    contentContainer:{
        padding:32
    },
    input:{
        backgroundColor: 'white',
        fontSize:15,
        marginTop:16,
        paddingHorizontal:16,
        paddingVertical:14,
        borderRadius:6
    },
    buttonsContainer:{
        flexDirection:  'row',
        justifyContent:  'space-between',
        marginTop:32
    },
   
});

export default SignUp;