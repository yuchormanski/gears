function dropList(){
    let selectText = (ele) => {
        let msg = document.getElementById('msg');
        let add = document.getElementById('add');

        if (ele.value === "bJr") {                 //момчета младша

            msg.innerHTML = `| ----- 5.60m ----- |`

            add.innerHTML = `Available gear ratio  42 x 16</br>

        } else if (ele.value === "gJr") {          //момчета младша
            msg.innerHTML = `| ----- 5.60 ----- |`
            add.innerHTML = `Available gear ratio  42 x 16</br>
        }
    }