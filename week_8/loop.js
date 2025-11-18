const st = document.getElementById("start");
const sp = document.getElementById("stop");
const out1 = document.getElementById("out1");
const t = document.getElementById("ti");

function mainwhile() {
  let start = parseInt(st.value);
  let stop = parseInt(sp.value);
  let count = start;
  out.innerHTML = "";
  while (count <= stop) {
    out.innerHTML + count + "<br>";
    count++;
  }
}

function main() {
  let count = 0;
  let ti = parseInt(t.value);
  out1.innerHTML = "";
  do {
    out1.innerHTML = out1.innerHTML + "Hello <br>";
    count++;
  } while (count < ti);
}

function mainDoWhile() {
  let start = parseInt(st.value);
  let stop = parseInt(sp.value);
  let count = start;
  if (start < stop) {
    do {
      out1.innerHTML = out1.innerHTML + count + "<br>";
      count++;
    } while (count <= stop);
  } else {
    do {
      out1.innerHTML = out1.innerHTML + count + "<br>";
      count--;
    } while (count >= stop);
  }
}

function main2() {
  let ti = parseInt(t.value);
  out1.innerHTML = "";
  for (let count = 0; count < ti; count++) {
    out1.innerHTML = out1.innerHTML + "Hello <br>";
  }
}

function mainFor() {
  let start = parseInt(st.value);
  let stop = parseInt(sp.value);
  out1.innerHTML = "";
  if (start < stop) {
    for (let count = start; count <= stop; count++) {
      if (count % 2 == 0) {
        out1.innerHTML = out1.innerHTML + count + "<br>";
      }
    }
  } else {
    for (let count = start; count >= stop; count--) {
      if (count % 2 == 0) {
        out1.innerHTML = out1.innerHTML + count + "<br>";
      }
    }
  }
}

const s = document.getElementById("str");
console.log(s);
const out2 = document.getElementById("result2");
console.log(out2);

function mainWhile1() {
  let str = s.value;
  let i = 0;
  out2.innerHTML = "";
  while (i < str.length) {
    out2.innerHTML = out2.innerHTML + str.charAt(i) + "<br>";
    // console.log(str.charAt(i));
    i++;
  }
}

function mainDoWhile1() {
  let str = s.value;
  let i = 0;
  out2.innerHTML = "";
  while (i < str.length) {
    out2.innerHTML = out2.innerHTML + str.charAt(i) + "<br>";
    // console.log(str.charAt(i));
    i++;
  }
}
