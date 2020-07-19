// *** PROMISES *** //

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

function createPosts(newPost) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(newPost);;
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error!!!')
            }
        }, 2000)

    })

}

// createPosts({ title: "three", body: "body of three" })
//     .then(getPosts)

// Async Await

// async function init() {
//     await createPosts({ title: "three", body: "body of three" })

//     getPosts();

// }

// init()

//**Async/Await/Fetch */

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();

    console.log(data)
}

fetchUsers()