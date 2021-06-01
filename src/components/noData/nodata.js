import React from 'react';

const noData =  function(info){
    if (info) {
        return info;
    } else {
        console.log(info);
        return 'no data :(';
    }
}

export default noData;