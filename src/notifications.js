import { Toastify } from "toastify";

import "toastify/dist/toastify.css";

export function showNotification(message, theme) {
  Toastify({
    text: message,
    duration: 2000,
    gravity: "top",
    position: "right",
    style: {
      background: theme === "dark" ? "black" : "white",
      color: theme === "dark" ? "white" : "black",
    },
  }).showToast();
}
