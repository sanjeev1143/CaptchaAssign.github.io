const url = "https://api.unsplash.com/photos/random/?client_id=W3uhXQo9EtpD1J6YzfOggPx6uv73YNl7QOuHbBEhcFc"


const checkbox = document.getElementsByClassName("checkbox");

async function generateImg(e) {

    let iurl = "";
    await fetch(url)
        .then(res => res.json())
        .then(data => {

            iurl = (data.urls.small);

        })
    const a = document.querySelectorAll(`.item:nth-child(${e})`)[0].children[1].attributes[1].value;
    setTimeout(() => {
        document.getElementById(`${e}`).checked = false;
    }, 2000)

    document.getElementById(`${a}`).src = iurl;

}
