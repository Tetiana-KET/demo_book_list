## Dashboard. Layout

- [x] Main part of this screen is a table with columns:
  - Book title;
  - Author name;
  - Category;
  - ISBN;
  - Created At (datetime format should follow pattern: 12 March 2022, 8:35AM)
  - Modified/Edited At (datetime format should follow pattern: 13 March 2022, 1:48PM)
  - column “Actions”
    - [x] should have 3 different buttons “Edit”, “Delete”, “Deactivate/Re-Activate”.
- [x] Above the table should be a filter/dropdown - with options: “Show All”, “Show Active”, “Show Deactivated”.
  - [x] By default should be set to “Show Active”.
- [x] Also somewhere in the page should be a link to the “Add a Book” page.
- [x] Sticky Footer. Attach a footer to the bottom of the viewport **when page content is short**.
- [x] Content of the footer should be a link to your GitHub account. Link should be opened in a new tab.

## Dashboard. Functionality

#### Table.

- [x] Retrieve data from a DB and display it each item as a table row. -[x] Filter. User can filter data in table. User can select only one option at the same time. If user select “Show All” he should see all records from DB. If user select “Show Active” he should see only active records from DB. If user select “Show Deactivated” he should see only deactivated records from DB.

- [] Right to the filter should additional information about number of records in table: Showing {numberOfRecordsWhichAreShowingBasedOnFilterSelecition} of {totalNumberOfRecordsInDB}.
- [] “Created At” and “Modified/Edited At” - should be automatically generated based on the user action. Please pay attention to timezones, user should see the time depending on his current timezone (feel free to use libraries like moment.js, date-fns and others). For empty “Edited At” column please use “--” symbol.
- [] Click on the “Edit” button - should redirect users to the edit page (layout and functionality are the same as we have for “Add a book” screen, but with pre populated inputs and correct texts). On submit - update record in DB, show success message and redirect to Dashboard with updated table list.
- [x] Click on the “Deactivate” button - somehow highlight record, so it’s clear for user that record is deactivated. Also you should mark record as deactivated in DB.
- [x] Click on the “Re-Activate” button - opposite to “Deactivate” button functionality.
- [x] Delete button should be only **active** for deactivated records. Click on the “Delete” button - remove book from DB and table list (again only available for deactivated records) and show success message.

## Add a Book/Edit a Book. Layout

- [] Page has a form with fields (inputs):
- [] Book title - text, required;
- [] Author name - text, required;
- [] Category - select (add few dummy options), required;
- [] International Standard Book Number (ISBN) - number, required;
- [] Submit button “Add a Book” or “Edit Book”
- [] Also somewhere on the page should be a link to the “Dashboard” page. On submit - create a record in DB, show a success message, and redirect to Dashboard with the updated table list.

## Add a Book/Edit a Book. Functionality

- [ ] Each field (input, select) requires validation.
- [ ] Users are not able to save a book with empty fields, app must highlight empty fields, so it’s clear for user what he must fill in.
- [ ] On submit - form data should be stored tofake backend and new or updated record should appear in the table list.

## Back-end technical limits:

- [x] use fake REST API (https://github.com/typicode/json-server) for CRUD operations;
      Front-end technical limits:
- [x] use the latest version of React;
- [x] use hooks or/and custom hooks (where necessary);
- [x] use Typescript (optional, but will be a big plus), use only functional components;
      usage of Context API is welcome;
- [x] use any type of CSS frameworks (usage of preprocessor is welcome).

### UI requirements:

- [x] eye-friendly design;
- [x] responsive layout (min 320px)

### Additional:

- [ ] Create a public repository on GitHub with the final code;
- [ ] Add instructions on how to run the application locally, step by step (add readme.md);
      Share a repo link with us;
- [ ] Avoid using third-party packages (like Redux, mobX, axios, formik, yup, react-hook-form etc.);
