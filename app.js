(() => {


    // ボタンを抽出
    const buttons = document.querySelectorAll('button');
    let a = "";
    let b = "";
    let result = "";

    function number(num) {
        if (result !== "") {
            b = result;
            result = ""


        }


        b += num;
        document.getElementById("total").textContent = b;
    }

    function calculate() {

        let c = document.getElementById('total').textContent;
        result = eval(c);
        document.getElementById('total').textContent = result;
    }




    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // クリックされたボタンの id を取得し、コンソールに出力
            console.log(button.id);

            if (button.id === "clear") {
                document.getElementById("total").textContent = 0;
                
                b = "";
                result="";

            } else if (button.id === "is") {
                calculate();
            } else if (button.id === "save") {

                document.getElementById("memory").textContent = result;

            } else if (button.id === "call") {
                number(document.getElementById("memory").textContent);

            }

            else {
                number(button.id);
            }


        });
    });












})();