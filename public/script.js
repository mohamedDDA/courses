
const navLinks = document.querySelectorAll('header nav ul a');

// Add a click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        // Prevent the default link behavior
        e.preventDefault();
        // Get the ID of the target section from the link href attribute
        const targetId = link.getAttribute('href');
        // Get the target section element using the ID
        const targetSection = document.querySelector(targetId);
        // Scroll to the target section using the scrollIntoView() method
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Get all elements with the data-number attribute
const elementsWithDataNumber = document.querySelectorAll('[data-number]');

// Loop through the elements and set their innerHTML to the data-number value
elementsWithDataNumber.forEach(element => {
    const dataNumberValue = element.getAttribute('data-number');
    element.innerHTML = dataNumberValue;
});

const courseCards = document.querySelectorAll('.course-card');

courseCards.forEach((courseCard) => {
    const title = courseCard.querySelector('.title');
    const description = courseCard.querySelector('.description');
    const button = courseCard.querySelector('.button');
    const courseTitle = title.dataset.courseTitle;
    const courseDescription = description.dataset.courseDescription;
    const message = `انا اريد شراء دورة ${courseTitle}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/201099452977?text=${encodedMessage}`;

    title.textContent = courseTitle;
    description.textContent = courseDescription;
    button.setAttribute('href', whatsappLink);
});

const icon = document.querySelector('.icon');
const menu = document.querySelector('header nav ul');

icon.addEventListener('click', () => {
    menu.classList.toggle('active');
});