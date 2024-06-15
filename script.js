document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rifa-form');
    const listaParticipantes = document.getElementById('lista-participantes');
    const sortearButton = document.getElementById('sortear');
    const resultado = document.getElementById('resultado');

    let participantes = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const numero = document.getElementById('numero').value;
        participantes.push({ nombre, numero });
        actualizarLista();
        form.reset();
    });

    sortearButton.addEventListener('click', () => {
        if (participantes.length > 0) {
            const ganador = participantes[Math.floor(Math.random() * participantes.length)];
            resultado.textContent = `El ganador es ${ganador.nombre} con el número ${ganador.numero}`;
        } else {
            resultado.textContent = 'No hay participantes';
        }
    });

    function actualizarLista() {
        listaParticipantes.innerHTML = '';
        participantes.forEach((participante) => {
            const li = document.createElement('li');
            li.textContent = `${participante.nombre} - Número: ${participante.numero}`;
            listaParticipantes.appendChild(li);
        });
    }
});
