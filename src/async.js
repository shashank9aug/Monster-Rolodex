//complex function architecture => in which functionality of one function 
//depends on the validation of previous function.
/*
getUser('facebook/shashank',(user,error)=>{
    if(error){
        throw(error);
    }

    const userId = user.id;

    getFriends(userId, (friends,error)=>{
        if(error){
            throw(error);
        }

        const jhon = friends.find("dsasd");

        getPosts(jhon, (posts,error)=>{
            if(error){
                throw(error);
            }

            const recentPost = posts[0];

            getCommentsForPosts(recentPost, (comments,error)=>{
                if(error){
                    throw(error);
                }

                displaComments(comments);
            })
        })
    })
})
*/
//----------------------------Using promise : 

const myPromise = new Promise((resolve,reject)=>{
    if(false){
        setTimeout(()=>{
            resolve("I have get the comments");
        },1000);
    }else{
        reject("I haven't get the comment");
    }    
});

myPromise
    .then(value => console.log(value))
    .catch(rejectValue => console.log(rejectValue));


