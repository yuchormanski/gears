function dropList(){
    let selectText = (ele) => {
        let msg = document.getElementById('msg');
        let add = document.getElementById('add');

        //    msg.innerHTML = 'Selected Text: <b>' + ele.options[ele.selectedIndex].text + '</b> </br>' +

        //    'Value of the Selected Text: <b>' + ele.value + '</b>';

        if (ele.value === "bJr") {                 //момчета младша

            msg.innerHTML = `| ----- 5.60m ----- |`

            add.innerHTML = `Available gear ratio  42 x 16</br>

            </br>

            Близки възможности:</br>

            34 x 13 - 5.58m</br>

            35 x 14 - 5.34m</br>

            36 x 14 - 5.48m</br>

            38 x 15 - 5.40m</br>

            39 x 15 - 5.55m</br>

            40 x 16 - 5.33m</br>

            41 x 16 - 5.46m`

        } else if (ele.value === "gJr") {          //момчета младша

            msg.innerHTML = `| ----- 5.60 ----- |`

            add.innerHTML = `Available gear ratio  42 x 16</br>

            </br>

            Близки възможности:</br>

            34 x 13 - 5.58m</br>

            35 x 14 - 5.34m</br>

            36 x 14 - 5.48m</br>

            38 x 15 - 5.40m</br>

            39 x 15 - 5.55m</br>

            40 x 16 - 5.33m</br>

            41 x 16 - 5.46m`



        } else if (ele.value === "bSr") {          //момчета старша

            msg.innerHTML = `| ----- 6.40 ----- |`

            add.innerHTML = `Available gear ratio:</br>

            36 x 12</br>

            39 x 13</br>

            42 x 14</br>

            45 x 15</br>

            48 x 16</br>

            51 x 17`

        } else if (ele.value === "gSr") {          //момичета старша

            msg.innerHTML = `| ----- 6.40  ----- |`

            add.innerHTML = `Available gear ratio:</br>

            36 x 12</br>

            39 x 13</br>

            42 x 14</br>

            45 x 15</br>

            48 x 16</br>

            51 x 17`

        } else if (ele.value === "jManJr") {       //юноши младша

            msg.innerHTML = `| ----- 6.94 ----- |`

            add.innerHTML = `Available gear ratio:</br>

            39 x 12</br>

            52 x 16`

        } else if (ele.value === "JWomanJr") {     //девойки младша

            msg.innerHTML = `| ----- 6.94 ----- |`

            add.innerHTML = `Available gear ratio:</br>

            39 x 12</br>

            52 x 16`

        } else if (ele.value === "jManSr") {       //юноши старша

            msg.innerHTML = `| ----- 7.93 ----- |`

            add.innerHTML = `Available gear ratio: </br>

            46 x 14</br>

            52 x 14 `

        } else if (ele.value === "jWomanSr") {     //девойки старша

            msg.innerHTML = `| ----- 7.93 ----- |`

            add.innerHTML = `Available gear ratio:</br>
            52 x 14`
        } else {
            msg.innerHTML = ``
        }
    }
}
