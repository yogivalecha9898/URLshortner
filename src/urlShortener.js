const request = require('request')

const urlShortener = (link,callback) =>{
    const url = 'https://api.shrtco.de/v2/shorten?url='+encodeURIComponent(link)
    request({url:url,json:true},(error,response)=>{
        if(error)
            callback(error,{
                link1:undefined,
                link2:undefined,
                link3:undefined,
            })
        else if(!response.body.ok)
            callback(response.body.error,{
                link1:undefined,
                link2:undefined,
                link3:undefined,
            })
        else
            callback(undefined,{
                link1:response.body.result.full_short_link,
                link2:response.body.result.full_short_link2,
                link3:response.body.result.full_short_link3,
            })
    })
}

module.exports = {
    shortener : urlShortener,
}
