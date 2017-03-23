console.log("header partial is connected")

$(document).ready(function() {
  $yaybutton = $('#yay')
  $naybutton = $('#nay')

  $yaybutton.click(function() {
    $.post('/proposals')
  })

})


("#yay").click(function() {
  var yaycounter = 0;
    $('#counter').html(function(i, val) {
        $.ajax({
            url: '/proposals',
            type: 'POST',
            data: {increment: true},
            success: function() { alert('Request has returned') }
        });
        return +val+1;
        console.log(+val+1)
    });
})
