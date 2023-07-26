const command = document.getElementById('command');

command.addEventListener('input', function handleChange(event) {
    console.log(event.target.value);
  });