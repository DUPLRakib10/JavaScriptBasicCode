let headers = document.getElementsByClassName('header');
headers = Array.from(headers);

headers.forEach((header,index) => { 
    console.log(header.className);
 header.style.color =`red`;
 header.style.backgroundColor=`black`;
 header.style.padding ='15px';
  header.innerText =`Hello world : ${index}`;
});

console.log(headers);

/* Creating Post 6 */

const tr = document.createElement('tr');
const td1 =document.createElement('td1');
td1.className ='post';
td1.innerText='post 6';

const td2 = document.createElement('td');
const span = document.createElement('span');
span.className='fa fa-times float-right pr-3';
td2.append(span);
tr.append(td1,td2);
document.querySelector('tbody').append(tr);

/* Event Listener */

