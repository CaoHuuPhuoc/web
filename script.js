let contracts = [];

function showContracts() {
    const contractsList = document.getElementById("contracts-list");
    contractsList.innerHTML = "";

    for (const contract of contracts) {
        contractsList.innerHTML += `<div>${contract.code}: ${contract.content}</div>`;
    }
}

function showAddContractForm() {
    const addContractForm = document.getElementById("add-contract-form");
    addContractForm.innerHTML = `
        <label for="contract-content">Nội dung Hợp đồng:</label>
        <input type="text" id="contract-content" required>
        <button onclick="saveContract()">Lưu</button>
    `;
    addContractForm.style.display = "block";
}

function saveContract() {
    const contractContent = document.getElementById("contract-content").value;
    const generatedCode = generateContractCode();
    const newContract = {
        code: generatedCode,
        content: contractContent
    };

    contracts.unshift(newContract);
    showContracts();

    document.getElementById("add-contract-form").style.display = "none";
}

function generateContractCode() {
    return Math.random().toString(36).substr(2, 8).toUpperCase();
}