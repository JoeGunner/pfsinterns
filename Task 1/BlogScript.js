var blogEntries = JSON.parse(localStorage.getItem("blogEntries")) || [];

function displayOtherPosts() {
    var OtherPosts = document.getElementById("OtherPosts");
    OtherPosts.value = "";

    blogEntries.forEach(function(entry) {
        OtherPosts.value += `Date: ${entry.date}\nName: ${entry.name}\nBlog Post: ${entry.blogpost}\n\n`;
    });
}

window.onload = displayOtherPosts;

document.getElementById("PostCreate").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var blogpost = document.getElementById("blogpost").value;

    var date = new Date();
    var formattedDate = date.toLocaleDateString();

    blogEntries.push({
        date: formattedDate,
        name: name,
        blogpost: blogpost
    });

    localStorage.setItem("blogEntries", JSON.stringify(blogEntries));

    document.getElementById("Date").textContent = formattedDate;
    document.getElementById("Name").textContent = name;
    document.getElementById("Blogpost").textContent = blogpost;

    displayOtherPosts();
});
