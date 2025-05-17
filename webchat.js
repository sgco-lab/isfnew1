(function () {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/gh/botfront/rasa-webchat@0.11.12/lib/index.js";
  script.async = true;
  script.onload = () => {
    window.WebChat.default({
      initPayload: "/get_started",
      customData: { language: "fa" },
      socketUrl: "https://isfnew1.onrender.com",
      socketPath: "/socket.io/",
      title: "چت‌بات اصفهان سنتر",
      inputTextFieldHint: "سوال خود را بنویسید...",
      profileAvatar: "https://esfahancenter.com/logo.png",
      showFullScreenButton: true,
      showMessageDate: true
    }, null);
  };
  document.head.appendChild(script);
})();