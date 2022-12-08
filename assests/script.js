const message = document.querySelector("#message-content");
const duration = document.querySelector('#duration');
const check = document.querySelector("#cancelable");
const success = document.querySelector("#success");
const error = document.querySelector("#error");
const addBtn = document.querySelector("#add-button");
const clearBtn = document.querySelector("#clear-button");
const toaster = document.querySelector("#toasts");

addBtn.addEventListener("click", () => {
    console.log("clicked");
    const toast = document.createElement("div");
    toast.classList.add("toast");
    const toastMsg = document.createElement("p");
    toast.appendChild(toastMsg);

    toaster.appendChild(toast);

    if (success.checked) {
        toastMsg.innerText = "Success";
        toast.classList.add("success-toast");
    }
    else {
        toastMsg.innerText = "error";
        toast.classList.add("error-toast");
    }
    if (message.value) {
        toastMsg.innerText = `${message.value}`;
    }
    const timeOut = setTimeout(() => {
        toast.remove();
    }, duration.value);

    if (check.checked) {
        const newBtn = document.createElement("button");
        newBtn.innerText = "x";
        toast.appendChild(newBtn);

        clearTimeout(timeOut);
        newBtn.addEventListener("click", () => {
            toast.remove();
        })
    }

})
clearBtn.addEventListener("click", () => {
    toaster.innerHTML = ""
})