const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

function post() {
    tweeter.addPost($("#input").val())
    renderer.renderPosts(tweeter.getPosts())
    $("#input").val("")
}