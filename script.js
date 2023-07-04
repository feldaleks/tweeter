const Tweeter = function () {
    let posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter = 2
    let commentIdCounter = 6

    const getPosts = () => posts

    const addPost = (post) => {
        postIdCounter += 1
        posts.push({
            text: post,
            id: "p" + postIdCounter,
            comments: []
        }) 
    }

    const removePost = (postId) => posts = posts.filter(obj => obj.id !== postId)

    const addComment = (comment, postId) => {
        commentIdCounter += 1
        let post = posts.filter(obj => obj.id == postId)
        post[0].comments.push({
            id: "c" + commentIdCounter,
            text: comment
        })

    }

    const removeComment = (postId, CommentId) => {
        let post = posts[posts.id == postId]
        post.comments = post.commets.filter(obj => obj.id !== CommentId)
    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }


}

const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())

tweeter.removePost("p1")
console.log(tweeter.getPosts())

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
console.log(tweeter.getPosts())

