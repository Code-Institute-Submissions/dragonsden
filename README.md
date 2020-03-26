# Dragon's Den Designs
[Dragon's Den](thorole.github.io/dragonsden)

Dragon's Den Designs is a website for dedicated table-top rpg players who want to lift their game to the next level. The designers at Dragons Den
specialize in designing artwork for fantasy settings and make custom artwork, tailored after the customer's demands.
 
## UX
 
The owners of the website recognize that there's a demand and a market for custom artwork for table-top role playing games.
Players are looking for professional and customized designs of their characters, monsters, sceneries, maps etc.., in contrast
to generic artwork that comes with the games. It is important for the owners of the website that the artwork itself is in focus
and gets the most attention. Furthermore it's also key for the owners that navigating between the three main parts of the
website never require more than one click.

### User Stories


- Upon entering the website, I can immediately see a big hero image with at text label, telling me what what Dragon's Den 
Designs do.

- I want to be able to easily locate the navigation bar, so that I can navigate directly to the content I wish to view. The
links in the navigation bar are self explanatory.

- On the landing page, I want to to be able to get a quick overview of what Dragon's Den Designs offer, so that I can can decide
if this is something for me. I also want to be able to jump straight to the contact page from the bottom of the landing page.

- As a potential customer, I want to be able to view some example artwork made by the artists behind the website. The example
artwork should be organized into two categories, so that I can get the impression that the artists can handle different types
of artwork.

- I should be able to reach the contact page with a single click from anywhere on the website.

- The contact page should have a form which has fields that I am required to fill in. Some fields should also check that my 
input is in the correct format, like the field for the e-mail address.

### wireframes

- [Landingpage top](attachments/wireframelandingtop.pdf) | [mobile](attachments/mobilewireframelandingtop.pdf)
- [Landingpage bottom](attachments/wireframelandingbottom.pdf) | [mobile](attachments/Mobilewireframelandingbottom.pdf)
- [Gallery](attachments/Wireframegallery.pdf) | [mobile](attachments/mobilewireframegallery.pdf)
- [Contact](attachments/wireframecontact.pdf) | [mobile](attachments/mobilewireframecontact.pdf)


This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features

The site is divided into three pages which are all meaningful on their own, meaning, for instance, that the user is not rquired to 
read everything on the landing page to enjoy or understand what's going on in the gallery or contact pages. 

### Existing Features
- About Us - This page, which is also the landing page, allows the user to get an impression of what the website can offer
by reading and viewing images. It's structured as a walkthrough of the process from where the costumer presents and idea and up to the 
point where the artwork is finished. At the bottom of this page there's a dramatic image to showcase what such artwork may look
like when it's finished. 
- Gallery - The Gallery page offers example art for the user to view. All of the thumbnails opens up in a modal for able
larger view of the image. This section is also split into two categories:
   - Creatures
   - Sceneries

This way the user can see that the artists master different kinds of motives.

- Contact Us - This page presents the user with a form. The form asks the user about relevant information
such as name, contact information and a textfield where the user can freely express her-/himself.
The form also asks for optional information about how the user came across the site. This should be usefulfor the 
owners.

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- The artists behind Dragons's Den are also hosting workshops for people who want to learn to design
their own art. In the feature there will be a page dedicated to a schedule of these workshops.

- The gallery will be divided into more sections: Characters, cities, maps etc.

- Fixed price packages. For instance: 4 character designs, 1 world map, 1 city map - 100$.

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- The project is written in HTML5 and CSS3

- [Bootstrap](https://www.getbootstrap.com)
    - The project uses bootstrap for large parts of the layout.

- The project uses JavaScript from [w3schools](https://www.w3schools.com/howto/howto_css_modal_images.asp) in the gallery section to make
images display in modal when clicked. Some of the script was modified by the author of Dragon's Den Designs
to fit the project.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

### Landing-page
    1. Clicked all links in navbar, including brand, to make sure the user is directed to the correct section/page: success
    2. Clicked contact link at bottom of landing page to make sure user is directed to contact page: success
    3. Clicked contact link at bottom of landing page to make sure user is directed to contact page: success
    4. Clicked "backt to top" link at bottom of landing page to make sure user is directed to top of landing page: success.
    5. Clicked social media links to check if user is directed to correct social media network: success
    6. Redused screen size to check that page displays in single column on smaller screens: success

### Gallery
    1. Clicked all links in navbar, including brand, to make sure the user is directed to the correct section/page: success
    2. Clicked all images to make sure the open in modal: success
    3. Modal closes by clicking anywhere on modal: success
    4. Redused screen size to make sure gallery displays in two columns instead of four columns on smaller screens: success
    5. Clicked social media links to check if user is directed to correct social media network: success

### Contact page
    1. Clicked all links in navbar, including brand, to make sure the user is directed to the correct section/page: success
    2. If you try to submit without a valid e-mail address and without input in required fields, there 
    should pop up a message telling the user what's missing: success
    3. Clicked social media links to check if user is directed to correct social media network: success


### Testing and Responsiveness across browsers and devices
The website was built and tested in Chrome throughout the construction. In addition it has been tested
in Mozilla Firefox, MS Edge and Mac OS Safari. The website is responsive as intended across
all browsers used in testing.

The website has also been tested physically on iPhone S, ipad 2nd gen., iPhone 7 and Mi a2 Redmi note 7.
The website responds well to smaller screen sizes and no major problems have appeared. The intention
is that on medium to small screens the website is layed out in a single column 
(except for the gallery), which it does. During construction the site was constantly tested on phone sized
screen in the Chrome dev. tools to make sure it looked good and behaved as intended.


## Deployment

**I followed this procedure to deploy Dragon's Den**

1. Navigate to the [repository](https://github.com/thorole/dragonsden)
2. Select [Branch: master]
3. Go to settings
4. Scroll down to "Github Pages". Make sure the repo is set to public in "Danger Zone"-section beneath. 
5. Select [master branch] 
6. Refresh setting page and scroll down to "Github pages" to view the live website URL.

**To clone the repository, follow these instructions:**

1. Navigate to the [repository](https://github.com/thorole/dragonsden)
2. Click **Clone or download**
3. Copy the url from the **Clone or download** dropdown.
4. In cli, navigate to the folder where you want to clone the repository.
5. Type *git clone*, and then paste the URL you copied in Step 3.
6. Press Enter 

For more information, visit [Cloning a repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
on github.

## Credits

### Content
- The function that makes images open in modal when clicked was copied from [w3schools](https://www.w3schools.com/howto/howto_css_modal_images.asp).
- Template for navigation bar copied from [Bootstrap website](https://getbootstrap.com/docs/4.0/components/navbar/)
### Media
- Most of the images on the site, including the hero image was taken from [Pixabay](www.pixabay.com)
- Some images also taken from [HD wallpapers](www.hdwallpapers.net)
- The dragon icon and favicon was taken from [FreeIconsPng](www.freeiconspng.com)


### Acknowledgements

- 