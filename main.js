
    console.log(fetch('https://randomuser.me/api/')
    .then(Res => Res.json() )
    .then(data => {
            console.log(data.results['0'])
    })
    
}
