let i = 0;
const imgArr = [
  "https://attach.setn.com/newsimages/2023/07/21/4248876-PH.jpg",
  "https://media.zenfs.com/ko/setn.com.tw/a1e008dc6873152b220101e888cb83f8",
  "https://imgs.tsna.com/article/1713693968_4iWZQ.jpg"
];

function showImg() {
  const ico = document.getElementById("ico");
  if (ico) {
    ico.src = imgArr[i];
    i = (i + 1) % imgArr.length;
  } else {
    console.error("圖片元素 #ico 未找到！");
  }
}


setInterval(showImg, 3000);


function swapSections() {
  const list = document.getElementById("list");
  const namoh = document.getElementById("namoh");

  if (list && namoh) {
    const listParent = list.parentNode;
    const namohParent = namoh.parentNode;


    listParent.insertBefore(namoh, list);
  } else {
    console.error("找不到打氣板或圖片輪播區域！");
  }
}

window.addEventListener("DOMContentLoaded", swapSections);