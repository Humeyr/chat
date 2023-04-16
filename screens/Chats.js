import React, {useEffect, useState } from  'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Alert } from  'react-native';
import ContactRow from  '../components/ContactRow';
import Separator from  '../components/Separator';

import { Ionicons } from  '@expo/vector-icons';
import { auth } from '../newfirebaseconfig';
import { colors } from  '../config/constants';




const Chats = ({navigation}) => {

    const onHandleSignup = () => {
        setIsLoading(true)
        if (email !== '' && password !== '') {
      createUserWithEmailAndPassword(auth, email, password)
            .then(() => loading())
            .catch((err)=>{console.log("yy")} );
        }
      };


    useEffect(() => {

      
    }, []);

    const [chats, setChats] = useState ([]);

    // useEffect(() => {
    //     database.firestore().collection('chats').onSnapshot((snapshot) => {
    //        setChats(snapshot.docs); 

    //     });
    // }, []);

/*     const handleFABPress = () => {
        Alert.prompt("Email", "Enter user email", (email) => {
            database.firestore().collection('chats').add({
                users: [database.auth?.currentUser?.email, email],
                messages: [],
            })
            .then((doc) => {
                navigation.navigate("Chat", {id: doc.id});
            });
        });
    }; */

    return (
        <SafeAreaView style={styles.container}>
            {chats.map((chat) => (
                <React.Fragment key={chat.id}>
                    <ContactRow
                        name={chat.data().users.find(
                            (x) => x !== firebase.auth()?.currentUser?.email
                        )}
                        subtitle="No message yet"
                        onPress={() => {
                            navigation.navigate('Chat', {id: chat.id});
                        }}
                    />
                    <Separator/>  

                </React.Fragment>
                
            ))}

            <TouchableOpacity style={styles.fab} onPress={()=>{}}>
                <View>
                    <Ionicons name="add" size={24} color="white"/>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create ({
    container:{
        flex:1
    },
    fab:{
        position: 'absolute',
        bottom:16,
        right:16
    },
    fabContainer: {
        width:56,
        height:56,
        backgroundColor: colors.pink,
        borderRadius:28,
        justifyContent: 'center',
        alignItems: 'center',
       


    }
});

export default Chats;

