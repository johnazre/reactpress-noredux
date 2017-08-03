# Reactpress without Redux
Your boss just said your company website needs a simple blogging platform and they want you to build a simple MVP to show them you can do it...and you want to get teh raise, so you do it like a boss. Luckily, they have a list of posts already that come from an API that they want you to use, so you don't have to come up with a bunch of lorem ipsum filler on your own. The API that you will use is [https://jsonplaceholder.typicode.com/posts/](https://jsonplaceholder.typicode.com/posts)

### Here are the user stories that they give you:

#### Base Goals
- As a user, when I land on the homepage, I can see everyone's posts.

- As a user, when I click the "delete" button on the header of the post, the post will be removed from the list.

- As a user, when I land on the homepage, I can see a link on the navbar with the label 'Add Post'.

- As a user, when I click the 'Add Post' link, it takes me to `/post/new`, which contains a form that will add a new post.

- As a user, when I navigate to `/post/new` and fill out the form to create a new post and hit the "Submit" button, the page redirects to `/` and the post you just added exists at the bottom of the post list.

#### Example Post
```
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
```

#### Stretch Goals
- As a user, when I land on the homepage, I see a link on the navbar called "users".

- As a user, when I click the "users" link on the navbar, it takes me to `/users` that shows me a list of users.

- As a user, when I click on a user, it takes me to `/users/1`, it shows all of the user info.

#### Example user:
```
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
```
