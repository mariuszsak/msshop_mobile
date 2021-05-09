import React from 'react';
import { Image } from 'react-native';
import styles from '../styles/style';

const Logo = () => (
    <Image style={styles.logo} source={require('../../assets/logo.jpg')} />
);

export default Logo;
