console.log('test')


const getAuth = async () => {
    const clientID = 'c2664ec3b0c04d188b08620542866fae'
    const clientSecret = '78763df6e57c44d08a07ae821cfbe8a0'
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
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:Hallelujah+artist:Pentatonix&limit=1`,
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
    let stop_button = document.querySelector('#stop_song')
    stop_button.addEventListener('click', () => {audioobj.pause();});
}

const getSong2 = async () =>{
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:ring%20of%20fire+artist:home%20free&limit=1`,
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
    let stop_button = document.querySelector('#stop_song2')
    stop_button.addEventListener('click', () => {audioobj.pause();});
}


const getSong3 = async () =>{
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:if%20ye%20love%20me+artist:Chanticleer&limit=1`,
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
    let stop_button = document.querySelector('#stop_song3')
    stop_button.addEventListener('click', () => {audioobj.pause();});
}


const getSong4 = async () =>{
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:mary%20did%20you%20know+artist:Pentatonix&limit=1`,
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
    let stop_button = document.querySelector('#stop_song4')
    stop_button.addEventListener('click', () => {audioobj.pause();});
}


const getSong5 = async () =>{
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:elvira+artist:home%20free&limit=1`,
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
    let stop_button = document.querySelector('#stop_song5')
    stop_button.addEventListener('click', () => {audioobj.pause();});
}


const getSong6 = async () =>{
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
    let stop_button = document.querySelector('#stop_song6')
    stop_button.addEventListener('click', () => {audioobj.pause();});
}


const getSong7 = async () =>{
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:bohemian%20rhapsody+artist:Pentatonix&limit=1`,
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
    let stop_button = document.querySelector('#stop_song7')
    stop_button.addEventListener('click', () => {audioobj.pause();});
}


const getSong8 = async () =>{
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:if%20ye%20love%20me+artist:tallis%20scholars&limit=1`,
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
    let stop_button = document.querySelector('#stop_song8')
    stop_button.addEventListener('click', () => {audioobj.pause();});
}


const getSong9 = async () =>{
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:the%20phantom%20of%20the%20opera+artist:voiceplay&limit=1`,
        {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        });
    data = await data.json();
    let audioobj = new Audio(data.tracks.items[0].preview_url);
    audioobj.play();
    let stop_button = document.querySelector('#stop_song9')
    stop_button.addEventListener('click', () => {audioobj.pause();});
}


let playbutton = document.querySelector('#pbtn')
playbutton.addEventListener('click', () => {getSong();});

let playbutton2 = document.querySelector('#pbtn2')
playbutton2.addEventListener('click', () => {getSong2();});

let playbutton3 = document.querySelector('#pbtn3')
playbutton3.addEventListener('click', () => {getSong3();});

let playbutton4 = document.querySelector('#pbtn4')
playbutton4.addEventListener('click', () => {getSong4();});

let playbutton5 = document.querySelector('#pbtn5')
playbutton5.addEventListener('click', () => {getSong5();});

let playbutton6 = document.querySelector('#pbtn6')
playbutton6.addEventListener('click', () => {getSong6();});

let playbutton7 = document.querySelector('#pbtn7')
playbutton7.addEventListener('click', () => {getSong7();});

let playbutton8 = document.querySelector('#pbtn8')
playbutton8.addEventListener('click', () => {getSong8();});

let playbutton9 = document.querySelector('#pbtn9')
playbutton9.addEventListener('click', () => {getSong9();});


// stop button attempt begin
// let stop_button = document.querySelector('stop_song')
// stop_button.addEventListener('click', () => {audioobj.pause();});
// stop button attempt begin











// 1****Pentatonix:  Hallelujah
// `https://api.spotify.com/v1/search?type=track&q=track:Hallelujah+artist:Pentatonix&limit=1`
// image: (size 224 x 224) (saved to root folder)

//2 ****Pentatonix:
//`https://api.spotify.com/v1/search?type=track&q=track:mary%20did%20you%20know+artist:Pentatonix&limit=1`
//image: size (225 x 225) (saved to root folder)

// *3??Pentatonix:  Bohemian Rhapsody
//`https://api.spotify.com/v1/search?type=track&q=track:bohemian%20rhapsody+artist:Pentatonix&limit=1`


//4**Chanticleer:  un flambeau jeanette isabella
//`https://api.spotify.com/v1/search?type=track&q=track:Un%20flambeau%20Jeanette,%20Isabella+artist:Chanticleer&limit=1`

//**Chanticleer:  Angels we have heard on high
//`https://api.spotify.com/v1/search?type=track&q=track:Angels%20we%20have%20heard%20on%20high+artist:Chanticleer&limit=1`


//5**chanticleer */ If ye love me
//`https://api.spotify.com/v1/search?type=track&q=track:if%20ye%20love%20me+artist:Chanticleer&limit=1`


//6**voiceplay:  phantom of the opera
//`https://api.spotify.com/v1/search?type=track&q=track:the%20phantom%20of%20the%20opera+artist:voiceplay&limit=1`


//***voice play:  Into the unknown
//`https://api.spotify.com/v1/search?type=track&q=track:into%20the%20unknown%20(reprise)+artist:voiceplay&limit=1` */

//***Home Free:  ring of fire
//`https://api.spotify.com/v1/search?type=track&q=track:ring%20of%20fire+artist:home%20free&limit=1` */


//****Home Free:  Elvira
//`https://api.spotify.com/v1/search?type=track&q=track:elvira+artist:home%20free&limit=1` */

//****Talis Scholars:  If ye love me
//`https://api.spotify.com/v1/search?type=track&q=track:if%20ye%20love%20me+artist:tallis%20scholars&limit=1` */
    //image 225x225

//****All the King's Men:  Battlefield
//`https://api.spotify.com/v1/search?type=track&q=track:battlefield+artist:all%20the%20kings%20men&limit=1`  


//UGA Noteworthy: baby
//`https://api.spotify.com/v1/search?type=track&q=track:baby+artist:uga%20noteworthy&limit=1`

//uga noteworth:  final countdown
//`https://api.spotify.com/v1/search?type=track&q=track:final%20countdown+artist:uga%20noteworthy&limit=1`


//****best  of theirs? uga noteworthy wonderwall
//`https://api.spotify.com/v1/search?type=track&q=track:wonderwall+artist:uga%20noteworthy&limit=1`
