import React from 'react';
import { Image } from 'react-native';
import { DB_HOST, DB_PORT } from '@env';

interface BigImageNumber {
    id: number;
}

const BigImage = (props: BigImageNumber) => (
    <Image
        resizeMode="contain"
        source={{ uri: `http://85a888e1adcc.ngrok.io/img/${props.id}.jpg` }}
        style={{ width: 300, height: 300 }}
    />
);

export const MemoizedBigImage = React.memo(BigImage);
