// entry 파일
// hello.js, world.js를 index.js에 bundling
import hello_word from "./hello.js"
import world_word from "./world.js"

document.querySelector("#root").innerHTML = hello_word + ' ' + world_word;