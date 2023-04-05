const formContact = () => {
const form = `
<form action="https://formspree.io/f/xvonqnyb" method="post" class="form">
    <label for="name" class="label">
        <span class="allText">Name:</span>
        <input id="name" name="name" placeholder="Name" required/>
    </label>
    <label for="email" class="label">
        <span class="allText">Email:</span>
        <input type="email" name="email" id="email" placeholder="Email" required/>
    </label>
    <label for="message" class="label">
        <span class="allText">Message:</span>
        <textarea name="message" id="message" placeholder="Message" required></textarea>
    </label>
    <label class="label">
        <input class="button-submit" type="submit" value="Submit"/>
    </label>
</form>
`
return form;
}
const section = document.querySelector(".contact");

section.insertAdjacentHTML("beforeEnd", formContact());
export default formContact;