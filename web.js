
const fullImageBox = document.getElementById('fullImageBox');
const fullImage = document.getElementById('fullImage');
const parentImages = document.getElementsByClassName('parent-image');
const cards = document.getElementsByClassName('card');
let currentImageIndex;

//Open fullSize view on image click

Array.from(parentImages).forEach(function(parentImage, index){
    parentImage.addEventListener('click', function(){
        fullImageBox.style.display = 'flex';
        currentImageIndex = index;
        showImage(index);
    })
})

//Close fullSize view on image click

const crossBtn = document.getElementById('crossBtn');
//here getElementById is a better method to get cross button, as 'getElementsByClassName' gets a HTML collection, whereas we needed to select only one element 

crossBtn.addEventListener('click', function(e){
    if(e.target === crossBtn){
        fullImageBox.style.display = 'none';
    }
})

//show the image at the specified index

function showImage(index){
    const parentImage = parentImages[index];
    const imageSrc = parentImage.getAttribute('src');
    fullImage.src = imageSrc;
}

//Navigate to previous image

const prevButton = document.getElementById('prevButton');

prevButton.addEventListener('click', function(){
    currentImageIndex = (currentImageIndex - 1 + cards.length) % cards.length;
    showImage(currentImageIndex);
})

//Navigate to next image

const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', function(){
    currentImageIndex = (currentImageIndex + 1 + cards.length) % cards.length;
    showImage(currentImageIndex);
})

//Download functionality

const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', function(){
    const parentImage = parentImages[currentImageIndex];
    const imageSrc = parentImage.getAttribute('src');

    //create a temporary anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = imageSrc;
    downloadLink.download = 'imageSrc';
    downloadLink.target = '_blank';

    //Simulate a click on the anchor element to initiate the download
    downloadLink.click();
})