import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 15
    },
    head: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        borderBottomWidth: 1,
        marginVertical: 15
    },
    listItem: {
        padding: 25,
        flexDirection: 'row'
    }
});