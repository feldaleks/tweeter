const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

function post() {
    tweeter.addPost($("#input").val())
    renderer.renderPosts(tweeter.getPosts())
    $("#input").val("")
}

function deletePost(postId) {
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
}