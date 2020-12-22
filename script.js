function createEle(element, className=""){
    let elem = document.createElement(element);
    elem.setAttribute('class', className);
    return elem;
}

let main = createEle('div','main');


//head
let head = createEle('div','head');
let img = createEle('img');
img.setAttribute('src', 'pp.jpg');
img.setAttribute('style', 'border-radius: 50%;')
let lft = createEle('div','lft');
let hh1 = createEle('h1', 'center neg');
hh1.innerHTML = 'Pavan Kumar'
head.append(img, lft, hh1);

//div1
let p1Div = createEle('div');
let para1 = createEle('p','center');
para1.innerHTML = 'M Pavan Kumar, Hyderabad 500 059 | 999-999-9999 | xyz@gmail.com | www.kickresume.com';
p1Div.append(para1);

let hr = createEle('hr');

//left div

let left = createEle('div','left');

//h2

let lh21 = createEle('h2');
lh21.innerHTML = '<i class="fas fa-user-circle dotted"></i> Profile'

let ldiv1 = createEle('div');
let ldivp1 = createEle('p');
ldivp1.innerHTML = 'An IT professional with expertise in java and web-development,'+
'who is able to work well both in team environment as well'+
'as in own initiative.'+
'An enthusiastic person who is always curious about exploring new things';
ldiv1.append(ldivp1);
let lh22 = createEle('h2');
lh22.innerHTML = '<i class="fas fa-flask dotted"></i> Skills';

// second div
let ldiv2 = createEle('div');
let ldiv2h41 = createEle('h4', 'center');
ldiv2h41.innerHTML = 'Technical Skills';
let ldiv2ul1 = createEle('ul', 'none');
let br  = createEle('div');
br.innerHTML ="<br></br>"


let ldiv2ulli1 = createEle('li');
let ldiv2ulli1div = createEle('div', 'leeft');
ldiv2ulli1div.innerHTML = 'Java';
let ldiv2ulli1div2 = createEle('div','container');
ldiv2ulli1div2.setAttribute('style','margin-bottom: 12px;')
let ldiv2ulli1div2div = createEle('div', 'cpp');
ldiv2ulli1div2div.setAttribute('style', 'width:80%');
let ldiv2ulli1div2divi1 = createEle('i','fad fa-circle');
ldiv2ulli1div2div.append(ldiv2ulli1div2divi1);
ldiv2ulli1div2.append(ldiv2ulli1div2div);
ldiv2ulli1.append(ldiv2ulli1div, ldiv2ulli1div2);


let ldiv2ulli2 = createEle('li');
let ldiv2ulli2div = createEle('div', 'leeft');
ldiv2ulli2div.innerHTML = 'Java Script';
let ldiv2ulli2div2 = createEle('div','container');
ldiv2ulli2div2.setAttribute('style','margin-bottom: 12px;')
let ldiv2ulli2div2div = createEle('div', 'cpp');
ldiv2ulli2div2div.setAttribute('style', 'width:80%');
let ldiv2ulli2div2divi1 = createEle('i','fad fa-circle');
ldiv2ulli2div2div.append(ldiv2ulli2div2divi1);
ldiv2ulli2div2.append(ldiv2ulli2div2div);
ldiv2ulli2.append(ldiv2ulli2div, ldiv2ulli2div2);


let ldiv2ulli3 = createEle('li');
let ldiv2ulli3div = createEle('div', 'leeft');
ldiv2ulli3div.innerHTML = 'Angular';
let ldiv2ulli3div2 = createEle('div','container');
ldiv2ulli3div2.setAttribute('style','margin-bottom: 12px;')
let ldiv2ulli3div2div = createEle('div', 'cpp');
ldiv2ulli3div2div.setAttribute('style', 'width:60%');
let ldiv2ulli3div2divi1 = createEle('i','fad fa-circle');
ldiv2ulli3div2div.append(ldiv2ulli3div2divi1);
ldiv2ulli3div2.append(ldiv2ulli3div2div);
ldiv2ulli3.append(ldiv2ulli3div, ldiv2ulli3div2);

ldiv2ul1.append(ldiv2ulli1,ldiv2ulli2,ldiv2ulli3);

let ldiv2h42 = createEle('h4', 'center');
ldiv2h42.setAttribute('style', 'padding-top:85px')
ldiv2h42.innerHTML = 'Additional Skills';

let ldiv2ul2 = createEle('ul', 'none');
let ldiv2ulli4 = createEle('li');
let ldiv2ulli4div = createEle('div', 'leeft');
ldiv2ulli4div.innerHTML = 'ITES';
let ldiv2ulli4div2 = createEle('div','container');
ldiv2ulli4div2.setAttribute('style','margin-bottom: 12px;')
let ldiv2ulli4div2div = createEle('div', 'cpp');
ldiv2ulli4div2div.setAttribute('style', 'width:60%');
let ldiv2ulli4div2divi1 = createEle('i','fad fa-circle');
ldiv2ulli4div2div.append(ldiv2ulli4div2divi1);
ldiv2ulli4div2.append(ldiv2ulli4div2div);
ldiv2ulli4.append(ldiv2ulli4div, ldiv2ulli4div2);

let ldiv2ulli5 = createEle('li');
let ldiv2ulli5div = createEle('div', 'leeft');
ldiv2ulli5div.innerHTML = 'MS Excel';
let ldiv2ulli5div2 = createEle('div','container');
ldiv2ulli5div2.setAttribute('style','margin-bottom: 12px;')
let ldiv2ulli5div2div = createEle('div', 'cpp');
ldiv2ulli5div2div.setAttribute('style', 'width:50%');
let ldiv2ulli5div2divi1 = createEle('i','fad fa-circle');
ldiv2ulli5div2div.append(ldiv2ulli5div2divi1);
ldiv2ulli5div2.append(ldiv2ulli5div2div);
ldiv2ulli5.append(ldiv2ulli5div, ldiv2ulli5div2);

ldiv2ul2.append(ldiv2ulli4,ldiv2ulli5);

ldiv2.append(ldiv2h41, ldiv2ul1, ldiv2h42,ldiv2ul2);

// end of second div

let lh23 = createEle('h2');
lh23.innerHTML = '<i class="fas fa-briefcase dotted"></i> Work Experience';


// third div
let ldiv3 = createEle('div');
let ldiv3p1 = createEle('p');
let ldiv3p1b = createEle('b', 'font');
ldiv3p1b.innerHTML = 'Java Developer';
let ldiv3p1span = createEle('span');
ldiv3p1span.setAttribute('style', 'float: right;')
ldiv3p1span.innerHTML = '10/2019 - 11/2020';
ldiv3p1.append(ldiv3p1b, ldiv3p1span);
let ldiv3p2 = createEle('p');
ldiv3p2.innerHTML = 'SD Mactec IT';

ldiv3ul = createEle('ul');
ldiv3ulli1 = createEle('li');
ldiv3ulli1.innerHTML = 'Developing a front-end website and ensuring responsiveness of the website'
ldiv3ulli2 = createEle('li');
ldiv3ulli2.innerHTML = 'Designing user interactions on web pages'
ldiv3ulli3 = createEle('li');
ldiv3ulli3.innerHTML = 'Developing back end part of the application with maintaining the code quality'
ldiv3ulli4 = createEle('li');
ldiv3ulli4.innerHTML = 'Ensuring security and scalability of the applications'
ldiv3ul.append(ldiv3ulli1, ldiv3ulli2, ldiv3ulli3, ldiv3ulli4);
ldiv3.append(ldiv3p1,ldiv3p2,ldiv3ul);

// end of third div

left.append(lh21, ldiv1, lh22, ldiv2, br,lh23, ldiv3);

//left div completed

let vertical = createEle('div','vertical');

//right div started
let right = createEle('div','right');

let rh21 = createEle('h2');
rh21.innerHTML = '<i class="fas fa-briefcase dotted"></i> Work Experience';

//right first div

let rdiv1 = createEle('div');
let rdiv1p1 = createEle('p');
let rdiv1p1b = createEle('b', 'font');
rdiv1p1b.innerHTML = 'Java Developer';
let rdiv1p1span = createEle('span');
rdiv1p1span.setAttribute('style', 'float: right;')
rdiv1p1span.innerHTML = '07/2018 - 06/2019';
rdiv1p1.append(rdiv1p1b, rdiv1p1span);
let rdiv1p2 = createEle('p');
rdiv1p2.innerHTML = 'Creadass';

rdiv1ul = createEle('ul');
rdiv1ulli1 = createEle('li');
rdiv1ulli1.innerHTML = 'Maintaining and Monitoring the devices'
rdiv1ulli2 = createEle('li');
rdiv1ulli2.innerHTML = 'Keeping the software versions up to date'
rdiv1ulli3 = createEle('li');
rdiv1ulli3.innerHTML = 'Ensuring safety and security for softwares and hardwares'
rdiv1ulli4 = createEle('li');
rdiv1ulli4.innerHTML = 'Troubleshooting problems and providing effiecient solutions'
rdiv1ul.append(rdiv1ulli1, rdiv1ulli2, rdiv1ulli3, rdiv1ulli4);
rdiv1.append(rdiv1p1,rdiv1p2,rdiv1ul);

//end of right first div

let rh22 = createEle('h2');
rh22.innerHTML = '<i class="fas fa-graduation-cap dotted"></i> Education';

// right second div

rdiv2 = createEle('div');
rdiv2p1 = createEle('p');
rdiv2p1b = createEle('b', 'font');
rdiv2p1b.innerHTML = 'Bachelor of Technology';
rdiv2p1span = createEle('span');
rdiv2p1span.setAttribute('style', 'float: right;');
rdiv2p1span.innerHTML = '2014 - 2018';
rdiv2p1.append(rdiv2p1b, rdiv2p1span);
rdiv2p2 = createEle('p');
rdiv2p2.innerHTML = 'J.B. Institute of Engineering and Technology'
rdiv2.append(rdiv2p1, rdiv2p2);

// end of second div


// right third div

rdiv3 = createEle('div');
rdiv3p1 = createEle('p');
rdiv3p1b = createEle('b', 'font');
rdiv3p1b.innerHTML = 'Intermediate';
rdiv3p1span = createEle('span');
rdiv3p1span.setAttribute('style', 'float: right;');
rdiv3p1span.innerHTML = '2012 - 2014';
rdiv3p1.append(rdiv3p1b, rdiv3p1span);
rdiv3p2 = createEle('p');
rdiv3p2.innerHTML = 'Narayana Junior College'
rdiv3.append(rdiv3p1, rdiv3p2);

// end of third div

// right fourth div

rdiv4 = createEle('div');
rdiv4p1 = createEle('p');
rdiv4p1b = createEle('b', 'font');
rdiv4p1b.innerHTML = 'SSC';
rdiv4p1span = createEle('span');
rdiv4p1span.setAttribute('style', 'float: right;');
rdiv4p1span.innerHTML = '2012';
rdiv4p1.append(rdiv4p1b, rdiv4p1span);
rdiv4p2 = createEle('p');
rdiv4p2.innerHTML = 'Cambridge High School'
rdiv4.append(rdiv4p1, rdiv4p2);

// end of fourth div

right.append(rh21, rdiv1, rh22, rdiv2, rdiv3, rdiv4);

main.append(head, p1Div,hr ,left, vertical, right);


document.body.append(main);





