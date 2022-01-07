let ui = new firebaseui.auth.AuthUI(auth);
let login = document.querySelector('.login');
const blogSection = document.querySelector('.blogs-section');

auth.onAuthStateChanged((user) => {
    if(user){
        login.style.display = "none";
       const login2 = true;
    } else{
        setupLoginButton();
    }
})

const setupLoginButton = () => {
    ui.start("#loginUI", {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectURL){
                login.style.display = "none";
                return false;
            }
        },
        signInFlow: "popup",
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    })
}

// fetch user written blogs
db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            createBlog(blog);
        }
    })
}).catch((error) =>{
    console.log(error + "Error getting blogs");
})

// const getUserWrittenBlogs = () => {
    
//     db.collection("blogs").where("author", "==", auth.currentUser.email.split('@')[0]).get().then((blogs) => {
//         blogs.forEach((blog) => {
//             console.log("blog created")
//             createBlog(blog);
//         })
//     })
//     .catch((error) => {
//         console.log("Error getting blogs");
//     })
// }

// getUserWrittenBlogs();

const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
        <div class="blog-card">
            <img src="${data.bannerImage}" class="blog-image" alt="">
            <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
            <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
            <a href="/${blog.id}" class="btn dark">read</a>
            <a href="/${blog.id}/editor" class="btn grey">edit</a>
            <a href="#" onclick="deleteBlog('${blog.id}')" class="btn danger">delete</a>
        </div>
    `;
}

const deleteBlog = (id) => {
    db.collection("blogs").doc(id).delete().then(() => {
        location.reload();
    })
    .catch((error) => {
        console.log("Error deleting the blog");
    })
}