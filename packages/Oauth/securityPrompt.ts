export function openSecurityPrompt(onVerified: Function) {
  const popup = document.createElement("div");
  popup.className =
    "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]";

  popup.innerHTML = `
    <div class="bg-gray-800 p-8 rounded-2xl w-96 text-center border border-gray-700">
      <h2 class="text-xl font-bold mb-4">Security Check</h2>
      <p class="opacity-80 mb-6">Enter your developer security code.</p>

      <input
        id="securityCodeInput"
        type="password"
        placeholder="Security Code"
        class="w-full p-3 bg-gray-700 rounded-xl outline-none mb-4"
      />

      <button id="verifyBtn"
        class="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition">
        Verify
      </button>
    </div>
  `;

  document.body.appendChild(popup);

  popup.querySelector("#verifyBtn")!.addEventListener("click", () => {
    const input = (document.getElementById("securityCodeInput") as HTMLInputElement).value;

    if (input === "Abelchester2013") {
      popup.remove();
      onVerified();
    } else {
      alert("Incorrect security code.");
    }
  });
}
