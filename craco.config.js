const path =  require('path');
console.log(path);
module.exports = {
    webpack:{
        alias:{
            "@components" :path.resolve(__dirname,'src/components/'),
        }
    }
}