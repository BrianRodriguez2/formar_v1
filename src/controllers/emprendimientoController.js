const { get } = require('express/lib/response');
const {getProjects} = require('../data'); 
 
 
module.exports={
    empAll:(req,res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
            getProjects.forEach(element => {
            res.write(`${element.name}\n`)
            })
            res.end()
    }
}