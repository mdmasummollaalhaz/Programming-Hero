const priya = 'Hossain ali';
const meye = "it is a girl";
const boy = `it is a boy`;
const multiLine = 'first line. \n' + 'second line \n' + 'third line';

const multiLineNew = `
this is multi line
this is second line
this is third line
`

const friends = ['ali', 'abul', 'hossain', 'kabir'];
const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>'
const old2 = '<h3 class="friend-name">Friend-5 '+ count + ' </h3>';
const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;

const first = 'Mamun';
const last = 'khan';
const fullOld = first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}. Has money ${friends.length + 10 * 500}`;
console.log(fullNew);
