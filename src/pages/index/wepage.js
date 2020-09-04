Page({
    data:{
        message:{
            visible:false,
            content:''
        }
    },
    onLoad:function(){
        this.setData({message:{'visible':true,content:'new msg'}});
    },
    onShow:function(){

    },
    onHide:function(){
        if(!this.data.visible){
            console.log('it is false');
        }
    }
})