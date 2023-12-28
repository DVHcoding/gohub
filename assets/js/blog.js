/**
 * AUTO COPY CODE
 */

const btn = document.querySelector("#copy-btn");

btn.addEventListener('click', () => {
    const text = "FIRSTORDER20F";

    navigator.clipboard.writeText(text);

    alert('Bạn đã copy mã thành công!');
});
