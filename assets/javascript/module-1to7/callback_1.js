// ***  CALLBACKS  *** //

const posts = [
    { title: 'One', body: 'Body One' },
    { title: 'Two', body: 'Body Two' },
]

function getPosts() {

    setTimeout(
        () => {
            let output = '';
            posts.forEach((post) => {
                output += `<li>${post.title} has a boyd of ${post.body}</li>`
            })
            document.body.innerHTML = output;
        },

        1000)
}

function createPosts(newPost, callback) {
    setTimeout(() => {
        posts.push(newPost);
        callback();


    }, 2000)
}

createPosts({ title: "three", body: "body of three" }, getPosts)