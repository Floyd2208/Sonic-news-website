const express=require('express')
const newsRouter=express.Router()
const axios = require('axios')

newsRouter.get('', async(req,res)=> {
        try{
        const newsAPI = await axios.get('https://newsapi.org/v2/top-headlines?category=entertainment&language=en&country=in&apiKey=005566d62d0d40a2903f7bdc95e86ed9')
        res.render('news', { articles:newsAPI.data.articles })
        
    } catch(err){
        if(err.response){ 
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest){
            console.log(err.requiest)
        }else{
            console.error('Error',err.message)
        }
    }

})

newsRouter.post('', async(req, res) => {
    let search = req.body.search
    try {
        const newsAPI = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=005566d62d0d40a2903f7bdc95e86ed9')
        res.render('newsSearch', { articles : newsAPI.data.articles })
    } catch (err) {
        if(err.response) {
            res.render('newsSearch', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('newsSearch', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('newsSearch', { articles : null })
            console.error('Error', err.message)
        }
    } 
})   

   

module.exports= newsRouter
