console.log('array Functions!!!');
//const ar = [2,5,8,"ff"]
//console.log(ar.join('--'));
// let a = ar.join('-*-')
// console.log(a);

// let str = "i am real boy! 55"
// console.log(str.split(" ",2));
// const arr= ['gg','a','ba', 'ac',55,1, 'aa']
// console.log(arr);

// console.log(arr.sort());
// console.log([45, -1, 1, 10, 24].sort());
// console.log([45, 5, 3, -1, 1, 10, 24,"sa"].sort());
// console.log([22, 2 , 8, 35, 45, -1, 1, 10, 24].sort((a,b)=>a-b));
// console.log([22, 2 , 8, 35, 45, -1, 1, 10, 24].sort((a,b)=>b-a));

// 1. כתבו פונקציה המקבלת מערך של מספרים ומחזירה מערך עם המספרים בחזקת 2 שלהם.
// לדוגמא, עבור [2, 3, 4] יוחזר [4, 9, 16]. כתבו את הפונקציה פעם אחת בעזרת לולאה רגילה ופעם שנייה בעזרת פונקצית עזר map.
// השתמשו בתוכנית בפונקציה זו.
//const ar = [2,5,8,15,22]
// function power(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i]**2
//     }
//     return arr
// }
// console.log(power(ar));

// const newAr = ar.map(function(item,i) {
//     return item**2
// })
// console.log(newAr);



// 2. כתבו פונקציה המקבלת מערך של רשימת קניות ופרמטר נוסף הקובע האם להחזיר מערך ממויין לפי סדר ה ABC בסדר עולה או בסדר יורד. השתמשו בפונקציות העזר sort.
// השתמשו בתוכנית בפונקציה זו.
// function sortArray(ar, order) {
//     if (order=== 'up') {
//         return ar.sort()
//     }
//     else{
//         return ar.sort().reverse()
//     }
// }
// const buyList = ['milk', 'eggs', 'bread', 'cheese', 'tomato', 'melon', 'ice']
// let buttun = prompt("how to sort the list? up / down")
// console.log(sortArray(buyList, buttun));

// 3. כתבו פונקציה last המקבלת מערך arr ומספר כלשהו חיובי X
// ומחזירה מערך חלקי עם X איברים מסוף המערך המקורי.
// כאשר לא מועבר X - הפונקציה תחזיר את האיבר האחרון בלבד.

const arr = ['gG', 'a', 'ba', 'ac', 55, 1, 'aa H']
console.log(arr);
// function last1(arr,x) {
//     if (!x) {
//         x=1
//     }
//     if (x>arr.length) {
//         x=arr.length
//     }
//     return arr.slice(arr.length-x, arr.length).reverse()
// }
// console.log(last1(arr,10));

// function last2(arr,x) {
//     if (!x) {
//         x=1
//     }
//     else if (x>arr.length) {
//         x=arr.length
//     }
//     newAr=[]
//     for (let i=0; x>0 ; i++, x--) {
//        newAr[i] = arr.pop() 
//     }
//     return newAr
// }

// function last2(arr,x) {
//     if (!x) {

//         return arr.slice(arr.length-1)

//     }
//     else if (x>arr.length) {
//         return arr.reverse()
//     }
//     else {
//         return arr.reverse().slice(0,x)
//     }
// }

// console.log(last2(arr,4));
// לדוגמא, עבור:
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

// יוצג הפלט:
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

// כתבו את הפונקציה פעם אחת בעזרת לולאה ופעם שנייה בעזרת slice.
// השתמשו בתוכנית בפונקציות אלו.


// 4. כתבו פונקציה noCapital שתקבל מערך של מחרוזות ותחזיר מערך חדש עם המחרוזות שלא מופיעה בהן אות גדולה. היעזרו באחת מתוך ה array methods.
// לדוגמא:
// noCapital(["Avi", "Dani", "shuki", "mOshe", "arik"]);
// יוחזר המערך:
// ["shuki", "arik"]
// function noCapital(arr) {
//     const newAr =  arr.filter(function(item,index){
//         return !/[A-Z]/.test(item.toString())
//     });
//     console.log(newAr);
// }
// noCapital(arr);


// השתמשו בתוכנית בפונקציה זו.

// 5. כתבו פונקציה reverseStr המקבלת מחרוזת ומחזירה מחרוזת הפוכה.
// טיפ: העזרו ב reverse על מערך.

// str = "asdfgghjg"
// console.log(str);
// console.log(reversStr(str)); 
// השתמשו בתוכנית בפונקציה זו.
// function reversStr(str) {
//     return str.split("").reverse().join(""); 
// }

// 6. מילה שהיא פָּלִינְדְרוֹם הינה מילה שקריאתה מימין לשמאל ומשמאל לימין היא זהה. לדוגמא: aba.
// כתבו פונקציה שתקבל מערך של מחרוזות ותחזיר מערך חדש עם מחרוזות הפלינדרום בלבד. היעזרו באחת מתוך ה array methods ובפונקציה שכתבתם בתשובה הקודמת.
// השתמשו בתוכנית בפונקציה זו.
// ar = ["aba" , "ttt", "asdfg", "er t t re", "a", "UYe"]
// console.log(ar);
// palindrom(ar)

// function palindrom(ar) {
//     const newAr =  ar.filter(function(item,index){
//                 return item === reversStr(item)
//             });
//      console.log(newAr);
// }

// 7. כתבו פונקציה delAnimals המקבלת מערך של חיות ומערך נוסף של חיות למחיקה ומחזירה מערך חדש שמכיל את החיות שנשארו.
// לדוגמא:
// delAnimals(["Horse", "Cow", "Sheep", "Donkey"], ["Cow", "Sheep"]);
// יוחזר המערך:
// ["Horse", "Donkey"]
// השתמשו בתוכנית בפונקציה זו.
// function delAnimals(animals, del) {
//     const newAr =  animals.filter(function(item){
//                         return !del.includes(item) 
//                     });
//                     return newAr
//                 }
// console.log(["Horse", "Cow", "Sheep", "Donkey"]);
// console.log(delAnimals(["Horse", "Cow", "Sheep", "Donkey"], ["Cow", "Sheep"]));
// 8. כתבו פונקציה המגרילה מספר בין 1 ל- 6 וקולטת ניחוש. אם הניחוש הצליח - מראה את כל הניחושים הקודמים ומסיימת את הפעולה. אחרת - ממשיכה לקלוט ניחוש נוסף. - השקופית במצגת על ספריית Math
// השתמשו בתוכנית בפונקציה זו.
function guess1to6() {
    rnd = Math.ceil(Math.random() * 6)
    ar = []
    guess = -1
    while (rnd !== guess) {
        guess = +prompt("guess number between 1-6")
        if (rnd !== guess) {
            ar.push(guess)
        }
    }
    console.log("nice guess. The number was: " + guess);
    console.log("see all your guessess: " + ar);
}
guess1to6()
// 9. כתבו פונקציה הקולטת את המילה ״up״ או את המילה ״down״ ו- 5 מספרים, ומחזירה מערך עם כל המספרים שנקלטו בסדר עולה/יורד (עפ״י הקלט הראשון).
// השתמשו בתוכנית בפונקציה זו.

// 10. הראו לפחות 3 דרכים שונות לשכפול מערך (העתקת תוכן מערך למערך חדש)

// [1,2,3,4,5,6,7,8,9,10]

