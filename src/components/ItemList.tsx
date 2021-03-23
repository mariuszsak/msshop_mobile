import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export function ItemList(props: any) {
    console.log(props.data);

    return (
        <View style={{ flex: 1, width: '100%' }}>
            <FlatList
                contentContainerStyle={styles.allItems}
                data={props.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <>
                        <Text style={styles.singleItem}>{item.id} </Text>
                        <Text style={styles.singleItem}>
                            {item.name}, {item.description}, {item.price}
                        </Text>
                    </>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    allItems: {
        backgroundColor: '#fff',
        margin: 15
    },
    singleItem: {
        marginTop: 50,
        padding: 5,
        backgroundColor: '#aabbee'
    }
});
