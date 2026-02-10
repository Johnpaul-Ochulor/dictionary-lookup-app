const input = document.getElementById("search");
const button = document.getElementById("BTN");
const resultDiv = document.getElementById("result");

async function typeText(element, text, delay = 50){
    element.textContent = "";//clear previous content
    for (let i = 0; i < text.length; i++){
        element.textContent += text[i];
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}
button.addEventListener("click", async()=>{
    const word = input.value.trim().toLowerCase();
    if(!word){
        resultDiv.textContent = "Please enter a word.";
        return;
    }
    try{
        const response = await
        fetch(`http://localhost:3000/define?word=${word}`);

        const data = await response.json();

        if (response.status ===404){
            resultDiv.textContent = `"${word}" not found in the dictionary.`;
        } else{
            // resultDiv.textContent = `${data.word}: ${data.definition}`;
            await typeText(resultDiv, `${data.word}: ${data.definition}`, 30);
        }
    } catch(err){
        resultDiv.textContent = "Error connecting to the server."
        console.error(err)
    }

})