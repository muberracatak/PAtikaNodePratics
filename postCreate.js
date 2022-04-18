
const posts = [
    {name: 'post1'},
    {name: 'post2'},
    {name: 'post3'},
    {name: 'post4'},
]

const listPosts =  ()=>  {
    posts.map(post => {
        console.log(post.name);
    })
}

const addPost = (newPost,callback)=>{
    const promise1 = new Promise((resolve,reject)=>{
        posts.push(newPost);
        resolve(posts);
    })
    return promise1;
}

 async function showPosts(){
     try{
        await addPost({name:'post5'})
        listPosts();
     }
     catch(error){
         console.log(error);
     }
    
 }

showPosts();