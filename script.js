document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('input[type="text"]');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = this.textContent;
            if (buttonText === '=') {
                try {
                    input.value = eval(input.value);
                } catch (error) {
                    input.value = 'Error';
                }
            } else {
                input.value += buttonText;
            }
        });
    });
});
