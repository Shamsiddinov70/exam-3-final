var elWrapper = elFind(".wrapper");

function render(posts) {
    for (var i = 0; i < posts.length; i++) {
        var post = `
        <div class="main w-75 mx-auto border border-primary p-4 rounded shadow-lg p-3 mb-5 bg-white rounded">
            <div class="main-wrapper">
                <div class="top-names text-light d-flex">
                    <img class="rounded-circle" src="https://picsum.photos/id/1/70" alt="picsum-img">
                    <div class="username ms-3">
                        <p class="m-0 fs-3"><b>${posts[i].user.name}</b></p>
                        <small class="m-0 fs-5">@${posts[i].user.username}</small>
                    </div>
                </div>
                <h3 class="title m-0 mt-5 mb-3 text-light">${posts[i].title}</h3>
                <p class="text m-0 text-light">${posts[i].body}</p>
                <div class="div d-flex align-items-center justify-content-between">
                    <a class="btn btn-success mb-2 mt-3" data-bs-toggle="collapse" href="#collapseExample${i}" role="button"
                        aria-expanded="true" aria-controls="collapseExample">
                        Comments
                    </a>
                </div>
            </div>

            <div class="collapse js-collaper text-light" id="collapseExample${i}"></div>



        </div>`;

        var wrapp = document.createElement("div");
        wrapp.innerHTML = post;
        elWrapper.appendChild(wrapp);
        // console.log(elWrapper)

        let collWrapp = document.querySelectorAll(`.js-collaper`)[i];

        for (var j = 0; j < posts[i].comments.length; j++) {
            var collapse = `<div>
                <h4 class="card card-body border-0 border-bottom rounded-0 pb-4">
                ${posts[i].comments[j].name}
                </h4>
                <p class="ps-3">${posts[i].comments[j].body}</p>
            </div>`;
            var commWrap = document.createElement("div");

            commWrap.innerHTML = collapse;
            collWrapp.appendChild(commWrap);
        }

        for (var k = 0; k < posts[i].user; k++) {

        }

    }
}

render(posts);
