function revolutionCalc() {
    let num1 = document.getElementById("cranckset").value;
    let num2 = document.getElementById("sprocket").value;
    let result = (num1 / num2 * 2.133).toFixed(2)
    document.getElementById("revolution").innerHTML = result + "m";
}

function customLength() {
    let n = document.getElementById("cLength").value;
    let buff = ' \n';
    for (let i = 34; i <= 53; i++) {
        for (let j = 10; j <= 20; j++) {
            let num = i / j * 2.133;
            if (num >= n - 0.3 && num <= n) {
                let sum = `${i} x ${j} - ${num.toFixed(2)}m\n`;
                buff += sum;
                document.getElementById("result2").innerHTML = buff;
            }
        }
    }
}

function info() {
    alert('Резултатите са ограничени до 1% по-малко от зададената стойност и са в интервал между 34 до 53 зъба за плочата на курбела и от 10 до 20 зъба за касетата.')
}

function resultInfo(){
    alert(`
    Резултатите са с точност до сантиметър (0.01м).
    За максимална точност, въведете разстоянието като включите и милиметри.
    Пример: - 6.133`)
}

function about(){
    alert(`
    v.0.3
    yuchormanski@gmail.com`)
}
function changes(){
    alert(`
    * WIndow width changed
    * Min height added
    * Добавени бутон About и Changes
    * Променена функционалност на входните полета. Въвеждане само на цифри.
    * Small bug fixes`)
}

function testLength(n) {
    for (let i = 34; i <= 53; i++) {
        for (let j = 11; j <= 20; j++) {
            let r = ((i / j) * 2.133).toFixed(2)
            i !== 35 &&
                i !== 37 &&
                i !== 38 &&
                i !== 41 &&
                i !== 44 &&
                i !== 45 &&
                i !== 47 &&
                i !== 49 &&
                r < n &&
                r >= n - 0.3 ? console.log(`${i} x ${j} - ${r}`) : null;
        }
    }
}
//testLength(6.40)

function testGroup(m) {
    for (let i = 34; i <= 53; i++) {
        for (let j = 10; j <= 20; j++) {
            if (i !== 35 && i !== 37 &&
                i !== 38 &&
                i !== 41 &&
                i !== 44 &&
                i !== 45 &&
                i !== 47 &&
                i !== 49) {
                if (((i / j) * 2.133) < m && ((i / j) * 2.133) > m - 0.3) {
                    console.log(`${i} x ${j} - ${((i / j) * 2.133).toFixed(2)}m`);
                }
            }
        }
    }
}
//testGroup(7.93)

