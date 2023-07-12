const confirm = 

$(document).ready(function() {
   $('form').click(function(e) {
    e.preventDefault()
   })
   $('#telefone').mask('(00) 00000-0000', {
    "placeholder": "(11) 12345-6789",
   });
   $('#cpf').mask('000.000.000-00', {
    "placeholder": "123.456.789-10",
   });
   $('#cep').mask('00000-000', {
    "placeholder": "12345-123",
   })

   })
   
   