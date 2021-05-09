import React from 'react';
import { Checkbox } from 'react-native-paper';
import styles from '../styles/style';

const CheckBox = (props: any) => (
    <Checkbox.Item {...props} labelStyle={styles.checkboxLabel} />
);

export default CheckBox;
