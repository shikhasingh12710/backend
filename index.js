require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000


const githubData=
    {
  "login": "shikhasingh",
  "id": 6201536,
  "node_id": "MDQ6VXNlcjYyMDE1MzY=",
  "avatar_url": "https://avatars.githubusercontent.com/u/6201536?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/shikhasingh",
  "html_url": "https://github.com/shikhasingh",
  "followers_url": "https://api.github.com/users/shikhasingh/followers",
  "following_url": "https://api.github.com/users/shikhasingh/following{/other_user}",
  "gists_url": "https://api.github.com/users/shikhasingh/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/shikhasingh/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/shikhasingh/subscriptions",
  "organizations_url": "https://api.github.com/users/shikhasingh/orgs",
  "repos_url": "https://api.github.com/users/shikhasingh/repos",
  "events_url": "https://api.github.com/users/shikhasingh/events{/privacy}",
  "received_events_url": "https://api.github.com/users/shikhasingh/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Shikha Singh",
  "company": "Williams College",
  "blog": "",
  "location": "Williamstown",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 2,
  "created_at": "2013-12-17T00:25:20Z",
  "updated_at": "2025-07-25T13:52:35Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('shikhasingh')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai and code</h2>')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
