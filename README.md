# Daniel Gregorio-Torres
> 06/07/23
> CS 463
> Final Project

Link to [GitHub Repository](https://github.com/iwnl-daniel/iwnl-daniel.github.io)
Link to [Deployed Website](https://iwnl-daniel.github.io/)

### Navbar Section
In this section, I created a responsive navigation bar using Bootstrap's navbar component. 
- Has a dark background color (bg-dark) 
- Uses the navbar-expand-sm class to collapse into a toggle button on smaller screens. 
- Navigation links are placed inside the navbar-nav class 
- Aligned to the right using the ms-auto class. 
- Each link is represented by an anchor tag with class nav-link and href attribute pointing to the corresponding section of the page.
> I faced no significant issues in implementing this section.

### Hero Section
- added a border around an image using the class avatarBorder. 
- Image itself is displayed using the avatar class. 
- Below the image, there is a heading 1 tag with the class name to display the name
- Also a paragraph tag with the class tagline to display a brief description.
> No issues were encountered while creating this section.

### About Section
The About section contains a brief description of me. 
- structured using Bootstrap's grid system with a container and a row
- The description is placed inside a paragraph tag, and it 
- spans the full width of the container on all screen sizes.
> No issues were encountered while creating this section.

### Previous Work Section
In this section, I included two columns with the courses taken and certifications. 
- Each column is divided into a division tag with the class col-md-6
  - ensure that they occupy equal space on medium-sized screens and above.
- Courses taken are represented as an unordered list with each item containing the course name.
- Certifications are also represented as an unordered list with each item being an anchor tag with a href attribute pointing to the corresponding certificate's website.
> I faced no significant issues in implementing this section.

### Projects Section
The projects section includes a carousel displaying three project images. 
- Carousel is created using Bootstrap's carousel component. 
- Added three carousel items (carousel-item class) inside the carousel-inner div. 
- Each item contains an anchor tag wrapping an image tag and a caption division tag with the "carousel-caption" class that includes the project name and a description. 
- The active item is denoted by adding the class active to one of the carousel items.
- At the bottom of the carousel, there are carousel indicators created using button tags
  - the data-bs-target attribute set to the ID of the carousel
  - the data-bs-slide-to attribute set to the corresponding index of the carousel item.
- The carousel also includes previous and next buttons with the classes carousel-control-prev and carousel-control-next respectively. 
- These buttons have the data-bs-target attribute set to the ID of the carousel.
> No issues were encountered while creating this section.

### Contact Section
In the contact section, I included a simple form with fields for first name, last name, email address, and a textarea for additional comments. 
- The form is wrapped inside a form tag. 
  - Each input field is represented by an input tag with the appropriate type and class.
> I faced no significant issues in implementing this section.

### Contact Icons
This section contains three columns with icons and links my LinkedIn, GitHub, and email. 
- Each column is represented by a division tag with the class col-md-4 to ensure equal spacing on medium-sized screens and above.
- The icons are displayed using Bootstrap Icons
- links are created using anchor tags with appropriate href attributes.
> No issues were encountered while creating this section.

### Footer Section
The footer section is placed at the bottom of the page and contains a single row with the copyright information. 
- The row is centered vertically using the class my-auto.
> No issues were encountered while creating this section.

### JavaScript
The JavaScript code adds form validation functionality to the website. 
- It ensures that the required input fields are not empty 
- validates the email format using a regular expression
- If the form passes all validation checks, it is submitted, and messages are logged to the console.
- If the form DOES NOT pass all validation checks, appropriate error classes are added, and error messages are logged to the console.

### Bad Log
![alt text](https://github.com/iwnl-daniel/iwnl-daniel.github.io/blob/main/images/badLog.png)
### Good Log
![alt text](https://github.com/iwnl-daniel/iwnl-daniel.github.io/blob/main/images/goodLog.png)
