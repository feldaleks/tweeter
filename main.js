const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

function post() {
    let val = $("#input").val()
    if (val != "") {
        tweeter.addPost(val)
        renderer.renderPosts(tweeter.getPosts())
        $("#input").val("")
    }
}

function deletePost(postId) {
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
}

function deleteComment(postId, commentId) {
    tweeter.removeComment(postId, commentId)
    renderer.renderPosts(tweeter.getPosts())
}

$('#post').on('mousedown', function() {
    $(this).addClass('active-style');
  }).on('mouseup', function() {
    $(this).removeClass('active-style');
  });
  