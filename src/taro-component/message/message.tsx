import React from 'react';
import {View} from '@tarojs/components';

class Message extends React.Component{
    constructor(props:any){
        super(props);
        console.log('haha',props);
    }
    render(){
        const {content,visible}=this.props;
        console.log('haha',content,visible);
        return(
            <View>
                <View>hello,messge</View>
                {visible && <View>{content}</View>}
            </View>
            
        )
    }
}
export default Message