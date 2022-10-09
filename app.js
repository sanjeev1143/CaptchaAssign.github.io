const url = "https://api.unsplash.com/photos/random/?client_id=amaqjpYDIQf1IiXjsz28R5hF_d5zh1mAJ9PCz2GMlIw"


const checkbox = document.getElementsByClassName("checkbox");

function generateImg(e) {

    let iurl = "";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            iurl = (data.urls.full);
        })
        .catch(alert("error"))
    const a = document.querySelectorAll(`.item:nth-child(${e})`)[0].children[1].attributes[1].value;
    console.log(iurl);
    console.log(a);
    console.log(document.getElementById(`${a}`).src);
    setTimeout(() => {
        document.getElementById(`${e}`).checked = false;
    }, 2000)

    document.getElementById(`${a}`).src = iurl;
    console.log("hii");
}