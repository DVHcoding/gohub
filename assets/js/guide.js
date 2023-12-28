

let quickLeftItem = document.querySelectorAll("[data-quick-left-item]");
let quickRightList = document.querySelectorAll("[data-quick-right-list]");

quickLeftItem.forEach(function (item, index) {
    item.addEventListener("click", function () {
        quickLeftItem.forEach(item => { item.classList.remove("active") });
        /**
         * Nếu bạn sử dụng quickLeftItem.classList.remove("active") 
         * thay vì quickLeftItem.forEach(item => { item.classList.remove("active") }); 
         * sẽ xảy ra lỗi. Điều này bởi vì quickLeftItem được trả về từ 
         * document.querySelectorAll 
         * là một NodeList, không phải là một phần tử đơn lẻ.
         * 
         * Hàm querySelectorAll trả về một danh sách các phần tử thỏa mãn 
         * điều kiện được chỉ định, 
         * 
         * và NodeList không có thuộc tính classList. 
         * Do đó, khi bạn cố gắng gọi quickLeftItem.classList.remove("active"), 
         * bạn sẽ gặp lỗi không tìm thấy phương thức classList trên NodeList.
         */
        item.classList.add("active");

        // change content
        quickRightList.forEach(content => { content.classList.remove("active") });
        quickRightList[index].classList.add("active");
    })
})


/**
 * Frequently
 */

let frequentlyLeftItem = document.querySelectorAll("[data-frequently-left-item]");
let frequentlyRightList = document.querySelectorAll("[data-frequently-right-list]");

frequentlyLeftItem.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        frequentlyLeftItem.forEach(item => { item.classList.remove("active") });
        item.classList.add("active");

        frequentlyRightList.forEach(itemList => { itemList.classList.remove("active") });
        frequentlyRightList[index].classList.add("active");
    });

})



/**
 * Question
 */

const questionItems = document.querySelectorAll("[data-question-item]");

let currentlyOpenItem = null;

questionItems.forEach(function (item) {
    item.addEventListener("click", function () {
        const itemTitle = this.querySelector("[data-question-item-title]");
        const detail = this.querySelector("[data-question-item-detail]");
        const arrow = this.querySelector("[data-arrow]");

        // Close the currently open item
        if (currentlyOpenItem && currentlyOpenItem !== item) {
            const currentTitle = currentlyOpenItem.querySelector("[data-question-item-title]");
            const currentDetail = currentlyOpenItem.querySelector("[data-question-item-detail]");
            const currentArrow = currentlyOpenItem.querySelector("[data-arrow]");

            currentTitle.classList.remove("active");
            currentDetail.classList.remove("active");
            currentArrow.style.transform = "rotate(0deg)";
        }

        // Toggle the active state for the clicked item
        itemTitle.classList.toggle("active");
        detail.classList.toggle("active");
        arrow.style.transform = (arrow.style.transform === "rotate(-180deg)") ? "rotate(0deg)" : "rotate(-180deg)";

        // Update the currently open item
        currentlyOpenItem = (currentlyOpenItem === item) ? null : item;
    });
});


