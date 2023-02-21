window.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#form-search').addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = document.querySelector('#username').value ;
        let http = new API() ;
        let ui = new Ui() ;
        try{
            const {profile , repos} = await http.getInfo(username) ;
            ui.render(profile , repos) ;
            ui.alert("Successed")
        }catch(error){
            ui.alert(error , "danger")
        }
    })
})