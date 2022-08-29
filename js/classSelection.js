
function groupSelection() {
    let selected = document.getElementById("sel").value;
    if (selected === 'bJr' || selected === 'gJr') {
        document.getElementById("msg").innerHTML = `▼ ----- 5.60m ----- ▼`;
        document.getElementById("add").innerHTML = `<span class="numsH">Точни предавки:</span>                                                   
            42 x 16                                                   
        <span class="numsH">Близки възможности:</span>                                                    
            34 x 13 - 5.58m</br>
            35 x 14 - 5.34m</br>
            36 x 14 - 5.48m</br>
            38 x 15 - 5.40m</br>
            39 x 15 - 5.55m</br>
            40 x 16 - 5.33m</br>
            41 x 16 - 5.46m`

    } else if (selected === 'bSr' || selected === 'gSr') {
        document.getElementById("msg").innerHTML = `▼ ----- 6.40m ----- ▼`;
        document.getElementById("add").innerHTML = `<span class="numsH">Точни предавки:</span>                                                   
            36 x 12</br>
            39 x 13</br>
            42 x 14</br>
            45 x 15</br>
            48 x 16</br>
            51 x 17</br>                                                    
        <span class="numsH">Близки възможности:</span>                                                    
            46 x 16 - 6.13</br>
            50 x 17 - 6.27</br>
            52 x 18 - 6.16</br>
            53 x 18 - 6.28`

    } else if (selected === 'jManJr' || selected === 'JWomanJr') {
        document.getElementById("msg").innerHTML = `▼ ----- 6.94m ----- ▼`;
        document.getElementById("add").innerHTML = `<span class="numsH">Точни предавки:</span>                                                   
            39 x 12</br>
            52 x 16</br>                                                    
        <span class="numsH">Близки възможности:</span>                                                    
            39 x 12 - 6.93m</br>
            42 x 13 - 6.89m</br>
            48 x 15 - 6.83m</br>
            50 x 16 - 6.67m</br>
            51 x 16 - 6.80m</br>
            52 x 16 - 6.93m</br>
            53 x 17 - 6.65m`

    } else if (selected === 'jManSr' || selected === 'jWomanSr') {
        document.getElementById("msg").innerHTML = `▼ ----- 7.93m ----- ▼`;
        document.getElementById("add").innerHTML = `<span class="numsH">Точни предавки:</span>                                                   
        52 x 14                                                    
        <span class="numsH">Близки възможности:</span>                                                    
        36 x 10 - 7.68m</br>
        40 x 11 - 7.76m</br>
        43 x 12 - 7.64m</br>
        48 x 13 - 7.88m</br>
        51 x 14 - 7.77m`
    }
}