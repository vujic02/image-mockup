import React, { useEffect } from "react";
import { drawImageProp } from "../functions/helper_functions";

// https://lh3.googleusercontent.com/HCr6xEc9w-SGn7xqaahJ76wXrdAVNi38GXEsnPuJrcXWheSUaIMfmSMKbPFfzGe98kMU-1eqDzVpguM2OyGnfNLx
// https://lh3.googleusercontent.com/wK0CgIQOvIOFlz70pmnSVMsHSWw6E8NcIh8iSzBTExiOjh8Em9rpD3aFfGRGni3yhz0QUcm4rk4XNrwmK9qtZvaUJa7jozUroREVsw
// https://lh3.googleusercontent.com/LSCQStiYQBJwfw2IgoiB1EupXpZQuONIdX96jX6bdTYEyXm0-BWyKe1NYm3Y824DPuHdx1shuuITYrwnTAv6ukHs7HxeYFDaHmT14w
// https://lh3.googleusercontent.com/k7615JXKzj9mDy07z2NLUkwXb6ztX_ZfZ_vAVY_yytn7HD8sHADonhnjfQ-LfqgZUJH6FwDbp2IX_7k6IlQp7-kRG_O5vUEq8-NZ
// https://lh3.googleusercontent.com/T5JThkDw5D-xx-e_yBl542aA4K7I1wlJIO46gjDGYNYSkrTqqrM6IWq0pRXOFd56OEse9L3NMGXQhktolKCvsYTg
// https://lh3.googleusercontent.com/2inwLheXZDDs9a_pbXMmKWc7wj1zQgXxrbghihYbB6he85wuDhgzrNFWu3kYdgX_wqiUVmAPy0WaFVxEjVhEuTQFChbpf-7NAj8LjQ

const CanvasSolution = ({ image, selectedImg, setImage }) => {
  useEffect(() => {
    let canvas = document.getElementById("canvas");

    let ctx = canvas.getContext("2d");

    let bg = new Image();
    let draw = new Image();

    bg.src = `./bg-img${selectedImg}.png`;

    if (image) {
      draw.src = image;

      console.log(draw);
      console.log(bg);

      draw.onload = function () {
        if (selectedImg === 1) {
          let maxSizeW = 148;
          let maxSizeH = 180;
          let widthRatio = maxSizeW / draw.width,
            heightRatio = maxSizeH / draw.height;

          ctx.clearRect(285, 131, maxSizeW, maxSizeH);
          drawImageProp(ctx, draw, 285, 131, draw.width * widthRatio, draw.height * heightRatio);
          ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
        } else if (selectedImg === 2) {
          let maxSizeW = 346;
          let maxSizeH = 426;
          let widthRatio = maxSizeW / draw.width,
            heightRatio = maxSizeH / draw.height;

          ctx.clearRect(188, 40, maxSizeW, maxSizeH);
          drawImageProp(ctx, draw, 188, 40, draw.width * widthRatio, draw.height * heightRatio);
          ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
        } else if (selectedImg === 3) {
          let maxSizeW = 138;
          let maxSizeH = 84;
          let widthRatio = maxSizeW / draw.width,
            heightRatio = maxSizeH / draw.height;

          ctx.clearRect(306, 268, maxSizeW, maxSizeH);
          drawImageProp(ctx, draw, 306, 268, draw.width * widthRatio, draw.height * heightRatio);
          ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
        } else if (selectedImg === 4) {
          let maxSizeW = 283;
          let maxSizeH = 363;
          let widthRatio = maxSizeW / draw.width,
            heightRatio = maxSizeH / draw.height;

          ctx.clearRect(349, 62, maxSizeW, maxSizeH);
          drawImageProp(ctx, draw, 349, 62, draw.width * widthRatio, draw.height * heightRatio);
          ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
        } else if (selectedImg === 5) {
          let maxSizeW = 150;
          let maxSizeH = 210;
          let widthRatio = maxSizeW / draw.width,
            heightRatio = maxSizeH / draw.height;

          ctx.clearRect(274, 122, maxSizeW, maxSizeH);
          drawImageProp(ctx, draw, 274, 122, draw.width * widthRatio, draw.height * heightRatio);
          ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
        } else if (selectedImg === 6) {
          let maxSizeW = 287;
          let maxSizeH = 362;
          let widthRatio = maxSizeW / draw.width,
            heightRatio = maxSizeH / draw.height;

          ctx.clearRect(217, 51, maxSizeW, maxSizeH);
          drawImageProp(ctx, draw, 217, 51, draw.width * widthRatio, draw.height * heightRatio);
          ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
        }
      };
    } else {
      bg.src = `./bg-img${selectedImg}.png`;
      bg.onload = () => {
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
      };
    } // eslint-disable-next-line
  }, [image]);

  useEffect(() => {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let bg = new Image();
    let draw = new Image();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bg.src = `./bg-img${selectedImg}.png`;
    bg.onload = () => {
      draw.src = image;
      if (selectedImg === 1) {
        let maxSizeW = 148;
        let maxSizeH = 180;
        let widthRatio = maxSizeW / draw.width,
          heightRatio = maxSizeH / draw.height;

        drawImageProp(ctx, draw, 285, 131, draw.width * widthRatio, draw.height * heightRatio);
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
      } else if (selectedImg === 2) {
        let maxSizeW = 346;
        let maxSizeH = 426;
        let widthRatio = maxSizeW / draw.width,
          heightRatio = maxSizeH / draw.height;

        drawImageProp(ctx, draw, 188, 40, draw.width * widthRatio, draw.height * heightRatio);
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
      } else if (selectedImg === 3) {
        let maxSizeW = 138;
        let maxSizeH = 84;
        let widthRatio = maxSizeW / draw.width,
          heightRatio = maxSizeH / draw.height;

        drawImageProp(ctx, draw, 306, 268, draw.width * widthRatio, draw.height * heightRatio);
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
      } else if (selectedImg === 4) {
        let maxSizeW = 281;
        let maxSizeH = 360;
        let widthRatio = maxSizeW / draw.width,
          heightRatio = maxSizeH / draw.height;

        drawImageProp(ctx, draw, 349, 62, draw.width * widthRatio, draw.height * heightRatio);
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
      } else if (selectedImg === 5) {
        let maxSizeW = 150;
        let maxSizeH = 210;
        let widthRatio = maxSizeW / draw.width,
          heightRatio = maxSizeH / draw.height;

        drawImageProp(ctx, draw, 274, 122, draw.width * widthRatio, draw.height * heightRatio);
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
      } else if (selectedImg === 6) {
        let maxSizeW = 285;
        let maxSizeH = 360;
        let widthRatio = maxSizeW / draw.width,
          heightRatio = maxSizeH / draw.height;

        drawImageProp(ctx, draw, 217, 51, draw.width * widthRatio, draw.height * heightRatio);
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
      }
    }; // eslint-disable-next-line
  }, [selectedImg]);

  return (
    <>
      <canvas id="canvas" width="720" height="480"></canvas>
    </>
  );
};

export default CanvasSolution;
