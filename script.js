function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  Selected/frame_0000.png
Selected/frame_0001.png
Selected/frame_0002.png
Selected/frame_0003.png
Selected/frame_0004.png
Selected/frame_0005.png
Selected/frame_0006.png
Selected/frame_0007.png
Selected/frame_0008.png
Selected/frame_0009.png
Selected/frame_0010.png
Selected/frame_0011.png
Selected/frame_0012.png
Selected/frame_0013.png
Selected/frame_0014.png
Selected/frame_0015.png
Selected/frame_0016.png
Selected/frame_0017.png
Selected/frame_0018.png
Selected/frame_0019.png
Selected/frame_0020.png
Selected/frame_0021.png
Selected/frame_0022.png
Selected/frame_0023.png
Selected/frame_0024.png
Selected/frame_0025.png
Selected/frame_0026.png
Selected/frame_0027.png
Selected/frame_0028.png
Selected/frame_0029.png
Selected/frame_0030.png
Selected/frame_0031.png
Selected/frame_0032.png
Selected/frame_0033.png
Selected/frame_0034.png
Selected/frame_0035.png
Selected/frame_0036.png
Selected/frame_0037.png
Selected/frame_0038.png
Selected/frame_0039.png
Selected/frame_0040.png
Selected/frame_0041.png
Selected/frame_0042.png
Selected/frame_0043.png
Selected/frame_0044.png
Selected/frame_0045.png
Selected/frame_0046.png
Selected/frame_0047.png
Selected/frame_0048.png
Selected/frame_0049.png
Selected/frame_0050.png
Selected/frame_0051.png
Selected/frame_0052.png
Selected/frame_0053.png
Selected/frame_0054.png
Selected/frame_0055.png
Selected/frame_0056.png
Selected/frame_0057.png
Selected/frame_0058.png
Selected/frame_0059.png
Selected/frame_0060.png
Selected/frame_0061.png
Selected/frame_0062.png
Selected/frame_0063.png
Selected/frame_0064.png
Selected/frame_0065.png
Selected/frame_0066.png
Selected/frame_0067.png
Selected/frame_0068.png
Selected/frame_0069.png
Selected/frame_0070.png
Selected/frame_0071.png
Selected/frame_0072.png
Selected/frame_0073.png
Selected/frame_0074.png
Selected/frame_0075.png
Selected/frame_0076.png
Selected/frame_0077.png
Selected/frame_0078.png
Selected/frame_0079.png
Selected/frame_0080.png
Selected/frame_0081.png
Selected/frame_0082.png
Selected/frame_0083.png
Selected/frame_0084.png
Selected/frame_0085.png
Selected/frame_0086.png
Selected/frame_0087.png
Selected/frame_0088.png
Selected/frame_0089.png
Selected/frame_0090.png
Selected/frame_0091.png
Selected/frame_0092.png
Selected/frame_0093.png
Selected/frame_0094.png
Selected/frame_0095.png
Selected/frame_0096.png
Selected/frame_0097.png
Selected/frame_0098.png
Selected/frame_0099.png
Selected/frame_0100.png
Selected/frame_0101.png
Selected/frame_0102.png
Selected/frame_0103.png
Selected/frame_0104.png
Selected/frame_0105.png
Selected/frame_0106.png
Selected/frame_0107.png
Selected/frame_0108.png
Selected/frame_0109.png
Selected/frame_0110.png
Selected/frame_0111.png
Selected/frame_0112.png
Selected/frame_0113.png
Selected/frame_0114.png
Selected/frame_0115.png
Selected/frame_0116.png
Selected/frame_0117.png
Selected/frame_0118.png
Selected/frame_0119.png
Selected/frame_0120.png
Selected/frame_0121.png
Selected/frame_0122.png
Selected/frame_0123.png
Selected/frame_0124.png
Selected/frame_0125.png
Selected/frame_0126.png
Selected/frame_0127.png
Selected/frame_0128.png
Selected/frame_0129.png
Selected/frame_0130.png
Selected/frame_0131.png
Selected/frame_0132.png
Selected/frame_0133.png
Selected/frame_0134.png
Selected/frame_0135.png
Selected/frame_0136.png
Selected/frame_0137.png
Selected/frame_0138.png
Selected/frame_0139.png
Selected/frame_0140.png
Selected/frame_0141.png
Selected/frame_0142.png
Selected/frame_0143.png
Selected/frame_0144.png
Selected/frame_0145.png
Selected/frame_0146.png
Selected/frame_0147.png
Selected/frame_0148.png
Selected/frame_0149.png
Selected/frame_0150.png
Selected/frame_0151.png
Selected/frame_0152.png
Selected/frame_0153.png
Selected/frame_0154.png
Selected/frame_0155.png
Selected/frame_0156.png
Selected/frame_0157.png
Selected/frame_0158.png
Selected/frame_0159.png
Selected/frame_0160.png
Selected/frame_0161.png
Selected/frame_0162.png
Selected/frame_0163.png
Selected/frame_0164.png
Selected/frame_0165.png
Selected/frame_0166.png
Selected/frame_0167.png
Selected/frame_0168.png
Selected/frame_0169.png
Selected/frame_0170.png
Selected/frame_0171.png
Selected/frame_0172.png
Selected/frame_0173.png
Selected/frame_0174.png
Selected/frame_0175.png
Selected/frame_0176.png
Selected/frame_0177.png
Selected/frame_0178.png
Selected/frame_0179.png
Selected/frame_0180.png
Selected/frame_0181.png
Selected/frame_0182.png
Selected/frame_0183.png
Selected/frame_0184.png
Selected/frame_0185.png
Selected/frame_0186.png
Selected/frame_0187.png
Selected/frame_0188.png
Selected/frame_0189.png
Selected/frame_0190.png
Selected/frame_0191.png
Selected/frame_0192.png
Selected/frame_0193.png
Selected/frame_0194.png
Selected/frame_0195.png
Selected/frame_0196.png
Selected/frame_0197.png
Selected/frame_0198.png
Selected/frame_0199.png
Selected/frame_0200.png
Selected/frame_0201.png
Selected/frame_0202.png
Selected/frame_0203.png
Selected/frame_0204.png
Selected/frame_0205.png
Selected/frame_0206.png
Selected/frame_0207.png
Selected/frame_0208.png
Selected/frame_0209.png
Selected/frame_0210.png
Selected/frame_0211.png
Selected/frame_0212.png
Selected/frame_0213.png
Selected/frame_0214.png
Selected/frame_0215.png
Selected/frame_0216.png
Selected/frame_0217.png


 `;
  return data.split("\n")[index];
}

const frameCount = 260;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})
// gsap.to("#page3", {
//   scrollTrigger: {
//     trigger: `#page3`,
//     start: `top top`,
//     end: `bottom top`,
//     pin: true,
//     scroller: `#main`
//   }
// })