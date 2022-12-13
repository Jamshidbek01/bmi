const btn = document.querySelector('.btn')
// console.log(bmi);
btn.addEventListener('click', function () {
    const ism = document.querySelector('.ism').value;
    const vazn = document.querySelector('.vazn').value;
    const boy = document.querySelector('.boy').value;
    const text = document.querySelector('.text')
    const img = document.querySelector('.img')
    const bmi = vazn / (boy * boy) * 10000;
    if (bmi < 18.5) {
        text.innerHTML = ism + ' siz judayam ozg`insizoov!!!'
        img.innerHTML = '<img src="image/1.png">'
        document.querySelector('input').style.backgroundColor = 'orange';
        text.style.color = 'orange';
    } else if (18.5 <= bmi && bmi <= 24.9) {
        text.innerHTML = ism + ' siz juda ham zo`r holatdasiz, sog`lomsiz!'
        img.innerHTML = '<img src="image/2.png">'
        document.querySelector('input').style.backgroundColor = 'rgb(153, 255, 0)';
        text.style.color = 'rgb(153, 255, 0)';
    } else if (25 <= bmi && bmi <= 29.9) {
        text.innerHTML = ism + ' siz normal holatdasiz'
        img.innerHTML = '<img src="image/3.png">'
        document.querySelector('input').style.backgroundColor = 'rgb(153, 255, 0)';
        text.style.color = 'rgb(153, 255, 0)';
    } else if (30 <= bmi && bmi <= 34.9) {
        text.innerHTML = ism + ' siz ozishigiz kerak!'
        img.innerHTML = '<img src="image/4.png">'
        document.querySelector('input').style.backgroundColor = 'orange';
        text.style.color = 'orange';
    } else if (35 <= bmi) {
        text.innerHTML = ism + ' siz... nima deyishga ham hayronman, juda ham ... siz'
        img.innerHTML = '<img src="image/5.png">'
        document.querySelector('input').style.backgroundColor = 'red';
        text.style.color = 'red';
    }
    console.log(bmi);
})
