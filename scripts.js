var rootElement = document.documentElement
var scrollToTopBtn = document.getElementById("scrollToTopBtn")

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  console.log(rootElement.scrollTop)
  if (rootElement.scrollTop > 0) {
    scrollToTopBtn.classList.add("showBtn")
  } else {
    scrollToTopBtn.classList.remove("showBtn")
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

document.addEventListener("scroll", handleScroll);

function toggleCodeBlock(e) {
  if(this.className == "code") {
    this.className = "codeshow";
  } else {
    this.className = "code";
  }
}
function toggleCodeBlock2(e) {
  let cont = this.parentNode.parentNode
  if(cont.className == "code") {
    cont.className = "codeshow";
  } else {
    cont.className = "code";
  }
}

let codeBlocks = document.querySelectorAll(".code")
codeBlocks.forEach((el) => el.ondblclick = toggleCodeBlock)

codeBlocks = document.querySelectorAll("div.separator>div")
codeBlocks.forEach((el) => el.onclick = toggleCodeBlock2)

function toggleCode() {

}