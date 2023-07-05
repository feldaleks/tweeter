const Renderer = function () {
    
    const renderPosts = function (posts) {
        $("#posts").empty();

        for (let post of posts) {
            $("#posts").append(`<div data-id="${post.id}" class="post"><span class="post-text">${post.text} </span><div class="delete" onclick="deletePost('${post.id}')">x</div></div>`)
            for (let comment of post.comments) {
                $(`[data-id="${post.id}"]`).append(`<div data-id="${comment.id}" class="comment">${comment.text}    <div class="delete-comment" onclick="deleteComment('${post.id}','${comment.id}')">x</div></div>`)
            }
        }
    }
    
    return {
        renderPosts: renderPosts
    }
}