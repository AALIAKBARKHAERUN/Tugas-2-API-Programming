var container = document.querySelector('div.content-wrapper')
var input = document.querySelector('input.input')
var submit = document.querySelector('button.submit')

function getData(query) {

    submit.innerHTML = 'loading'
    
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://stack-overflow.p.rapidapi.com/?q=" + query +"&size=30",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "491206e31fmsh6a7e84772316878p1cba33jsnab992c16e696",
            "X-RapidAPI-Host": "stack-overflow.p.rapidapi.com"
        }
    }).done(function (response) {
        console.log(response);

        var list = response.data.map( (e) => {
            return `
                <div class="d-flex text-muted pt-3">
                    <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                    <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                        <div class="d-flex justify-content-between">
                            <strong class="text-gray-dark">${e.title}</strong>
                            <a href="${e.link}">lihat pertanyaan</a>
                        </div>
                        <span class="badge bg-success">${e.is_answered ? 'terjawab' : 'belum terjawab'}</span>
                        <small>total jawaban : ${e.answer_count}</small>
                    </div>
                </div>
            `
        }).join('')

        container.innerHTML = list

        submit.innerHTML = 'search'
    });
        
}

submit.addEventListener('click', function(){
    getData(input.value ?? '')
})