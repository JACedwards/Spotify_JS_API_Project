console.log('test')



const getAuth = async () => {
    // const <cid goes here>
    // const <ckey goes here>
    const encodedString = btoa(clientID + ":" + clientSecret)
    const response = await fetch('https://accounts.spotify.com/api/token',
    {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${encodedString}`,
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    }
    );
    let token = await response.json()
    console.log(token)
    return token.access_token
}

const loadToken = async () => {
    const token = await getAuth();
    console.log(token);
    return token
}

// returned_value = loadToken();
// console.log(returned_value)

const getSong = async () =>{
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:battlefield+artist:all%20the%20kings%20men&limit=1`,
        {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        });
    data = await data.json();
    console.log(data)
    console.log(data.tracks.items[0].preview_url);
    let audioobj = new Audio(data.tracks.items[0].preview_url);
    audioobj.play();
}

let playbutton = document.querySelector('#pbtn')
playbutton.addEventListener('click', () => {getSong();});