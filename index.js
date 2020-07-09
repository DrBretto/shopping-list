function main(){
}

$('#js-shopping-list-form').submit( event => {
    event.preventDefault();
    console.log(event, "works!", $('#shopping-list-entry'));
    const newItemName = $('#shopping-list-entry').val();
    $('ul').append(`<li>
    <span class="shopping-item">${newItemName}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`)

})

$("html").on("click", ".shopping-item-toggle", event => {
    event.preventDefault();
    console.log("toggle clicked", $(this))
   $(this).toggleClass("shopping-item shopping-item__checked" ? "shopping-item" : "shopping-item shopping-item__checked")
});

$("html").on("click", ".shopping-item-delete", event => {
    event.preventDefault();
    console.log("delete clicked", this, $(this).closest())
    event.target.remove();
})

$(main);