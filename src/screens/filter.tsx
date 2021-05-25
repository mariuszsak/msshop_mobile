import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Checkbox } from 'react-native-paper';
import Logo from '../components/logo';
import { AppContext } from '../context/ItemContext';
import CheckBox from '../components/CheckBox';
import { fetchData } from '../services/fetchData';

interface FilterInterface {
    glassType: string;
    isChecked: boolean;
}

export default function Filter() {
    // ?
    // const context = useContext(AppContext);

    const [types, setTypes] = useState<FilterInterface[]>([]);

    useEffect(() => {
        const makeTypes: () => Promise<void> = async () => {
            await fetchData('types').then((d) => {
                console.log(d[0].glasstype);
                const temp: string[] = d[0].glasstype;
                const x: string[] = uns(temp);
                // temp.unshift("All types");
                console.log('x....');
                console.log(x);
                console.log('....x');
                const val: FilterInterface[] = addCheckedOption(x);

                console.log(val);
                const firstTrue: FilterInterface[] = val;
                firstTrue[0].isChecked = true;
                console.log(firstTrue);
                setTypes(firstTrue);
            });
        };

        makeTypes().then();

        console.log(`Types: ${types}`);
    }, []);

    function uns(array: string[]): string[] {
        array.unshift('All items');
        return array;
    }

    function addCheckedOption(array: any[]) {
        const tempArrObj: { glassType: string; isChecked: boolean }[] = [];
        for (let i: number = 0; i < array.length; i++) {
            tempArrObj.push({
                glassType: array[i],
                isChecked: false
            });
        }
        return tempArrObj;
    }

    function applyFiltersHandler(): void {
        console.log('Apply clicked');
    }

    function handleClick(index: number): void {
        const newArr: FilterInterface[] = [...types];
        newArr.map((newArrItem, newArrIndex) => {
            newArrIndex == index
                ? (newArrItem.isChecked = true)
                : (newArrItem.isChecked = false);
        });
        setTypes(newArr);
        console.log(newArr);
    }

    return (
        <View style={styles.container}>
            {/* LOGO */}
            <View style={styles.header}>
                <Logo />
            </View>

            <View style={styles.body}>
                {/* TYPE */}
                <Text>Show glasses by type:</Text>

                <View style={styles.checkboxes}>
                    {types.map((c: FilterInterface, index: number) => (
                        <TouchableOpacity
                            key={c.glassType}
                            onPress={() => handleClick(index)}
                            style={styles.bor}
                        >
                            <CheckBox
                                label={c.glassType}
                                status={c.isChecked ? 'checked' : 'unchecked'}
                            />
                        </TouchableOpacity>
                    ))}

                    {/*
          <TouchableOpacity onPress={() => showAll()} style={styles.bor}>
            <Checkbox.Item label="Show all"
                           status="checked"
                           labelStyle={styles.checkboxLabel}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bor}
                            onPress={() => showFilteredByType("EYEGLASSES")}>
            <Checkbox.Item label="Eyeglasses"
                           status="unchecked"
                           labelStyle={styles.checkboxLabel}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bor}
                            onPress={() => showFilteredByType("SUNGLASSES")}>
            <Checkbox.Item label="Sunglasses"
                           status="unchecked"
                           labelStyle={styles.checkboxLabel}
            />
          </TouchableOpacity>
*/}
                </View>

                {/* GENDER */}
                <Text>Show glasses by gender:</Text>
                <View style={styles.checkboxes}>
                    <TouchableOpacity onPress={() => {}} style={styles.bor}>
                        <Checkbox.Item
                            label="Unisex"
                            status="checked"
                            labelStyle={styles.checkboxLabel}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style={styles.bor}>
                        <Checkbox.Item
                            label="Male"
                            status="unchecked"
                            labelStyle={styles.checkboxLabel}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style={styles.bor}>
                        <Checkbox.Item
                            label="Female"
                            status="unchecked"
                            labelStyle={styles.checkboxLabel}
                        />
                    </TouchableOpacity>
                </View>

                {/* BRAND */}
                <Text>Show glasses by brand:</Text>
                <TouchableOpacity onPress={() => {}} style={styles.bor}>
                    <Checkbox.Item
                        label="Show all"
                        status="checked"
                        labelStyle={styles.checkboxLabel}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={styles.bor}>
                    <Checkbox.Item
                        label="Hugo Boss"
                        status="unchecked"
                        labelStyle={styles.checkboxLabel}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={styles.bor}>
                    <Checkbox.Item
                        label="Polaroid"
                        status="unchecked"
                        labelStyle={styles.checkboxLabel}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={styles.bor}>
                    <Checkbox.Item
                        label="Tom Ford"
                        status="unchecked"
                        labelStyle={styles.checkboxLabel}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={styles.bor}>
                    <Checkbox.Item
                        label="Ray-Ban"
                        status="unchecked"
                        labelStyle={styles.checkboxLabel}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.btn}>
                <Button mode="contained" onPress={applyFiltersHandler}>
                    Apply filters
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        backgroundColor: '#fff'
    },
    body: {
        flex: 9,
        backgroundColor: '#fff'
    },
    checkboxes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    },
    option: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black'
    },
    bor: {
        flex: 1,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black'
    },
    btn: {
        padding: 5,
        backgroundColor: '#fff'
    },
    checkboxLabel: {
        fontSize: 12
    }
});
