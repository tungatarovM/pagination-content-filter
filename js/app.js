const limitPerPage = 10;
const numOfStudents = $('.student-item').length;
const totalPages = Math.ceil(numOfStudents / limitPerPage);
const hideStudents = () => {
  $(`.student-item:gt(${limitPerPage - 1})`).hide();
};

const createPages = (pages, pageIndex = 1) => {
  if (pageIndex > pages) {
    return false;
  }
  const pageButton = $(`<li class="current-page"><a href="#">${pageIndex}</a></li>`);
  $('.pagination').append(pageButton);
  return createPages(pages, pageIndex + 1);
};

const showStudents = (limit, currentIndex) => {
  if (currentIndex === limit) {
    return null;
  }
  $(`.student-item:eq(${currentIndex})`).show();
  return showStudents(limit, currentIndex + 1);
};

hideStudents();
createPages(totalPages, 1);

// Changing pages //
$('.pagination li.current-page').on('click', function () {
  const pageIndex = $(this).index() + 1;
  const grandTotal = pageIndex * limitPerPage;
  $('.student-item').hide();
  showStudents(grandTotal, grandTotal - limitPerPage);
});

