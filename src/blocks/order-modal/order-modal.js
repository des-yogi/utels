(function(){
  const orderModal = document.getElementById('orderModal')
  if (!orderModal) { return; }
  orderModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    let button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    let subTitle = button.getAttribute('data-bs-whatever');
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    let modalAddTitle = orderModal.querySelector('.modal-title__add');
    //var modalBodyInput = orderModal.querySelector('.modal-body input')
    modalAddTitle.textContent = '' + subTitle;
    //modalBodyInput.value = recipient;
  })
}());
