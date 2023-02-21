class Ui {
    render(profile, repos) {
        const _main = document.querySelector("main");
        if (_main) _main.remove();

        const cardString = repos.reduce((total, current) => {
            return total += `
            <div class="card p-2 mb-3">
                <a href="${current.html_url}" class="mb-3 fs-4">${current.name}</a>
                <p class="mb-3">${current.description}</p>
                <div class="mb-3">
                    <span class="badge bg-primary">${current.language}</span>
                    <span class="badge bg-info">${current.stargazora_count}</span>
                    <span class="badge bg-success">${current.forks_count}</span>
                </div>
            </div>
            `
        }, "");

        const main = document.createElement('main')
        main.innerHTML = `
        <div class="container">
            <div class="row">
                <!-- bên trái -->
                <div class="col-4">
                    <figure>
                        <img src="${profile.avatar_url}" style="width:150px;height:150px;object-fit: cover;">
                    </figure>
                    <h1 class="fs-3">${profile.login}</h1>
                    <p>${profile.bio}</p>
                    <a href="${profile.html_url}" target="_blank" class="btn btn-primary">view profile</a>
                    <div class="mb-3">
                        <span class="badge bg-primary">Following: ${profile.following}</span>
                        <span class="badge bg-info">Repos: ${profile.public_repos}</span>
                        <span class="badge bg-success">Follower: ${profile.followers}</span>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item">
                            Website:<a href="${profile.blog}">Blog</a>
                        </li>
                        <li class="list-group-item">
                            Location: ${profile.location}
                        </li>
                        <li class="list-group-item">
                            Create at: ${profile.created_at}
                        </li>
                        <li class="list-group-item">
                            Twiter: ${profile.twitter_username}
                        </li>
                    </ul>
                </div>
                <!-- bên phải -->
                <div class="col-8">
                    <h2>Repositories</h2>
                    ${cardString}
                </div>
            </div>
        </div>
        `;
        document.body.insertBefore(main, document.querySelector("footer"));
    }

    alert(message , style = 'success'){
        const alertNode = document.createElement('div')
        alertNode.className = `alert alert-${style}`
        alertNode.innerHTML = message ;
        document.querySelector('#notification').appendChild(alertNode) ;
        setTimeout(() => {
            alertNode.remove() ;
        }, 2000);
    }
}