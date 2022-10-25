const articalArea = document.querySelector("#gs_res_ccl_mid")
const articalList = articalArea.querySelectorAll("h3 a[id]")

for (const artical of articalList) {
    artical.target = "_blank"
}

// console.log('hello')