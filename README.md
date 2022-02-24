# Contactable

Keep track of contact emails and phone numbers in your local memory (your brain)
is something from the past. `Contactable` make your life easier keeping track of
all that information for you.

![https://p-vvf5mjm.t4.n0.cdn.getcloudapp.com/items/4gulpyNv/e7081837-0ef5-4008-aa7e-dd461b3b99b1.jpg?source=viewer&v=2cede67098f688aed48ba60fda60c02b](https://p-vvf5mjm.t4.n0.cdn.getcloudapp.com/items/4gulpyNv/e7081837-0ef5-4008-aa7e-dd461b3b99b1.jpg?source=viewer&v=2cede67098f688aed48ba60fda60c02b)

## Resources

- Design: [**here**](https://www.figma.com/file/gAfbtV6U3DW5m1zNDrPSQT/Contactable?node-id=0%3A1)
- API repo: [**here](https://github.com/codeableorg/contactable-js-api)** (contains a insomnia json file)

## **User personas**

There's only one type of user for Contactable application, this will be referred
as "user"

## **Stories:**

### **User can login to the app**

As a user, I want to login into the app to see my contacts

- When I enter the app I'm redirected to the login page
- Then I see a login form
- When I fill the fields with valid information my account is created
- And I see my list of contacts.

**Implementation notes**

If I'm already login I should be redirected to the contacts page directly.

### **User can create an account**

As a visitor, I want to create an account in order to use the app.

- When I enter the app I'm redirected to the login page
- When I click the Signup button I'm redirected to the Signup form
- When I fill the fields with valid information my account is created
- And then I see my list of contacts.

### **User can logout**

As a user, I want to close my session to protect my information

- Given that I am logged in
- I can see a logout button in the header of any page
- When I click the logout button my session is destroyed
- And I am redirected to the Login page

### **User can see a list of their contacts**

As a user, I can see a list of all my contacts in alphabetical order.

- Given that I am on the main page
- Then I can see a list of all my contacts in alphabetical order.
- And a subtitle "Contacts" that tell me how many contacts I have.

### **User can create a new contact**

As a user, I want to be able to create a new contact so that I can keep track of
new people I know.

- Given that I am on the main page
- Then I see a button "+" button on the bottom-right corner of the screen.
- When I click the button
- Then I see a form for creating a new contact with the fields: Name, Number,
  Email, and Relati
- When I fill these inputs with valid information
- And a click the "Save" button on the bottom of the screen
- Then a new contact is created
- And I am redirected to the main page where I can see my new contact created on
  the list.

**Implementation notes**

Validations:

- All the fields are required
- Email should have a valid email format.
- Number should be a numeric value
- Relation should be one of these values: Family, Friends, Work, Acquaintance

### **User can see contact details**

As a user, I want to see the detail of any contact so that I can use all their
information.

- Given that I am on the main page
- When I click on any contact on the list
- Then I see to the Contact detail page
- At the bottom of the page I can see 3 buttons: Back, Delete and Edit

### **User can edit a contact**

As a user, I want to be able to edit a contact so I could correct any mistakes I
made while creating it.

- Given that I am on a Contact Detail page
- When I click on the Edit button
- Then I see to the Edit contact page
- Then I see a form with pre-filled information from the contact.
- Then I can edit the current information
- When I click the `Save` button
- Then the contact is updated and I navigate to the main page.

### **User can delete a contact**

As a user, I want to be able to delete permanently any contact so that I could
mantain a clean and updated contact list

- Given that I am on a Contact Detail page
- When I click on the Delete button
- The contact is deleted
- And I navigate to the main page
- And I don't see the contact anymore on the list.

### **User can mark a contact as favorite**

As a user, I want to mark some contacts as favorites so I can reach them quickly
on my contact list.

- Given that I am on the main page
- I see a "Star" button at the right of each contact.
- When I click the button
- Then the contact is marked as favorite
- And is displayed on the top of the page in a new list called "Favorites"

**Implementation notes**

The "Favorites" list is only visible when there is at least one contact marked
as favorite. The contact marked as favorited appears in both lists: Favorites
and Contacts.

### **User can remove a contact from favorites**

As a user, I want to remove the favorite mark of any contact currently marked as
favorite

- Given that I am on the main page
- And at least one contact is marked as favorite
- When I click on the Star button of a favorite contact
- Then the favorite mark is removed from the contact
- And it is removed from the Favorites list

HAPPY CODING! 👨‍💻 👨‍💻
