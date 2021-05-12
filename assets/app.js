function checkBox(e) {
  e.preventDefault()
  $('.list').append(`
      <li>
        <input type="checkbox" />
        <label>${$('.search_box input').val()}</label>
      </li>
    `)
  $('.search_box input').val('')
}
$('.search_box').on('submit', checkBox)

$(document).on('change', '.list li input', function () {
  if ($(this).prop('checked')) $(this).siblings('label').addClass('check')
  else $(this).siblings('label').removeClass('check')
})

$('.add_box').on('click', () => {
  $('.list').append(`
      <li>
        <input type="checkbox" />
        <label>${$('.search_box input').val()}</label>
      </li>
    `)
  $('input').val('')
})
$('.re_box').on('click', () => {
  $('.list li').remove()
})
