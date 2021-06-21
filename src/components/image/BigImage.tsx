import React from 'react';
import { Image } from 'react-native';
import { DB_HOST, DB_PORT } from '@env';

interface BigImageNumber {
    id: number;
}

const BigImage = (props: BigImageNumber) => (
    <Image
        resizeMode="contain"
        source={{ uri: `http://378d6a5589d6.ngrok.io/img/${props.id}.jpg` }}
        style={{ width: 330, height: 156, margin:0, padding:0,
            top:0,
            left: 0
        }}
    />
);

export const MemoizedBigImage = React.memo(BigImage);
