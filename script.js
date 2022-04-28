const Form = {
    valueInject: document.querySelector('input#inject'),
    lpa: document.querySelector('input#lpa'),
    vpa: document.querySelector('input#vpa'),
    realPrice: document.querySelector('p#realPrice'),
    actualPrice: document.querySelector('p#actualPrice'),
    safety: document.querySelector('p#safety'),

    getValues() {
        return {
            priceInject: Form.valueInject.value,
            lpa: Form.lpa.value,
            vpa: Form.vpa.value
        }
    },
    calculate() {
        const values = Form.getValues();
        const priceInject = parseFloat(values.priceInject);
        const lpa = parseFloat(values.lpa);
        const vpa = parseFloat(values.vpa);
        const realPrice = Math.sqrt(22.5 * lpa * vpa);
        const actualPrice = priceInject;
        const safety = (realPrice - priceInject) / realPrice * 100;
        Form.realPrice.innerHTML = `Preço real: ${realPrice.toFixed(2)}<br />`;
        Form.actualPrice.innerHTML = `Preço atual: ${actualPrice.toFixed(2)}<br />`;
        Form.safety.innerHTML = `Segurança: ${safety.toFixed(2)}`;
    },
    submit(event) {
        event.preventDefault();
        Form.calculate();
        Swal.fire({
            title: 'Sucesso!',
            text: 'Os valores foram calculados com sucesso!',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        console.log(Form.getValues());
    }
}