import React, { useState } from "react";
import { StyleSheet, StatusBar, View, Text, TextInput } from "react-native";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <StatusBar barStyle="default" />
            <View style={styles.container}>
                <Text>Login</Text>
                <TextInput
                    placeholder="Email"
                    onChangeText={newEmail => setEmail(newEmail)}
                    defaultValue={email}
                />
                <TextInput
                    placeholder="Password"
                    onChangeText={newPassword => setPassword(newPassword)}
                    defaultValue={password}
                    secureTextEntry={true}
                />
            </View>
        </>

    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})