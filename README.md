# Instructions

## Lighthouse report
95%: Performance.

98%: Accessiblity.

96%: Best practices.

100%: SEO.

## User Stories

    🐿️ As a developer, I want the application to use the useState hook so that user interactions (like selecting an image) are smooth and the gallery’s state is managed effectively.
    🐿️ As a developer, I want to use the useEffect hook to perform side effects, such as fetching image data from an external API.
    🐿️ As a developer, I want to create separate files that return JSX instead of including all JSX within App.jsx so that the code is well-organized, making the app more maintainable and reliable for the user.
    🐿️ As a user, I want to see a collection of image thumbnails displayed clearly on the page.
    🐿️ As a user, I want to be able to click on an image thumbnail to view a larger version of that image, possibly in a modal or a dedicated view.
    🐿️ As a user who relies on assistive technologies, I want images to have descriptive alt text so I can understand their content.
    🐿️ As a user who navigates with a keyboard, I want to be able to tab through the interactive elements (like thumbnails and buttons) in a logical order.

## Requirements

    🎯 Implement the useState hook to manage gallery state (e.g. selected image).
    I did implement a useState hook to manage gallery states.
    🎯 Use useEffect for initial fetching of images from an external API.
    I did use useEffect for fetching images from an external API.
    🎯 Return JSX from multiple components (e.g., an ImageItem component for each image and a Gallery component to display them).
    I have used multiple jsx components.
    🎯 Use the .map() function to render an array of images dynamically
    I have used the .map() function to render an array of images dynamically.
    🎯 Implement functionality to display a larger version of an image when its thumbnail is clicked.
    I have displayed a larger image when its thumbnail is selected.
    🎯 Ensure all images have meaningful alt text.
    I have given all images the same alt text as they are randomly selected bythe api.
    🎯 Ensure basic keyboard navigation for image selection (e.g., thumbnails should be focusable and activatable with Enter/Space).
    I can navigate images using the keyboard.

# Stretch Goals
## Stretch User Stories

    🐿️ As a user, I want to be able to change the images in the gallery using a search bar.
    🐿️ As a developer, I want to be able to fetch images from an API with a larger amount of data, such as Unsplash.
    🐿️ As a developer I don’t want anyone to know my API keys from code.
    🐿️ As a user I want the app to look pleasing.

## Stretch Requirements

    🏹 Use useEffect and the dependancy array to update the images when the user types in an input field.
    I have not attempted the search bar as I am not sure how I could search through for randomly uploaded images.
    🏹 Set up an Unsplash application that you can fetch from your React app.
    I have fetched data from thecatapi, which permits up to 10 images without registering. I do not believe there is a reason to think this application would be limited in how many photos it can handle.
    🏹 Use .env to hide your API keys and tokens from the code.
    I have hidden the API URL from the code and is stored in an environment variable.
    🏹 Style the application excellently, using grid or flex and positioning.
    I have styled the application so that the main image is easy to view as are the thumbnails. The page is responsive and uses a combination of flex and absolute positioning.

# Reflection

I am not as familiar with React as I was with HTML/JS, but I increasingly felt more comfortable using React throughout the project. Once I had completed the majority of the project in App.jsx, I then modularised some components, which helped me understand how to do this effectively and it was completed quickly. I think I can see how React is beneficial, however will require more practice before becoming as confident with it as I would like to become.
