const formContact = () => {
const form = `
<form class="form">
    <label class="label">
        <span class="text">Name:</span>
        <input type="text" placeholder="Name"/>
    </label>
    <label class="label">
        <span class="text">Email:</span>
        <input type="email" placeholder="Email"/>
    </label>
    <label class="label">
        <span class="text">Message:</span>
        <textarea type="text" placeholder="Message"></textarea>
    </label>
    <label class="label">
        <input class="button-submit" type="submit" value="submit"/>
    </label>
</form>
`
return form;
}
const section = document.querySelector(".contact");

section.insertAdjacentHTML("beforeEnd", formContact());
export default formContact;