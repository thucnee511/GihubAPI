//api
// ad76feffce527af20e52
//tham khảo api của git tại : https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps

//Fetch Profile: https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}

//Fetch Repo: https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}
class API {
    constructor() {
        this.client_id = "ad76feffce527af20e52"
        this.client_secret = "9fde082d5a7501ddd93b77147cb5b5cbf9fb5b29"
    }

    async getInfo(username) {
        // const profile = await fetch(
        //     `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        // ).then(response => {
        //     if (response.ok) return response.json();
        //     else throw new Error(response.statusText)
        // })
        // const repos = await fetch(
        //     `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`
        // ).then(response => {
        //     if (response.ok) return response.json();
        //     else throw new Error(response.statusText)
        // })
        const [profile, repos] = await Promise.all([
            fetch(
                `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
            ).then(response => {
                if (response.ok) return response.json();
                else throw new Error(response.statusText)
            }),
            fetch(
                `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`
            ).then(response => {
                if (response.ok) return response.json();
                else throw new Error(response.statusText)
            })
        ])
        return {
            profile,
            repos
        }
    }
}

// let http = new API();
// http.getInfo("thucnee511")
//     .then(value => {
//         console.log(value);
//     })
//     .catch(error => {
//         console.log(error);
//     })