module.exports={
    productionSourceMap:false,
    devServer:{
        port:8080,
        open:true,
        compress:true,
        overlay:{
            warnings:true,
            errors:true
        }
    }
}