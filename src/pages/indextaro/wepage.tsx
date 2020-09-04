import React from 'react';
import {View} from '@tarojs/components'
import Message from '../../taro-component/message/message'

class Wepage extends React.Component{
    state={
        visible:false,
        content:''
        
    }
    
    componentDidMount(){
        this.setState({
            visible:true,
            content:'new msg'
        })
    }

    render(){
        const {visible,content}=this.state;
        return(
            <View>
                <View>hello world!</View>
                <Message 
                    visible={visible}
                    content={content}
                ></Message>
            </View>
        )
    }
}
export default Wepage;