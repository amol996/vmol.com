

document.getElementById('personal-desc1').classList.remove('displayNone');
document.getElementById('myTitle1').addEventListener('click', function () {
    document.getElementById('personal-desc1').classList.remove('displayNone');
    document.getElementById('personal-desc2').classList.add('displayNone');
    document.getElementById('personal-desc3').classList.add('displayNone');
});
document.getElementById('myTitle2').addEventListener('click', function () {
    document.getElementById('personal-desc2').classList.remove('displayNone');
    document.getElementById('personal-desc1').classList.add('displayNone');
    document.getElementById('personal-desc3').classList.add('displayNone');
});
document.getElementById('myTitle3').addEventListener('click', function () {
    document.getElementById('personal-desc3').classList.remove('displayNone');
    document.getElementById('personal-desc2').classList.add('displayNone');
    document.getElementById('personal-desc1').classList.add('displayNone');
});

