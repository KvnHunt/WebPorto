import '../styles/contact.css';

const ContactPage = () => {
    return (
        <div className='contact'>
            <h1>CONTACT</h1>
            <div className='contact-card'>
                <h2>EMAIL:</h2>
                <a href = "mailto: huntk.twitch@gmail.com">hunk.twitch@gmail.com</a>
                <h2>PHONE NUMBER:</h2>
                <a href="tel:919-606-3753">(919)606-3753</a>
            </div>
        </div>
    )
}

export default ContactPage;