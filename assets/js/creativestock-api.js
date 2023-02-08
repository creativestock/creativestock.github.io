
/*
| -------------------------------------------------------------------
| function for landscaoe illustration only
| -------------------------------------------------------------------
|  note: source data from github
|
*/
function tampilkanCategoryLandscape() {

    $.getJSON('https://creativestock.github.io/api-creativestock/category/creativestock_landscape.json', function (data) {
        let illustration = data.illustration;
        $.each(illustration, function (i, data) {
            $('#list-illustration').append(`<div class="col-lg-3 col-md-4 col-sm-6 col-6">
            <div class="card rounded-4 mb-4">
                <div class="card-body">
                    <div class="text-center">
                        <figure class="primary">
                            <img src="`+ data.thumbnail + `" alt="img-thumbnail" class="w-100">
                            <span class="material-symbols-rounded">
                                file_download
                            </span>
                            <a href="`+ data.download + `" target="_blank"></a>
                            <div class="name__illustartion">
                                <h6 class="name fw-bold">`+ data.nama + `</h6>
                                <small class="label text-secondary">illustration</small>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>`)
        });
    });
}


/*
| -------------------------------------------------------------------
| get data landscape illustration
| -------------------------------------------------------------------
|  note: source data from github
|
*/
tampilkanCategoryLandscape();

$().on(function () {

    $.getJSON('https://creativestock.github.io/api-creativestock/category/creativestock_landscape.json', function (data) {
        let content = '';
        $('#list-illustration').html(content);
    });
});



/*
| -------------------------------------------------------------------
| function for top illustration only
| -------------------------------------------------------------------
|  note: source data from github
|
*/
function tampilkanCategoryTopIllustration() {

    $.getJSON('https://creativestock.github.io/api-creativestock/category/top_illustration.json', function (data) {
        let topIllustration = data.topIllustration;
        $.each(topIllustration, function (i, data) {
            $('#top-illustration').append(`<div class="col-lg-3 col-md-4 col-sm-6 col-6">
            <div class="card rounded-4 mb-4">
                <div class="card-body">
                    <div class="text-center">
                        <figure class="primary">
                            <img src="`+ data.thumbnail + `" alt="img-thumbnail" class="w-100">
                            <span class="material-symbols-rounded">
                                file_download
                            </span>
                            <a href="`+ data.download + `" target="_blank"></a>
                            <div class="name__illustartion">
                                <h6 class="name fw-bold">`+ data.nama + `</h6>
                                <small class="label text-secondary">illustration</small>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>`)
        });
    });
}

/*
| -------------------------------------------------------------------
| get data top illustration only
| -------------------------------------------------------------------
|  note: source data from github
|
*/
tampilkanCategoryTopIllustration();

$().on(function () {

    $.getJSON('https://creativestock.github.io/api-creativestock/category/top_illustration.json', function (data) {
        let content = '';
        $('#top-illustration').html(content);
    });
});



/*
| -------------------------------------------------------------------
| function for web design illustration only
| -------------------------------------------------------------------
|  note: source data from github
|
*/
function tampilkanCategoryWebDesign() {

    $.getJSON('https://creativestock.github.io/api-creativestock/category/web_design_illustration.json', function (data) {
        let illustration = data.illustration;
        $.each(illustration, function (i, data) {
            $('#list-illustration-web-design').append(`<div class="col-lg-3 col-md-4 col-sm-6 col-6">
            <div class="card rounded-4 mb-4">
                <div class="card-body">
                    <div class="text-center">
                        <figure class="primary">
                            <img src="`+ data.thumbnail + `" alt="img-thumbnail" class="w-100">
                            <span class="material-symbols-rounded">
                                file_download
                            </span>
                            <a href="`+ data.download + `" target="_blank"></a>
                            <div class="name__illustartion">
                                <h6 class="name fw-bold">`+ data.nama + `</h6>
                                <small class="label text-secondary">illustration</small>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>`)
        });
    });
}

/*
| -------------------------------------------------------------------
| get data landscape illustration
| -------------------------------------------------------------------
|  note: source data from github
|
*/
tampilkanCategoryWebDesign();

$().on(function () {

    $.getJSON('https://creativestock.github.io/api-creativestock/category/web_design_illustration.json', function (data) {
        let content = '';
        $('#list-illustration-web-design').html(content);
    });
});


/*
| -------------------------------------------------------------------
| function for wProfession illustration only
| -------------------------------------------------------------------
|  note: source data from github
|
*/
function tampilkanCategoryProfession() {

    $.getJSON('https://creativestock.github.io/api-creativestock/category/profession_illustration.json', function (data) {
        let illustration = data.illustration;
        $.each(illustration, function (i, data) {
            $('#list-illustration-profession').append(`<div class="col-lg-3 col-md-4 col-sm-6 col-6">
            <div class="card rounded-4 mb-4">
                <div class="card-body">
                    <div class="text-center">
                        <figure class="primary">
                            <img src="`+ data.thumbnail + `" alt="img-thumbnail" class="w-100">
                            <span class="material-symbols-rounded">
                                file_download
                            </span>
                            <a href="`+ data.download + `" target="_blank"></a>
                            <div class="name__illustartion">
                                <h6 class="name fw-bold">`+ data.nama + `</h6>
                                <small class="label text-secondary">illustration</small>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>`)
        });
    });
}

/*
| -------------------------------------------------------------------
| get data Profession illustration
| -------------------------------------------------------------------
|  note: source data from github
|
*/
tampilkanCategoryProfession();

$().on(function () {

    $.getJSON('https://creativestock.github.io/api-creativestock/category/profession_illustration.json', function (data) {
        let content = '';
        $('#list-illustration-profession').html(content);
    });
});


