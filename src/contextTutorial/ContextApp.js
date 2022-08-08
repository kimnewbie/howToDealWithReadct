import React from 'react';
import ColorBox from './ColorBox';
import { ColorProvider } from './color';
import SelectColors from './SelectColors';

const ContextApp = () => {
    return (
        <ColorProvider>
            <div>
                <SelectColors />
                <ColorBox />
            </div>
        </ColorProvider>
    );
};

export default ContextApp;