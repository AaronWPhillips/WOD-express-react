export function index(req, res) {
   res.send('NOT IMPLEMENTED: Site Home Page');
}

// Display list of all books.
export function book_list(req, res) {
   res.send('NOT IMPLEMENTED: Book list');
}

// Display detail page for a specific book.
export function book_detail(req, res) {
   res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
}

// Display book create form on GET.
export function book_create_get(req, res) {
   res.send('NOT IMPLEMENTED: Book create GET');
}

// Handle book create on POST.
export function book_create_post(req, res) {
   res.send('NOT IMPLEMENTED: Book create POST');
}