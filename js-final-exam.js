function btnclik() {
            var inpval = Number(document.getElementById("input1").value);
            var panelty1 = document.getElementById("jar");
            panelty1.innerText = inpval;


        };
        document.getElementById("btn").addEventListener("click", btnclik);

        function addvalue() {

            var inpval = Number(document.getElementById("input1").value);
            var panelty1 = document.getElementById("jar");
            panelty1.innerText = inpval;

            var r = document.getElementById("h1");
            r.innerText = inpval;
            r.innerText = Number(r.innerText) + inpval;
        }

        document.getElementById("btn2").addEventListener("click", addvalue);

