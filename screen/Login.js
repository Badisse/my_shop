import { StyleSheet, View, Text } from "react-native"

const Login = () => {
    return(
        <View style={styles.container}>
            <Text>Login</Text>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})