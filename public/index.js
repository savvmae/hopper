//this was just a thought, I was hoping to add an anchor tag to our gif portraits.
//we will delete before submission

var a = document.createElement('a');
a.setAttribute('href', 'https://github.com/roxyfaye');
a.innerHTML = '';
document.getElementById('roxyGif')[0].appendChild(a);
document.getElementById('roxyGif')[0].innerHTML += '<a href="' + desiredLink + '"></a>

var b = document.createElement('b');
b.setAttribute('href', 'https://github.com/savvmae');
b.innerHTML = '';
document.getElementById('savGif')[0].appendChild(b);
document.getElementById('savGif')[0].innerHTML += '<a href="' + desiredLink + '"></a>

var c = document.createElement('c');
c.setAttribute('href', 'https://github.com/danjsul3');
c.innerHTML = '';
document.getElementById('dannyGif')[0].appendChild(c);
document.getElementById('dannyGif')[0].innerHTML += '<a href="' + desiredLink + '"></a>