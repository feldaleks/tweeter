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

function addComment(postId) {
    let value = $("body").find(`div[data-id=${postId}]`).find("input").val()
    tweeter.addComment(value, postId)
    renderer.renderPosts(tweeter.getPosts())
}

$('#post').on('mousedown', function() {
    $(this).addClass('active-style');
  }).on('mouseup', function() {
    $(this).removeClass('active-style');
  });
  
// $("#posts").on("click",".btn-comment",function(){
//     let value = $(this).closest("div").find("input").val()
//     let postId = $(this).closest("div").data("id")
//     if (value != "") {
//         tweeter.addComment(value, postId)
//         renderer.renderPosts(tweeter.getPosts())
//         $(this).closest("div").find("input").val("")
//     }
// })