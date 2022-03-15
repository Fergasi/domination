//### Part One - Querying DOM Elements:
//**These functions don't need to `return` anything.**

//1. Write a function that puts a line through the text of the first `<li>` in the unordered "Arguments" list (`<ul`). Since this function always does the same thing, it requires no parameters!

function strikethrough(){
    let firstLineItem = document.querySelector('li');
    firstLineItem.style.textDecorationLine = 'line-through';
}

//2. Now call it! The first list item (`<li>`) should get what's known as a "strikethrough" style.

strikethrough()

//3. Write a function that takes in a string representing an DOM element's `id` and a string representing a url. The function should set the image with that `id` to have that url as its image source.

function setImage(imageId, imageUrl){
    let image = document.querySelector(imageId);
    image.src = imageUrl;
    image.style.height = '253px';
}

//4. Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!

setImage("#image-1", "https://img.freepik.com/free-photo/milford-sound-new-zealand-travel-destination-concept_53876-42945.jpg?t=st=1647280191~exp=1647280791~hmac=b883b40cba6b20710fe03d90acc1f11af7ed1b825fab053c414e38c261c09ab2&w=1800")
setImage("#image-2", "https://img.freepik.com/free-photo/blue-morning-natural-mountains-bamboo_1417-32.jpg?t=st=1647284139~exp=1647284739~hmac=ea05a756ab5ef9d5f4cff6fba9862a7ee820401f05685acc606c466681efe8d9&w=1800")
setImage("#image-3", "https://img.freepik.com/free-photo/landscape-view-hallstatt-city-austrian-alps-summer-time_259348-5003.jpg?w=1800")

//5. This next function also doesn't require any parameters: write a function that always removes the first `<li>` from the Arguments `<ul>`

function removeLi(){
    let firstLineItem = document.querySelector('li');
    firstLineItem.remove()
}

//6. Now use it to remove the first two items from that list. You'll need to call it twice!

removeLi()
removeLi()

//7. Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.

function setFontSize(itemId, desiredFontSize){
    let itemFontChange = document.querySelector(itemId);
    itemFontChange.style.fontSize = desiredFontSize;
}

//8. Try using it to change the size of any text on the page.

setFontSize('#heading', '30px')

//### Part Two - DOM Elements as Function Parameters:
//**These functions will take in DOM elements as parameters. They also don't need to `return` anything.**

//1. Write a function that takes in a DOM element and appends it to the Arguments `<ul>`.

function appendToArgument(domElement){
    let argumentList = document.querySelector("ul");
    argumentList.appendChild(domElement);
}

//2. Let's use it! Create an image element in Javascript and pass it into your function.

let newImage = document.createElement("img");
newImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1280px-DOM-model.svg.png"

appendToArgument(newImage);

//3. Write a function that takes in an image element and modifies its height to be 300 pixels.

function resizeImage(imageElement){
    imageElement.style.height = '300px';
}

//4. Let's use it. Query an image element and then pass it into the function.

resizeImage(newImage)

//5. Write a function that takes in an element and gives it the class `invisible`.

function makeClassInvisible(element){
    element.className = `invisible`
}

//6. Now query an element on the page and pass it into that function. You should see it disappear! (feel free to check the CSS file to see how this class works.)

let formElement = document.querySelector('form')

makeClassInvisible(formElement)

// ### Part Three - Creating DOM Elements:
//**These functions will `return` new DOM elements.**

//1. Write a function that takes in text and returns a new `<li>` with the given text parameter as its `innerText`.

function StringToLi(strang){
    let newLi = document.createElement("li");
    newLi.innerText = strang;
    return newLi
}

//2. Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, then append it to the page (use your first function from part 2).

let newLiElement = StringToLi('This DOM thang be thangin!');

appendToArgument(newLiElement);

//3. Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an `<h3>`) with that text in it.

function createHeader(headerSize, headerText){
    let newHeader = document.createElement('h'+ String(headerSize));
    newHeader.innerText = headerText;
    return newHeader
}

//4. Test it by calling it with a header size and some text, storing the return value in a variable, then appending it to the page (again, use your first function from part 2).

let newHeaderElement = createHeader(2, 'Powered by DOM Elements ™');

appendToArgument(newHeaderElement)